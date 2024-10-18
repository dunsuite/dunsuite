<script lang="ts">
	import { SITE_TITLE, SITE_SUBTITLE, SITE_DESCRIPTION } from '$lib/data';
	import { page } from '$app/stores';

	export let title: string = SITE_TITLE;
	export let subtitle: string = SITE_SUBTITLE;
	export let description: string = SITE_DESCRIPTION;
	export let image: string = '/ogimage.png';

	$: currentUrl = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:image" content={image} />
	<meta name="twitter:card" content={image} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<slot />
