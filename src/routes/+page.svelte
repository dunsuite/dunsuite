<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { CTA, SEO, Kbd } from '$lib/components/ui/misc';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'g') {
				window.open('https://github.com/dunsuite', '_blank');
			} else if (e.key === 'j') {
				window.location.href = '/waitlist';
			} else if (e.key === 'h') {
				window.location.href = '/';
				toast.success('You pressed H!... Redirecting you to the homepage.', {
					duration: 3000
				});
			}
		});
	});
</script>

<SEO title="Dun – The Simple, Open-Source Business Tool Suite" />

<section id="hero" class="mb-8 flex w-full flex-col gap-6">
	<h1
		id="hero-title"
		class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-700 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8"
	>
		Work tools built better!
	</h1>

	<div
		id="hero-description"
		class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-1000 animate-in slide-in-from-bottom-60"
	>
		<p>
			<span class="font-medium text-black"> Business tools today are too complicated.</span> Too many
			features. Endless distractions. Constant updates that break things. Information scattered everywhere.
			Confusing interfaces.
		</p>

		<p>
			Tools should simplify, not complicate. They should help you work smarter, not bury you in
			options you never asked for.
		</p>

		<p>
			Imagine a tool that works with you, not against you. <span class="font-medium text-black">
				A tool that keeps everything in one place. No distractions. No time wasted switching apps.
			</span>
		</p>

		<p>
			That’s what <span class="font-medium text-black">Dun</span> is all about.
		</p>
	</div>
</section>

<section
	id="one-tool-one-job"
	class="mb-8 flex w-full flex-col gap-6 text-title duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="one-tool-one-job-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		One tool, One job, Dun right.
	</h2>

	<div
		id="one-tool-one-job-description"
		class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600"
	>
		<p>
			We're building a suite of focused, open––source tools where each tool does only one job but
			exceptionally well.
		</p>

		<p class="text-title">Open app --> finish the task --> get back to your life!, that's it!</p>

		<p>
			Designed with simplicity and a better UX in mind. No context switching, distractions or
			complex workflows that ruin your productivity.
		</p>
	</div>
</section>

<section
	id="open-to-all"
	class="mb-8 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="open-to-all-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		Driven by You, Open to All.
	</h2>

	<div
		id="open-to-all-description"
		class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600"
	>
		<p>
			Dun isn’t just for you—it’s by you. As open-source tools, Dun products are built with
			community feedback at the forefront.
		</p>

		<p>You can tweak, improve, and contribute, making the tools truly yours.</p>

		<Button
			id="open-to-all-github-button"
			href="https://github.com/dunsuite"
			class="w-fit"
			data-umami-event="Open to All – GitHub Button"
		>
			View on GitHub
			<Kbd key="G" />
		</Button>
	</div>

	<CTA />
</section>
