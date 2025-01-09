<script lang="ts">
	import PhaseBadge from "./phase-badge.svelte";

    export let icon: any;
    export let label: string;
    export let description: string;
    export let isActive: boolean;
    export let isCurrent: boolean;
</script>

<div class="group p-5 gap-5 bg-white shadow-md rounded-3xl flex flex-col w-full h-full relative justify-between">
    <span class="bg-[#F5F5F5] rounded-xl p-2 border w-fit">
        <svelte:component this={icon} />
    </span>

    <div class="flex flex-col w-full gap-1">
        <p class="text-md w-full font-medium m-0">
            {label}
        </p>
    
        {#if isActive}
            <p class="description text-sm w-full font-medium m-0 leading-relaxed text-slate-500">
                {description}
            </p>
        {/if}
    </div>
    
    {#if isCurrent}
        <PhaseBadge />
    {/if}
</div>

<style>
    .description {
        white-space: pre-line;
    }
</style>