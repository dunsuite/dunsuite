<script lang="ts">
	import { menuItems } from '$lib/data';
	import { Button } from '$lib/components/ui/button';
	import { clsx } from '$lib/utils/index';
	import { HeaderLink, Logo, Kbd } from '$lib/components/ui/misc';
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			// Check if the focused element is an input field
			if (document.activeElement?.tagName === 'INPUT') {
				return; // Do not navigate if typing in an input
			}
			if (e.key === 'j') {
				window.location.href = '/waitlist';
			}
		});
	});
</script>

<header
	class={clsx(
		'sticky top-2 z-10 flex w-full flex-row items-center justify-between gap-3 rounded-[16px] p-1.5',
		'bg-white/70 text-black backdrop-blur-md duration-500 animate-in slide-in-from-top-5'
	)}
>
	<Logo />

	<nav class="flex flex-row items-center justify-center gap-3 font-medium sm:gap-6">
		<ul class="flex flex-row items-center justify-center gap-3 font-medium sm:gap-6">
			{#each menuItems as item}
				<li>
					<HeaderLink href={item.url}>{item.label}</HeaderLink>
				</li>
			{/each}
		</ul>
	</nav>

	<Button
		id="waitlist-button"
		href="/waitlist"
		class="group"
		data-umami-event="Header – Join Waitlist"
	>
		<span class="sm:hidden">Join</span>
		<span class="hidden sm:inline">Join waitlist</span>
		<Kbd key="J" />
	</Button>
</header>
