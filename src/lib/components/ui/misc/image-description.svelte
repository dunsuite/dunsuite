<script lang="ts">
    import InfoIcon from "$lib/assets/icons/info-icon.svelte";
    import { fade, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let { description } = $$props;
    let isHovered = false;
</script>

<div 
    class="absolute left-3 bottom-3 right-3 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
>
    <div 
        class={`flex flex-col bg-black/40 text-white text-sm rounded-xl p-3 gap-3 backdrop-blur-md shadow-lg ${isHovered?"w-full lg:w-[340px]":"w-fit"}`}
        
    >
        <InfoIcon />

        {#if isHovered}
            <p
                in:slide={{
                    duration: 300,
                    easing: quintOut
                }}
                out:slide={{
                    duration: 0,
                    easing: quintOut
                }}
                class="w-full leading-normal"
            >
                {description}
            </p>
        {/if}
    </div>
</div>

<style>
    div {
        transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease;
    }
</style>