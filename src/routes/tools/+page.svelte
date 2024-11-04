<script lang="ts">
	import { SEO, DunTasksLogo } from '$lib/components/ui/misc';
</script>

<SEO title="Tools | Dun" />

<section id="tools" class="flex h-screen w-full flex-col">
	<div class="flex w-full flex-col items-start justify-start gap-5">
		<h1
			id="tools-title"
			class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8 text-balance"
		>
			Our tools
		</h1>
		<div
			id="tools-description"
			class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-700 animate-in slide-in-from-bottom-60"
		>
			<p>We're getting started with a few tools. More are coming soon.</p>
		</div>
	</div>

	<div>
		<a
			id="duntasks-tool"
			href="/duntasks"
			class="group flex w-fit flex-col items-start justify-start gap-1 underline-offset-4 duration-800 animate-in slide-in-from-bottom-60 hover:scale-105"
			data-umami-event="Tools – DunTasks Tool"
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
