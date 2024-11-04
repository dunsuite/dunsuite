<script lang="ts">
	import {
		Home,
		AddTask,
		CreateProject,
		GetItDone,
		TrackIt,
		KeyboardFriendly
	} from '$lib/assets/tools/duntasks';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	import { CTA, SEO, Kbd, DunTasksLogo } from '$lib/components/ui/misc';
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

<SEO
	title="DunTasks | Get Tasks Dun, Quicker"
	description="Use DunTasks to get things done easily. It's a open source tool that helps you manage your tasks."
	image="/tools/duntasks/ogimage.png"
/>

<section
	id="duntasks-hero"
	class="mb-12 flex w-full flex-col gap-6 duration-500 animate-in slide-in-from-bottom-60"
>
	<div class="mb-3 flex flex-col items-start justify-start gap-6">
		<DunTasksLogo />

		<h1
			id="duntasks-hero-title"
			class="w-full text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:tracking-[-4px]"
		>
			DunTasks <br /> <span class="text-gray-600">get tasks dun, quicker</span>
		</h1>
	</div>

	<Button
		id="duntasks-hero-button"
		data-umami-event="DunTasks – Try for FREE Button"
		href="/waitlist"
		class="w-fit transition-all duration-500 animate-in slide-in-from-bottom-80"
	>
		Try for FREE
		<Kbd key="J" />
	</Button>
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
	<h2
		id="duntasks-first-look-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		Your time spent on actually doing
	</h2>

	<img
		src={Home}
		alt="DunTasks – Home"
		class="m-0 aspect-auto w-full duration-500 animate-in slide-in-from-bottom-60 sm:-mx-5 sm:-my-2"
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
	class="mb-12 flex w-full flex-col gap-6 duration-1200 animate-in slide-in-from-bottom-60"
>
	<h2
		id="duntasks-how-it-works-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		With DunTasks, All you gotta do is,
	</h2>

	<Tabs.Root value="how-it-works-create-project" class="w-full">
		<Tabs.List class="bg-white">
			<Tabs.Trigger value="how-it-works-create-project">Create project</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-add-task">Add task</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-track-task">Track it</Tabs.Trigger>
			<Tabs.Trigger value="how-it-works-get-it-done">Get done</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="how-it-works-create-project" class="m-0 sm:-mx-5 sm:-my-2">
			<img
				src={CreateProject}
				alt="DunTasks – Create project"
				class="aspect-auto w-full duration-600 animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-add-task" class="m-0 sm:-mx-5 sm:-my-2">
			<img
				src={AddTask}
				alt="DunTasks – Add task"
				class="aspect-auto w-full duration-600 animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-track-task" class="m-0 sm:-mx-5 sm:-my-2">
			<img
				src={TrackIt}
				alt="DunTasks – Track task"
				class="aspect-auto w-full duration-600 animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
		<Tabs.Content value="how-it-works-get-it-done" class="m-0 sm:-mx-5 sm:-my-2">
			<img
				src={GetItDone}
				alt="DunTasks – Get it done"
				class="aspect-auto w-full duration-600 animate-in slide-in-from-bottom-60"
			/>
		</Tabs.Content>
	</Tabs.Root>
</section>

<section
	id="duntasks-keyboard-friendly"
	class="mb-12 flex w-full flex-col gap-6 duration-1400 animate-in slide-in-from-bottom-60"
>
	<h2
		id="duntasks-keyboard-friendly-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		Keyboard friendly
	</h2>

	<div
		class="flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-500 duration-800 animate-in slide-in-from-bottom-60"
	>
		<p>
			You don’t have to waste time dragging your cursor across the screen just to create projects,
			manage tasks, or make updates.
		</p>

		<p>
			With our <span class="text-title">pre-set shortcuts</span>, everything is just a few
			keystrokes away. You can navigate, make changes, and manage tasks more efficiently
			<span class="text-title">saving you time and effort on every action.</span>
		</p>

		<img
			src={KeyboardFriendly}
			alt="DunTasks – Keyboard friendly"
			class="m-0 aspect-auto w-full duration-700 animate-in slide-in-from-bottom-60 sm:-mx-5 sm:-my-2"
		/>
	</div>
</section>

<section
	id="duntasks-built-with-community"
	class="mb-12 flex w-full flex-col gap-6 duration-1600 animate-in slide-in-from-bottom-60"
>
	<h2
		id="duntasks-built-with-community-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
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
			data-umami-event="DunTasks – GitHub Button"
			href="https://github.com/dunsuite"
			target="_blank"
			class="w-fit"
		>
			Follow on GitHub
			<Kbd key="G" />
		</Button>
	</div>
</section>

<CTA />
