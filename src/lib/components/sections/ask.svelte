<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import { instagram, discord, x, github, linkedin } from '$lib/assets/socials';
	import { clsx } from '$lib/utils/index.js';
	import AnnouncementIcon from '$lib/assets/icons/ask/announcement-icon.svelte';
	import CodeIcon from '$lib/assets/icons/ask/code-icon.svelte';
	import HandShakeIcon from '$lib/assets/icons/ask/hand-shake-icon.svelte';
	import ChevronIcon from '$lib/assets/icons/chevron-icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import IconCard from '$lib/components/ui/misc/icon-card.svelte';
	import Kbd from '$lib/components/ui/misc/kbd.svelte';

	let formData = $state({
		amount: 0,
		expectation: 0,
		name: '',
		email: '',
		about: ''
	});

	let isLoading = $state(false);
	let isSubmitted = $state(false);

	const asks = [
		{ icon: CodeIcon, label: '50% on product development' },
		{ icon: HandShakeIcon, label: '30% on hiring A players' },
		{ icon: AnnouncementIcon, label: '20% on marketing & sales' }
	];

	const expectationOptions = [
		{
			expectation: '5x return – High-risk, high-reward potential',
			value: '5x return'
		},
		{
			expectation: '3x return – Balanced growth opportunity',
			value: '3x return'
		},
		{
			expectation: '10% equity – Ownership stake in the company',
			value: '10% equity'
		},
		{
			expectation: '2-5% revenue share – Ongoing share of profits',
			value: '2-5% revenue share'
		},
		{
			expectation: 'Convertible note – Converts to equity later',
			value: 'Convertible note'
		}
	];

	const amountOptions = [
		{
			amount: '$10000 – Angel investors testing the waters',
			value: '$10000'
		},
		{
			amount: '$50000 – Moderate investment for early-stage growth',
			value: '$50000'
		},
		{
			amount: '$100000 - Strong seed-stage contribution',
			value: '$100000'
		},
		{
			amount: '$500000 - For scaling and expansion',
			value: '$500000'
		},
		{
			amount: '$1000000 - Lead funding for significant impact',
			value: '$1000000'
		}
	];

	const socialLinks = [
		{ name: 'X', url: 'https://x.com/dunsuite', icon: x },
		{ name: 'GitHub', url: 'https://github.com/dunsuite', icon: github },
		{ name: 'Discord', url: 'https://discord.gg/kxF3Snje', icon: discord },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/company/dunsuite/', icon: linkedin },
		{ name: 'Instagram', url: 'https://www.instagram.com/dunsuite/', icon: instagram }
	];

	function handleKeyPress(event: KeyboardEvent) {
		if (
			event.key === 'Enter' &&
			(!formData.name || !formData.email || formData.amount === 0 || formData.expectation === 0)
		) {
			event.preventDefault();
			toast.error('Please fill in all required fields.');
		}
	}
</script>

<section
	id="pitch-ask"
	class="mb-12 flex w-full flex-col gap-10 duration-1000 animate-in slide-in-from-bottom-60"
