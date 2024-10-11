import { error, fail, type Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load = async () => {
	return {};
};

export const actions: Actions = {
	join_waitlist: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		if (!email) {
			return fail(400, { email, missing: true });
		}

		// Authenticate as admin
		await locals.pb
			.collection('_superusers')
			.authWithPassword(env.POCKETBASE_ADMIN_EMAIL, env.POCKETBASE_ADMIN_PASSWORD)
			.catch((err) => {
				if (err.status === 429) {
					console.log('Rate limit exceeded in admin auth');
					throw error(429, 'Rate limit exceeded');
				}
				throw error(403, 'Authentication failed');
			});

		// Add user to waitlist after admin authentication
		await locals.pb.collection('waitlist').create({
			email
		});

		return {
			status: 200,
			body: { success: true }
		};
	}
};
