<script lang="ts">
	import type { ChangelogResponse } from '$lib/types/generated-types';
	import { ChangelogListCard } from '$lib/components/ui/misc';

	let { changelogs }: { changelogs: ChangelogResponse[] } = $props();
</script>

<div class="flex flex-col gap-4 duration-700 animate-in slide-in-from-bottom-60">
	{#each changelogs as changelog}
		<ChangelogListCard {changelog} />
	{/each}
</div>
