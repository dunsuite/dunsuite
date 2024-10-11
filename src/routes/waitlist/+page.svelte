<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { enhance } from '$app/forms';

	let isLoading = false;
	export let data;
</script>

<div
	class="animate-appear fixed left-0 top-0 -z-10 mb-6 h-44 w-full"
	style="background: var(--top-gradient, linear-gradient(90deg, rgba(255, 0, 0, 0.32) 0%, rgba(255, 25, 65, 0.32) 25%, rgba(128, 0, 128, 0.32) 50%, rgba(64, 0, 191, 0.32) 75%, rgba(0, 5, 237, 0.32) 100%)); filter: blur(100px);"
></div>

<section id="waitlist" class="flex h-screen w-full flex-col gap-6">
	<h1
		id="waitlist-title"
		class="text-title mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8"
	>
		Ready to simplify your workflow?
	</h1>
	<div
		id="waitlist-description"
		class="mt-5 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600 duration-700 animate-in slide-in-from-bottom-60"
	>
		<p>
			We're working on a new tool that will help you get things done.
			<span class="font-medium text-black"> We're hoping to launch this month. </span>

			Get in early and be the first to experience what we’ve been working on.
		</p>
	</div>

	<form
		id="waitlist-form"
		class="flex w-full flex-col gap-3 duration-1000 animate-in slide-in-from-bottom-60"
		action="?/join_waitlist"
		method="post"
		use:enhance={({ formElement }) => {
			// Form submission start
			isLoading = true;

			return async ({ result }) => {
				// Handle the result after form submission
				if (result.status === 200) {
					formElement.reset(); // reset form on success
				}
				// Stop loading regardless of result
				isLoading = false;
			};
		}}
	>
		<Input
			type="email"
			placeholder="Your email"
			name="email"
			class="rounded-xl border border-gray-300 bg-white p-5"
			required
		/>

		<Button type="submit" disabled={isLoading}>
			{isLoading ? 'Joining...' : 'Join Waitlist'}
		</Button>
	</form>
</section>
