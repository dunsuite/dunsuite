import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	const { id } = params;
	const changelog = await locals.pb.collection('changelog').getOne(id, {
		filter: `status = "published"`
	});

	return { changelog };
}) satisfies PageServerLoad;
