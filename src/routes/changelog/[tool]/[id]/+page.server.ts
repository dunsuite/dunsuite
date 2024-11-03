import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	const { id } = params;
	const changelog = await locals.pb.collection('changelog').getOne(id);

	console.log('changelog', changelog);
	return { changelog };
}) satisfies PageServerLoad;
