import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { dev } from '$app/environment';

export function createInstance() {
	return new PocketBase(!dev ? PUBLIC_POCKETBASE_URL : 'http://localhost:8090');
}

export const pb = createInstance();
