<script lang="ts">
	import { CTA, SEO } from '$lib/components/ui/misc';
</script>

<SEO title="Story | Dun" />

<div
	class="animate-appear fixed left-0 top-0 -z-10 mb-6 h-44 w-full"
	style="background: var(--top-gradient, linear-gradient(90deg, rgba(255, 0, 0, 0.32) 0%, rgba(255, 25, 65, 0.32) 25%, rgba(128, 0, 128, 0.32) 50%, rgba(64, 0, 191, 0.32) 75%, rgba(0, 5, 237, 0.32) 100%)); filter: blur(100px);"
></div>

<section id="story" class="flex h-screen w-full flex-col gap-6">
	<h1
		id="story-title"
		class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8"
	>
		Just a few people, a few tools, and a few dreams.
	</h1>
	<div
		id="story-description"
		class="mt-5 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-700 animate-in slide-in-from-bottom-60"
	>
		<p>
			There are many productivity tools available. We've tried a lot of them. And you know what?
			They're all not great.
		</p>
		<p>
			A small task shouldn't consume so much of your time. But with all the switching between tasks
			and endless features, that's exactly what happens.
		</p>
		<p>
			Most tools care more about how long you use the app rather than actually helping you complete
			your work.
		</p>
		<p>
			The few tools that attempted to simplify things? Well, they neglected user experience. We grew
			tired of managing complex workflows that didn't actually work.
		</p>
		<p>We hoped for someone to solve this issue. But, spoiler alert: it never happened.</p>
		<p>So, we decided, "Okay, we'll do it ourselves" [Of course, in Thanos' voice]</p>
		<img src="/story/thanos.gif" alt="Thanos" class="w-full" />
		<p>
			And here we are! <a
				href="https://thisux.com"
				target="_blank"
				class="text-title decoration-wavy underline-offset-4 hover:underline"
				>ThisUX – Design led product studio</a
			> with big dreams, eager to make things simpler, better, and more enjoyable, one tool at a time.
		</p>
		<p>
			And the exciting part is, we can all do it together. We're developing these tools as
			open-source, so that those who faced the same challenges can help improve it for all of us.
		</p>
		<p>Our motto is simple. And always will be.</p>
		<p class="text-black">Open app --> finish the task --> get back to your life!, that's it!</p>
		<p>Come join us—we're just beginning!</p>
		<CTA />
	</div>
</section>
