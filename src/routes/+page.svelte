<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="animate-appear fixed left-0 top-0 -z-10 mb-6 h-44 w-full"
	style="background: var(--top-gradient, linear-gradient(90deg, rgba(255, 0, 0, 0.32) 0%, rgba(255, 25, 65, 0.32) 25%, rgba(128, 0, 128, 0.32) 50%, rgba(64, 0, 191, 0.32) 75%, rgba(0, 5, 237, 0.32) 100%)); filter: blur(100px);"
></div>

<section id="hero" class="mb-8 flex w-full flex-col gap-6">
	<h1
		id="hero-title"
		class="animate-in slide-in-from-bottom-60 text-title mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] duration-700 sm:pt-12 sm:tracking-[-4px] md:pt-8"
	>
		Work tools built better!
	</h1>

	<div
		id="hero-description"
		class="animate-in slide-in-from-bottom-60 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-1000"
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
	class="animate-in slide-in-from-bottom-60 text-title mb-8 flex w-full flex-col gap-6 duration-1000"
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

		<p class="text-black">Open app --> finish the task --> get back to your life!, that's it!</p>

		<p>
			Designed with simplicity and a better UX in mind. No context switching, distractions or
			complex workflows that ruin your productivity.
		</p>
	</div>
</section>

<section
	id="open-to-all"
	class="animate-in slide-in-from-bottom-60 mb-8 flex w-full flex-col gap-6 duration-1000"
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

		<Button href="https://github.com/dunsuite" type="href" variant="default" class="w-fit"
			>View on GitHub</Button
		>
	</div>

	<section
		id="open-to-all-cta"
		class="animate-in slide-in-from-bottom-60 flex w-full flex-col gap-6 duration-1000"
	>
		<h2
			id="open-to-all-cta-title"
			class="w-full text-start text-4xl font-medium leading-tight tracking-tight text-gray-500"
		>
			Say goodbye to the <s>clutter</s>
			<br />
			<span class="text-black">And get things Dun.</span>
		</h2>

		<Button href="/waitlist" class="w-fit">Join waitlist</Button>
	</section>
</section>
