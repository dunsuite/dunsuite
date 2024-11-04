<script lang="ts">
	import { SEO } from '$lib/components/ui/misc';
	import type { ChangelogResponse } from '$lib/types/generated-types';
	import { ChangelogList } from '$lib/components/ui/misc';

	let { data }: { data: { tool: string; changelog: ChangelogResponse[] } } = $props();
</script>

<SEO 
    title={`${data.tool} Changelog – DunTasks`}
    description={`Stay up to date with the latest features, improvements, and fixes for ${data.tool}. View our detailed changelog to see what's new.`}
/>

<section id="changelog" class="flex min-h-screen w-full flex-col gap-4">
	<h1
		id="hero-title"
		class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8 mb-4 text-balance"
	>
		 Changelog
	</h1>

	<ChangelogList changelogs={data.changelog} />
</section>
