<script lang="ts">
	import { menuItems } from '$lib/data';
	import { Button } from '$lib/components/ui/button';
	import { clsx } from '$lib/utils/index';
	import { HeaderLink, Logo } from '$lib/components/ui/misc';
</script>

<div
	class={clsx(
		'sticky top-2 z-10 flex w-full flex-row items-center justify-between gap-3 rounded-[16px] p-1.5',
		'bg-white/70 text-black duration-500 animate-in slide-in-from-top-5 backdrop-blur-md'
	)}
>
	<Logo />

	<div class="flex flex-row items-center justify-center gap-3 font-medium sm:gap-6">
		{#each menuItems as item}
			<HeaderLink href={item.url}>{item.label}</HeaderLink>
		{/each}
	</div>

	<Button href="/waitlist">Join waitlist</Button>
</div>
