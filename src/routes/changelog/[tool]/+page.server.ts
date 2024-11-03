import { env } from '$env/dynamic/private';
import type { ChangelogResponse } from '$lib/types/generated-types';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ locals, params }) => {
	const tool = params.tool;
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

	// Get changelog
	const changelog = await locals.pb.collection('changelog').getFullList<ChangelogResponse[]>();

	if (!changelog) {
		throw error(404, 'Changelog not found');
	}

	return { tool, changelog };
}) satisfies PageServerLoad;
