<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import { instagram, discord, x, github, linkedin } from '$lib/assets/socials';
	import { clsx } from '$lib/utils/index.js';
	import { SEO } from '$lib/components/ui/misc';

	const socialLinks = [
		{ name: 'X', url: 'https://x.com/dunsuite', icon: x },
		{ name: 'GitHub', url: 'https://github.com/dunsuite', icon: github },
		{ name: 'Discord', url: 'https://discord.gg/kxF3Snje', icon: discord },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/company/dunsuite/', icon: linkedin },
		{ name: 'Instagram', url: 'https://www.instagram.com/dunsuite/', icon: instagram }
	];

	let email = '';
	let isLoading = false;
	let showSocials = false;

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter' && !email) {
			event.preventDefault();
			toast.error('Please enter your email.');
		}
	}
</script>

<SEO title="Waitlist | Dun" />

<section id="waitlist" class="flex h-screen w-full flex-col gap-6">
	{#if !showSocials}
		<h1
			id="waitlist-title"
			class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8 text-balance"
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
						isLoading = false;
						showSocials = true;
						toast.success('You have been added to the waitlist!');
					} else if (result.status === 429) {
						isLoading = false;
						toast.error('Rate limit exceeded. Please try again later.');
					} else if (result.status === 400) {
						isLoading = false;
						toast.error('You are already in the waitlist.');
					} else if (result.status === 403) {
						isLoading = false;
						toast.error('Authentication failed. Please try again.');
					} else {
						isLoading = false;
						toast.error('Something went wrong. Please try again.');
					}
				};
			}}
		>
			<Input
				type="email"
				placeholder="Your email"
				name="email"
				class="rounded-xl border border-gray-300 bg-white p-5"
				bind:value={email}
				required
				on:keypress={handleKeyPress}
			/>

			<Button
				id="waitlist-button"
				type="submit"
				disabled={isLoading}
				class="group"
				data-umami-event="Waitlist – Join Waitlist"
			>
				{isLoading ? 'Joining...' : 'Join Waitlist'}

				{#if !isLoading}
					<span
						class="ml-2 hidden rounded-md border border-gray-700 bg-gray-800 px-1 py-0.5 text-xs text-gray-500 transition-all duration-150 group-hover:border-gray-500 group-hover:bg-gray-700 group-hover:text-gray-300 sm:block"
					>
							↵
					</span>
				{/if}
			</Button>
		</form>
	{:else}
		<h1
			id="follow-us-title"
			class="mt-4 w-full pt-3 text-start text-[min(12vw,92px)] font-medium leading-[0.9] tracking-[-2px] text-title duration-500 animate-in slide-in-from-bottom-60 sm:pt-12 sm:tracking-[-4px] md:pt-8 text-balance"
		>
			You’re on the list! follow us for updates
		</h1>

		<ul class="flex flex-wrap gap-3">
			{#each socialLinks as link}
				<li>
					<a
						id="waitlist-social-link"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex size-24 items-center justify-center rounded-2xl bg-white p-8 duration-700 animate-in slide-in-from-bottom-60"
						data-umami-event={`Waitlist – ${link.name}`}
					>
						<img
							src={link.icon}
							alt={link.name}
							class={clsx(
								'size-8',
								'transition-opacity duration-700',
								'transition-transform duration-700',
								'group-hover:scale-110'
							)}
						/>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
