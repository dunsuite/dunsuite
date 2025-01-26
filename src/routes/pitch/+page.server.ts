import { error, fail, type Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis/cloudflare';
import { requestIp } from '../../hooks.server';

// Create a new rate limiter for the pitch form
const pitchRatelimit = new Ratelimit({
	redis: Redis.fromEnv({
		UPSTASH_REDIS_REST_TOKEN: env.UPSTASH_REDIS_REST_TOKEN as string,
		UPSTASH_REDIS_REST_URL: env.UPSTASH_REDIS_REST_URL as string
	}),
	limiter: Ratelimit.slidingWindow(24, '24 h'), // 24 submissions per 24 hours
	analytics: true,
	prefix: '@dunsuite/pitch/ratelimit'
});

export const actions: Actions = {
	submit_pitch: async ({ request, locals }) => {
		const userIP: string = request.headers.get('CF-Connecting-IP') || requestIp;
		console.log(`🚀 User IP: ${userIP}`);

		const data = await pitchRatelimit.limit(userIP);

		if (!data.success) {
			console.log('🚫 Rate limit exceeded');
			return error(429, 'Your request rate is higher than allowed. Please try again later.');
		}

		const formData = await request.formData();
		const amount = formData.get('amount') as string;
		const expectation = formData.get('expectation') as string;
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const about = formData.get('about') as string;

		if (!amount || !expectation || !name || !email) {
			console.log('🚫 Missing form data');
			return fail(400, { missing: true });
		}

		try {
			// Authenticate as admin
			const authData = await locals.pb.admins.authWithPassword(
				env.POCKETBASE_ADMIN_EMAIL,
				env.POCKETBASE_ADMIN_PASSWORD
			);

			if (!authData.token) {
				console.log('🚫 Authentication failed');
				throw error(403, 'Authentication failed');
			}

			// Create investment record with properly formatted data
			const investmentData = {
				name: name.trim(),
				email: email.trim().toLowerCase(),
				about: about?.trim() || '',
				amount: amount.trim(),
				expectation: expectation.trim()
			};

			// Create pitch submission in PocketBase
			await locals.pb.collection('investments').create(investmentData);

			console.log('🚀 Pitch submission created with data:', JSON.stringify(investmentData));

			// Clear auth
			locals.pb.authStore.clear();

			return {
				success: true
			};
		} catch (err) {
			console.error('Error creating pitch submission:', JSON.stringify(err));

			// Clear auth in case of error
			locals.pb.authStore.clear();

			return fail(400, {
				error: true,
				message: 'Failed to submit pitch. Please try again.'
			});
		}
	}
};
