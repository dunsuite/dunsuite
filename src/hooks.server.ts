import { type Handle } from '@sveltejs/kit';
import { createInstance } from '$lib/pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = createInstance();
	const response = await resolve(event);
	return response;
};
