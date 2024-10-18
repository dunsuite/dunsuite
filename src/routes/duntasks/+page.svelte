<script lang="ts">
	import {
		Home,
		Logo,
		AddTask,
		CreateProject,
		GetItDone,
		TrackIt,
		KeyboardFriendly
	} from '$lib/assets/tools/duntasks';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	import { CTA, SEO, Kbd } from '$lib/components/ui/misc';
</script>

<SEO title="DunTasks | Get Tasks Dun, Quicker" />

<section
	id="duntasks-hero"
	class="mb-12 flex w-full flex-col gap-6 duration-500 animate-in slide-in-from-bottom-60"
>
	<div class="mb-3 flex flex-col items-start justify-start gap-3">
		<img
			src={Logo}
			alt="DunTasks Logo"
			class="-m-5 mt-3 size-44 duration-200 animate-in slide-in-from-bottom-60"
		/>

		<h1
			id="duntasks-hero-title"
			class="w-full text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:tracking-[-4px]"
		>
			DunTasks <br /> <span class="text-gray-600">get tasks dun, quicker</span>
		</h1>
	</div>

	<Button class="w-fit transition-all duration-500 animate-in slide-in-from-bottom-80"
		>Try for FREE</Button
	>
	<div
		id="duntasks-hero-description"
		class="mt-5 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-500 duration-700 animate-in slide-in-from-bottom-60"
	>
		<p>
			Most task tools are full of <span class="text-title">useless features</span>. They should help
			you <span class="text-title">work faster</span>, not create more work.
		</p>
		<p>
			Many are <span class="text-title">too complex</span> to figure out. Others look nice but
			<span class="text-title">forget their purpose</span>—helping you get things done.
		</p>
		<p>
			That's why we're making <span class="text-title">DunTasks</span>, a task tool that actually
			<span class="text-title">works</span>.
		</p>
	</div>
</section>

<section
	id="duntasks-first-look"
	class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2 id="duntasks-first-look-title" class="text-2xl font-medium text-title">
		Your time spent on actually doing
	</h2>

	<img
		src={Home}
		alt="DunTasks – Home"
		class="-mx-5 -my-2 aspect-auto w-full duration-500 animate-in slide-in-from-bottom-60"
	/>

	<div
		id="duntasks-first-look-description"
		class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-500 duration-700 animate-in slide-in-from-bottom-60"
	>
		<p>
			With clean & simple interface, DunTasks removes everything you don’t need & keeps just enough
			to focus on your task. <span class="text-title">Add, track, and finish your task</span> without
			any distraction.
		</p>

		<p>
			No time spent on figuring out the workflow. Just straight––forward design that takes you few
			mins to adapt & get things dun.
		</p>
	</div>
</section>

<section
	id="duntasks-how-it-works"
	class="duration-1200 mb-12 flex w-full flex-col gap-6 animate-in slide-in-from-bottom-60"
>
	<h2 id="duntasks-how-it-works-title" class="text-2xl font-medium text-title">
		With DunTasks, All you gotta do is,
	</h2>

	<Tabs.Root value="how-it-works-create-project" class="w-full">
		<Tabs.List class="bg-white">
			<Tabs.Trigger value="how-it-works-create-project">Create project</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-add-task">Add task</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-track-task">Track it</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-get-it-done">Get done</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="how-it-works-create-project" class="-mx-5 -my-2">
			<img
				src={CreateProject}
				alt="DunTasks – Create project"
				class="duration-600 aspect-auto w-full animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-add-task" class="-mx-5 -my-2">
			<img
				src={AddTask}
				alt="DunTasks – Add task"
				class="duration-600 aspect-auto w-full animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-track-task" class="-mx-5 -my-2">
			<img
				src={TrackIt}
				alt="DunTasks – Track task"
				class="duration-600 aspect-auto w-full animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-get-it-done" class="-mx-5 -my-2">
			<img
				src={GetItDone}
				alt="DunTasks – Get it done"
				class="duration-600 aspect-auto w-full animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
	</Tabs.Root>
</section>

<section
	id="duntasks-keyboard-friendly"
	class="duration-1400 mb-12 flex w-full flex-col gap-6 animate-in slide-in-from-bottom-60"
>
	<h2 id="duntasks-keyboard-friendly-title" class="text-2xl font-medium text-title">
		Keyboard friendly
	</h2>

	<div
		class="duration-800 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-500 animate-in slide-in-from-bottom-60"
	>
		<p>
			You don’t have to waste time dragging your cursor across the screen just to create projects,
			manage tasks, or make updates.
		</p>

		<p>
			With our <span class="text-title">pre-set shortcuts</span>, everything is just a few
			keystrokes away. You can navigate, make changes, and manage tasks more efficiently—<span
				class="text-title">saving you time and effort on every action.</span
			>
		</p>

		<img
			src={KeyboardFriendly}
			alt="DunTasks – Keyboard friendly"
			class="-mx-5 -my-2 aspect-auto w-full duration-700 animate-in slide-in-from-bottom-60"
		/>
	</div>
</section>

<section
	id="duntasks-built-with-community"
	class="duration-1600 mb-12 flex w-full flex-col gap-6 animate-in slide-in-from-bottom-60"
>
	<h2 id="duntasks-built-with-community-title" class="text-2xl font-medium text-title">
		Built with community support
	</h2>

	<div
		class="duration-900 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-500 animate-in slide-in-from-bottom-60"
	>
		<p>
			<span class="text-title">DunTasks</span> isn’t another one of those
			<span class="text-title">"we're gonna build it and then see what people think"</span>
			projects.
		</p>

		<p>
			We're building DunTasks because we use it and because we think it can be better. We're
			building it <span class="text-title">for the community––by the community.</span>
		</p>

		<Button
			id="duntasks-github-button"
			href="https://github.com/dunsuite/duntasks"
			class="w-fit"
			data-umami-event="DunTasks – GitHub Button"
		>
			Follow on GitHub
			<Kbd key="G" />
		</Button>
	</div>
</section>

<CTA />
