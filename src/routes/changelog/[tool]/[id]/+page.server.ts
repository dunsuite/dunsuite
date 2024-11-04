import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	const { id } = params;
	const changelog = await locals.pb.collection('changelog').getOne(id, {
		filter: `status = "published"`
	});

	console.log('changelog', changelog);
	return { changelog };
}) satisfies PageServerLoad;
