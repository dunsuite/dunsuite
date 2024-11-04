<script lang="ts">
	import { SEO, DunTasksLogo } from '$lib/components/ui/misc';
</script>

<SEO title="Changelog | Dun" description="All the updates to Dun and its tools." />

<section id="changelog" class="flex h-screen w-full flex-col">
	<div class="flex w-full flex-col items-start justify-start gap-5">
		<h1
			id="changelog-title"
			class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8 text-balance"
		>
			Changelog
		</h1>
		<div
			id="changelog-description"
			class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-700 animate-in slide-in-from-bottom-60"
		>
			<p>All the updates to Dun and its tools.</p>
		</div>
	</div>

	<div>
		<a
			id="duntasks-tool"
			href="/changelog/duntasks"
			class="group flex w-fit flex-col items-start justify-start gap-1 underline-offset-4 duration-800 animate-in slide-in-from-bottom-60 hover:scale-105"
			data-umami-event="Changelog – DunTasks"
		>
			<DunTasksLogo />
			<p
				class="w-full text-center font-semibold text-title group-hover:text-title/70 group-hover:underline group-hover:decoration-wavy"
			>
				DunTasks
			</p>
		</a>
	</div>
</section>
