<script lang="ts">
	import { clsx } from '$lib/utils/index';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let href: string;
	let props: HTMLAttributes<HTMLAnchorElement> = {};
	let isActive = false;
	let pathname: string;
	let subpath: string[];

	// Subscribe to page store to get current URL
	$: pathname = $page.url.pathname;

	// Set isActive based on the current route
	$: subpath = pathname.split('/').filter(Boolean);
	$: isActive = href === pathname || href === `/${subpath[0]}`;

	// Use onMount to initialize the props from component
	onMount(() => {
		({ href, ...props } = $$props);
	});
</script>

<a
	{href}
	target={href.startsWith('http') ? '_blank' : '_self'}
	class={clsx(
		'hover:text-black dark:hover:text-white',
		'transition-all duration-100 ease-in-out hover:cursor-pointer hover:font-medium',
		isActive
			? 'font-medium text-black dark:text-white'
			: 'font-medium text-gray-400 dark:text-gray-300'
	)}
	{...props}
>
	<slot />
</a>
