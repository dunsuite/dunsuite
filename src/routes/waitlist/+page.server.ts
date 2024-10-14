import { error, fail, type Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { waitlistRatelimit } from '$lib/server/ratelimiter';
import { requestIp } from '../../hooks.server';

export const load = async () => {
	return {};
};

export const actions: Actions = {
	join_waitlist: async ({ request, locals }) => {
		const userIP: string = request.headers.get('CF-Connecting-IP') || requestIp;

		const data = await waitlistRatelimit.limit(userIP); // Apply rate limiting

		if (!data.success) {
			// Check if rate limit is exceeded
			return error(429, 'Your request rate is higher than allowed. Please try again later.');
		}

		const formData = await request.formData();
		const email = formData.get('email') as string;

		if (!email) {
			return fail(400, { email, missing: true });
		}

		// Authenticate as admin
		const authData = await locals.pb.admins
			.authWithPassword(env.POCKETBASE_ADMIN_EMAIL, env.POCKETBASE_ADMIN_PASSWORD)
			.catch((err) => {
				console.log(err);
				throw error(403, 'Authentication failed');
			});

		// Check if admin is authenticated
		if (!authData.token) {
			throw error(403, 'Authentication failed');
		}

		// create user in waitlist
		await locals.pb.collection('waitlist').create({
			email: email
		});

		// clear auth
		locals.pb.authStore.clear();

		return {
			status: 200,
			body: { success: true }
		};
	}
};
