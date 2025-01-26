<script lang="ts">
	import PhaseBadge from './phase-badge.svelte';

	interface PhaseCardProps {
		icon: any;
		label: string;
		description: string;
		isActive: boolean;
		isCurrent: boolean;
	}

	let { icon, label, description, isActive, isCurrent }: PhaseCardProps = $props();
</script>

<div
	class="group relative flex h-full w-full flex-col justify-between gap-5 rounded-3xl bg-white p-5 shadow-md"
>
	<span class="w-fit rounded-xl border bg-[#F5F5F5] p-2">
		<svelte:component this={icon} />
	</span>

	<div class="flex w-full flex-col gap-1">
		<p class="text-md m-0 w-full font-medium">
			{label}
		</p>

		{#if isActive}
			<p class="description m-0 w-full text-sm font-medium leading-relaxed text-slate-500">
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
