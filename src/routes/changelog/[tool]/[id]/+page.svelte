<script lang="ts">
	import type { ChangelogResponse } from '$lib/types/generated-types';
	import { SEO } from '$lib/components/ui/misc';
	import { env } from '$env/dynamic/public';
	import { ChangelogType, ChangelogVersion } from '$lib/components/ui/misc';
	import { convertTimestampToDateString } from '$lib/utils/index';
	import { cn } from '$lib/utils';

	let { data }: { data: { changelog: ChangelogResponse } } = $props();
</script>

<SEO
	title={`${data.changelog.title} – ${data.changelog.tool} Changelog`}
	description={data.changelog.description}
/>

<section id="changelog" class="flex min-h-screen w-full flex-col gap-4">
	<h1
		id="hero-title"
		class="mb-4 mt-4 w-full text-balance pt-3 text-start text-[min(12vw,64px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8"
	>
		{data.changelog.title}
	</h1>

	<div
		class="flex flex-row items-center justify-start gap-2 duration-500 animate-in slide-in-from-bottom-60"
	>
		<ChangelogType tag={data.changelog.tag} />
		<ChangelogVersion version={data.changelog.version} />
		<p class="text-base font-medium text-gray-500">
			{convertTimestampToDateString(data.changelog.created)}
		</p>
	</div>

	<img
		src={`${env.PUBLIC_FILE_URL}/${data.changelog.collectionId}/${data.changelog.id}/${data.changelog.cover}`}
		alt={data.changelog.title}
		class="my-4 aspect-auto w-full rounded-3xl border-2 border-white shadow-xl duration-600 animate-in slide-in-from-bottom-60"
	/>

	<div class="text-xl font-medium text-gray-600 duration-700 animate-in slide-in-from-bottom-60">
		<span class="text-xl font-medium text-black">tl;dr:</span>
		{data.changelog.description}
	</div>

	<div
		class={cn(
			'prose prose-lg flex flex-col duration-800 animate-in slide-in-from-bottom-96',
			'prose-p:text-xl prose-p:font-medium',
			'prose-a:text-xl prose-a:font-medium prose-a:underline',
			'prose-img:rounded-3xl prose-img:border-2 prose-img:border-white ',
			'prose-h1:font-medium prose-h1:mb-1',
			'prose-h2:font-medium prose-h2:mb-1',
			'prose-h3:font-medium prose-h3:mb-1',
			'prose-h4:font-medium prose-h4:mb-1',
			'prose-h5:font-medium prose-h5:mb-1',
			'prose-h6:font-medium prose-h6:mb-1',
			'prose-ul:text-xl prose-ul:font-medium',
			'prose-ol:text-xl prose-ol:font-medium',
			'prose-li:text-xl prose-li:font-medium',
			'prose-li > prose-li > prose-p:my-0 prose-p:leading-tight',
			'prose-table:text-xl prose-table:font-medium',
			'prose-th:text-xl prose-th:font-medium',
			'prose-td:text-xl prose-td:font-medium',
			'prose-strong:text-xl prose-strong:font-medium',
			'prose-em:text-xl prose-em:font-medium',
			'prose-code:text-xl prose-code:font-medium',
			'prose-del:text-xl prose-del:font-medium',
			'prose-a:text-xl prose-a:font-medium prose-a:underline',
			'prose-blockquote:text-xl prose-blockquote:font-medium',
			'prose-iframe:text-xl prose-iframe:font-medium',
			'prose-img:text-xl prose-img:font-medium',
			'prose-video:text-xl prose-video:font-medium',
			'prose-figure:text-xl prose-figure:font-medium',
			'prose-pre:text-xl prose-pre:font-medium',
			'prose-hr:text-xl prose-hr:font-medium',
			'prose-custom:text-xl prose-custom:font-medium'
		)}
	>
		{#if data.changelog.content}
			{@html data.changelog.content}
		{:else}
			<p class="text-xl font-medium text-gray-600">No content available.</p>
		{/if}
	</div>
</section>
