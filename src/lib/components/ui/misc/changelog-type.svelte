<script lang="ts">
	import type { ChangelogTagOptions } from '$lib/types/generated-types';

	let { tag }: { tag: ChangelogTagOptions } = $props();
	let badgeColor =
		tag === 'Feature'
			? 'bg-blue-100'
			: tag === 'Bug'
			? 'bg-red-100'
			: tag === 'New'
			? 'bg-pink-100'
			: 'bg-green-100';
	let badgeTextColor =
		tag === 'Feature'
			? 'text-blue-500'
			: tag === 'Bug'
			? 'text-red-500'
			: tag === 'New'
			? 'text-pink-500'
			: 'text-green-500';
</script>

<div class="flex flex-row items-center justify-center gap-2">
	<p class={`text-sm font-medium ${badgeColor} rounded-lg px-2 py-1 ${badgeTextColor}`}>{tag}</p>
</div>
