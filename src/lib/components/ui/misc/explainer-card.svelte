<script lang="ts">
	import { fly, slide } from "svelte/transition";
	import ImageDescription from "./image-description.svelte";
	import { quintOut } from "svelte/easing";

    export let caption: string;
    export let images: object[];
    export let index: number;
    export let activeIndex: number;
    export let activeIndexHandle: (index: number) => void;

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
</script>

<div 
    data-card-index={index}
    class="flex flex-col gap-4 p-3 rounded-xl bg-black bg-opacity-5 overflow-clip transition-all duration-300 cursor-pointer" 
    on:click={(e) => handleCardClick(e, index)}
>
    <p class="font-medium text-gray-700">{caption}</p>

    <div
        in:fly={{
            duration: 300,
            easing: quintOut,
            y: 50    // Slides up from 50px below
        }}
        out:fly={{
            duration: 300,
            easing: quintOut,
            y: 50
        }}
        class={`flex flex-col gap-4 transition-all duration-300 ${activeIndex === index ? 'flex' : 'hidden'}`}>

        {#each images as image}
            <div 
                in:fly={{
                    duration: 300,
                    delay: i * 100,  // Staggered animation
                    easing: quintOut,
                    y: 20
                }}
                class="group/image relative w-full">
                
                <img 
                    src={image.src} 
                    alt={caption}
                    class="rounded-2xl border-2 border-white shadow-xl w-full" 
                />
                {#if image.description}
                    <ImageDescription description={image.description} />
                {/if}
            </div>
        {/each}
    </div>
</div>
