<script lang="ts">
	import type { ChangelogResponse } from '$lib/types/generated-types';
	import { env } from '$env/dynamic/public';
	import { convertTimestampToDateString } from '$lib/utils/index';
	import { ChangelogType, ChangelogVersion } from '$lib/components/ui/misc';
	let { changelog }: { changelog: ChangelogResponse } = $props();
</script>

<a href={`/changelog/${changelog.tool}/${changelog.id}`} class="flex flex-col gap-4">
	<p class="text-base font-medium text-gray-500">
		{convertTimestampToDateString(changelog.created)}
	</p>
	<img
		src={`${env.PUBLIC_FILE_URL}/${changelog.collectionId}/${changelog.id}/${changelog.cover}`}
		alt={changelog.title}
		class="aspect-auto w-full rounded-3xl border-2 border-white shadow-xl"
	/>

	<div class="flex flex-row items-center justify-start gap-2">
		<ChangelogType tag={changelog.tag} />
		<ChangelogVersion version={changelog.version} />
	</div>
	<div class="flex flex-col gap-2">
		<h2 class="text-3xl font-medium tracking-tight">{changelog.title}</h2>
		<p class="text-xl font-medium text-gray-600">{changelog.description}</p>
	</div>
</a>
