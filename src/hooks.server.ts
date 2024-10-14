import { type Handle } from '@sveltejs/kit';
import { createInstance } from '$lib/pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = createInstance();
	event.locals.pb.autoCancellation(false);

	const response = await resolve(event);

	return response;
};
