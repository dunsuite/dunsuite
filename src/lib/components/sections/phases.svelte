<script lang="ts">
	import AgenticAiIcon from '$lib/assets/icons/phases/agentic-ai-icon.svelte';
	import AiCopilotIcon from '$lib/assets/icons/phases/ai-copilot-icon.svelte';
	import FoundationIcon from '$lib/assets/icons/phases/foundation-icon.svelte';
	import PhaseCard from '$lib/components/ui/misc/phase-card.svelte';

	let activeIndex = 4; // Start with Agentic AI active

	const phases = [
		{
			icon: FoundationIcon,
			label: 'Foundation',
			isCurrent: true,
			description:
				"We're laying strong groundwork by rethinking how business tools should work together, simplifying workflows, making it smarter & faster \n\nEx: Create a task, set due date & assign it to someone - all with just 3 keyboard shortcuts, done in 5 seconds."
		},
		{
			icon: AiCopilotIcon,
			label: 'AI Copilot',
			isCurrent: false,
			description:
				'Think of it as a smart friend who\'s always there to help. It understands natural language & makes every action easier in everything you do in the app. \n\nEx: "Hey Dun, create reports for all active projects and email them to the team" - done automatically'
		},
		{
			icon: AgenticAiIcon,
			label: 'Agentic AI',
			isCurrent: false,
			description:
				'AI agents that understand your business & handle entire workflows on their own. Like having a team of smart assistants. \n\nEx: "Dun, handle client onboarding" - automatically creates projects, sets up meetings, sends welcome emails & preps documents.'
		}
	];
</script>

<section
	id="pitch-phases"
	class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="pitch-phases-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
		Phases of our journey
	</h2>

	<div class="grid h-fit grid-cols-1 gap-2 lg:grid-cols-3">
		{#if activeIndex > 3}
			{#each phases as phase}
				<button
					class="cursor-pointer transition-all hover:scale-[1.02]"
					onclick={() => (activeIndex = 0)}
					tabindex="0"
				>
					<PhaseCard
						icon={phase.icon}
						label={phase.label}
						description={phase.description}
						isActive={false}
						isCurrent={phase.isCurrent}
					/>
				</button>
			{/each}
		{:else}
			<!-- Mobile Layout -->
			<div class="lg:hidden">
				{#each phases as phase, i}
					<button
						class="mb-2 cursor-pointer transition-all hover:scale-[1.02]"
						onclick={() => (activeIndex = i)}
						tabindex="0"
					>
						<PhaseCard
							icon={phase.icon}
							label={phase.label}
							description={phase.description}
							isActive={i === activeIndex}
							isCurrent={phase.isCurrent}
						/>
					</button>
				{/each}
			</div>

			<!-- Desktop Layout -->
			<div class="col-span-1 flex hidden h-full flex-col gap-2 lg:flex">
				{#each phases as phase, i}
					{#if i !== activeIndex}
						<button
							class="flex-1 cursor-pointer transition-all hover:scale-[1.02]"
							onclick={() => (activeIndex = i)}
							tabindex="0"
						>
							<PhaseCard
								icon={phase.icon}
								label={phase.label}
								description={phase.description}
								isActive={false}
								isCurrent={phase.isCurrent}
							/>
						</button>
					{/if}
				{/each}
			</div>
			<div class="hidden h-full lg:col-span-2 lg:block">
				<PhaseCard
					icon={phases[activeIndex].icon}
					label={phases[activeIndex].label}
					description={phases[activeIndex].description}
					isActive={true}
					isCurrent={phases[activeIndex].isCurrent}
				/>
			</div>
		{/if}
	</div>
</section>
