<script lang="ts">
	import { fly } from 'svelte/transition';
	import ImageDescription from './image-description.svelte';
	import { quintOut } from 'svelte/easing';
	import * as Dialog from '$lib/components/ui/dialog';

	interface ExplainerCardProps {
		caption: string;
		images: { src: string; description: string }[];
		index: number;
		activeIndex: number;
		activeIndexHandle: (index: number) => void;
	}

	let { caption, images, index, activeIndex, activeIndexHandle }: ExplainerCardProps = $props();

	let showDialog = $state(false);
	let selectedImage = $state<(typeof images)[0] | null>(null);

	const handleCardClick = (event: MouseEvent, clickedIndex: number) => {
		event.preventDefault();

		if (clickedIndex === activeIndex) return;

		const card = event.currentTarget as HTMLElement;
		const clickY = event.clientY - card.getBoundingClientRect().top;

		activeIndexHandle(clickedIndex);

		requestAnimationFrame(() => {
			const newCardPosition = card.getBoundingClientRect().top;
			// Add offset here (40px or 64px)
			const offset = 64; // or 40 based on your preference
			const targetScroll = window.scrollY + newCardPosition - clickY - offset;
			window.scrollTo({
				top: targetScroll,
				behavior: 'smooth'
			});
		});
	};

	const handleImageClick = (event: MouseEvent, image: (typeof images)[0]) => {
		event.stopPropagation(); // Prevent card click handler from firing
		selectedImage = image;
		showDialog = true;
	};
</script>

<button
	data-card-index={index}
	class="flex cursor-pointer flex-col gap-4 overflow-clip rounded-xl bg-black bg-opacity-5 p-3 transition-all duration-300"
	onclick={(e) => handleCardClick(e, index)}
>
	<p class="font-medium text-gray-700">{caption}</p>

	<div
		in:fly={{
			duration: 300,
			easing: quintOut,
			y: 50 // Slides up from 50px below
		}}
		out:fly={{
			duration: 300,
			easing: quintOut,
			y: 50
		}}
		class={`flex flex-col gap-4 transition-all duration-300 ${activeIndex === index ? 'flex' : 'hidden'}`}
	>
		{#each images as image}
			<div
				in:fly={{
					duration: 300,
					delay: index * 100, // Staggered animation
					easing: quintOut,
					y: 20
				}}
				class="group/image relative w-full"
				onclick={(e) => handleImageClick(e, image)}
				tabindex="0"
			>
				<img
					src={image.src}
					alt={caption}
					class="w-full cursor-zoom-in rounded-2xl border-2 border-white shadow-xl"
				/>
				{#if image.description}
					<ImageDescription description={image.description} />
				{/if}
			</div>
		{/each}
	</div>
</button>

<Dialog.Root bind:open={showDialog}>
	<Dialog.Content class="max-h-[95vh] max-w-[95vw] p-0">
		<div class="relative">
			{#if selectedImage}
				<img src={selectedImage.src} alt={caption} class="h-full w-full object-contain" />
				{#if selectedImage.description}
					<div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
						{selectedImage.description}
					</div>
				{/if}
			{/if}
			<Dialog.Close
				class="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</Dialog.Close>
		</div>
	</Dialog.Content>
</Dialog.Root>