>
	{#if !isSubmitted}
		<h2
			id="pitch-ask-title"
			class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
		>
			Now, let's talk about how you can help
		</h2>

		<div class="flex flex-col gap-6 font-medium text-gray-500">
			<p class="text-xl leading-relaxed">
				We're raising <span class="font-medium text-black">$1M</span> to grow DunSuite. Here's how we'll
				use it
			</p>

			<div class="text-md grid w-full grid-cols-1 gap-2 leading-normal text-black lg:grid-cols-3">
				{#each asks as ask}
					<IconCard icon={ask.icon} label={ask.label} />
				{/each}
			</div>
		</div>

		<form
			class="flex flex-wrap items-center gap-5 font-medium leading-relaxed text-gray-500 transition-all duration-500"
			action="?/submit_pitch"
			method="POST"
			use:enhance={({ formElement }) => {
				isLoading = true;

				return async ({ result }) => {
					if (result.type === 'success') {
						formElement.reset();
						isLoading = false;
						isSubmitted = true;
						toast.success("Thank you for your interest! We'll get back to you soon.");

						// Reset form
						formData = {
							amount: 0,
							expectation: 0,
							name: '',
							email: '',
							about: ''
						};
					} else if (result.type === 'error') {
						isLoading = false;
						if (result.status === 429) {
							toast.error('Rate limit exceeded. Please try again later.');
						} else if (result.status === 400) {
							toast.error('Please fill in all required fields.');
						} else if (result.status === 403) {
							toast.error('Authentication failed. Please try again.');
						} else {
							toast.error('Something went wrong. Please try again.');
						}
					}
				};
			}}
		>
			<div class="flex w-full flex-wrap items-center gap-3">
				<span class="text-lg">Would you like to invest?</span>
				<span class="text-lg">if yes, how much are you looking to invest?</span>

				<div class="relative inline-block">
					<select
						name="amount"
						id="amount"
						class="text-md placeholder:text-md peer appearance-none rounded-xl bg-white px-3 py-2 pr-10 text-black outline-none transition-all duration-300 focus:rounded-b-none focus:border-b-2 focus:border-black focus:outline-none"
						placeholder="Select your preferred investment amount"
						bind:value={formData.amount}
						onkeypress={handleKeyPress}
						required
					>
						<option value="">Select your preferred investment amount</option>
						{#each amountOptions as option}
							<option value={option.value}>{option.amount}</option>
						{/each}
					</select>
					<span
						class="pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-300 peer-focus:rotate-180"
					>
						<ChevronIcon />
					</span>
				</div>

				<span class="text-lg">What's your preferred return expectation?</span>

				<div class="relative inline-block">
					<select
						name="expectation"
						id="expectation"
						class="text-md placeholder:text-md peer w-[230px] appearance-none rounded-xl bg-white px-3 py-2 pr-10 text-black outline-none transition-all duration-300 focus:rounded-b-none focus:border-b-2 focus:border-black focus:outline-none"
						bind:value={formData.expectation}
						onkeypress={handleKeyPress}
						placeholder="Select your preferred return expectation"
						required
					>
						<option value="">Select your preferred return expectation</option>
						{#each expectationOptions as option}
							<option value={option.value}>{option.expectation}</option>
						{/each}
					</select>

					<span
						class="pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-300 peer-focus:rotate-180"
					>
						<ChevronIcon />
					</span>
				</div>

				<span class="text-lg">And you are?</span>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Your name"
					class="text-md placeholder:text-md w-full rounded-xl bg-white px-3 py-2 text-black outline-none placeholder:text-slate-400 focus:rounded-b-none focus:border-b-2 focus:border-black focus:outline-none lg:w-[270px]"
					bind:value={formData.name}
					onkeypress={handleKeyPress}
					required
				/>

				<span class="text-lg">How can we reach you?</span>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email"
					class="text-md placeholder:text-md w-full rounded-xl bg-white px-3 py-2 text-black outline-none transition-all duration-300 placeholder:text-slate-400 focus:rounded-b-none focus:border-b-2 focus:border-black focus:outline-none lg:w-[300px]"
					bind:value={formData.email}
					onkeypress={handleKeyPress}
					required
				/>
			</div>

			<div
				class="flex w-full flex-col gap-3 font-medium leading-relaxed text-gray-500 transition-all duration-300"
			>
				<span class="text-lg">Tell us something about yourself</span>

				<textarea
					name="about"
					id="about"
					class="placeholder:text-md text-md h-[120px] w-full resize-none rounded-xl bg-white p-3 text-black outline-none transition-all duration-300 placeholder:text-slate-400 focus:rounded-b-none focus:border-b-2 focus:border-black focus:outline-none"
					placeholder="Could help us know you better"
					bind:value={formData.about}
					onkeypress={handleKeyPress}
					required
				></textarea>
			</div>

			<Button
				id="pitch-form-submit-button"
				type="submit"
				disabled={isLoading}
				class="group w-fit"
				data-umami-event="Pitch – Form Submit Button"
			>
				{isLoading ? 'Submitting...' : 'Submit'}
				{#if !isLoading}
					<Kbd key="S" />
				{/if}
			</Button>
		</form>
	{:else}
		<h2
			id="follow-us-title"
			class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
		>
			Thank you for your interest! We'll get back to you soon. In the meantime, follow us for
			updates
		</h2>

		<ul class="flex flex-wrap gap-3">
			{#each socialLinks as link}
				<li>
					<a
						id="pitch-social-link"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex size-24 items-center justify-center rounded-2xl bg-white p-8 duration-700 animate-in slide-in-from-bottom-60"
						data-umami-event={`Pitch – ${link.name}`}
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
