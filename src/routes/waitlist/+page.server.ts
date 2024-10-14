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

		try {
			// Add user to waitlist after admin authentication
			await locals.pb.collection('waitlist').create({
				email: email
			});

			return {
				status: 200,
				body: { success: true }
			};
		} catch (error) {
			return fail(500, { error: error as string });
		}
	}
};
