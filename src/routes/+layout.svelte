<script>
	import '../app.css';
	import { Header, Gradient, Footer, Size } from '$lib/components/ui/misc';
	import { Toaster } from '$lib/components/ui/sonner';
	import { dev } from '$app/environment';
	import { env } from '$env/dynamic/public';
</script>

<svelte:head>
	{#if !dev}
		<!-- umami -->
		<script
			defer
			src="https://track.thisux.com/script.js"
			data-website-id={env.PUBLIC_UMAMI_WEBSITE_ID}
		></script>

		<!-- clarity -->
		<script type="text/javascript">
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = 1;
				t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', 'oikznhzf70');
		</script>
	{/if}
</svelte:head>

<Toaster />
<div
	class="mx-auto my-2 flex min-h-screen w-full max-w-2xl flex-col items-center justify-start p-4 font-sans antialiased"
>
	<Size />
	<Gradient />
	<Header />
	<slot></slot>
	<Footer />
</div>
