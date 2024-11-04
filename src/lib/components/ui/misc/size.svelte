<script lang="ts">
	import { dev } from '$app/environment';

	let dimensions = $state({ width: 0, height: 0 });

	function updateDimensions() {
		dimensions = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}

	$effect(() => {
		// Only run in browser environment
		if (typeof window !== 'undefined') {
			updateDimensions();
			window.addEventListener('resize', updateDimensions);

			// Cleanup event listener
			return () => window.removeEventListener('resize', updateDimensions);
		}
	});
</script>

{#if dev}
	<div
		class="fixed bottom-5 right-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white"
	>
		<span>{dimensions.width.toLocaleString()} x {dimensions.height.toLocaleString()}</span>
		<div class="h-4 w-px bg-gray-800" />
		<span class="sm:hidden">XS</span>
		<span class="hidden sm:inline md:hidden">SM</span>
		<span class="hidden md:inline lg:hidden">MD</span>
		<span class="hidden lg:inline xl:hidden">LG</span>
		<span class="hidden xl:inline 2xl:hidden">XL</span>
		<span class="hidden 2xl:inline">2XL</span>
	</div>
{/if}
