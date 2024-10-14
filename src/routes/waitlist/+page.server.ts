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
		const authData = await locals.pb.admins
			.authWithPassword(env.POCKETBASE_ADMIN_EMAIL, env.POCKETBASE_ADMIN_PASSWORD)
			.catch((err) => {
				console.log(err);
				throw error(403, 'Authentication failed');
			});

		console.log('authData', authData);

		if (authData.token) {
			// Add user to waitlist after admin authentication
			await locals.pb.collection('waitlist').create({
				email: email
			});

			locals.pb.authStore.clear();

			return {
				status: 200,
				body: { success: true }
			};
		} else {
			throw error(403, 'Authentication failed');
		}
	}
};
