<script lang="ts">
    import AgenticAiIcon from "$lib/assets/icons/phases/agentic-ai-icon.svelte";
    import AiCopilotIcon from "$lib/assets/icons/phases/ai-copilot-icon.svelte";
    import FoundationIcon from "$lib/assets/icons/phases/foundation-icon.svelte";
    import IconCard from "$lib/components/ui/misc/icon-card.svelte";
    import PhaseCard from "$lib/components/ui/misc/phase-card.svelte";

    let activeIndex = 4; // Start with Agentic AI active

    const phases = [
        { 
            icon: FoundationIcon, 
            label: "Foundation", 
            isCurrent: true,
            description: "We're laying strong groundwork by rethinking how business tools should work together, simplifying workflows, making it smarter & faster \n\nEx: Create a task, set due date & assign it to someone - all with just 3 keyboard shortcuts, done in 5 seconds." 
        },
        { 
            icon: AiCopilotIcon, 
            label: "AI Copilot", 
            isCurrent: false,
            description: "Think of it as a smart friend who's always there to help. It understands natural language & makes every action easier in everything you do in the app. \n\nEx: \"Hey Dun, create reports for all active projects and email them to the team\" - done automatically" 
        },
        { 
            icon: AgenticAiIcon, 
            label: "Agentic AI", 
            isCurrent: false,
            description: "AI agents that understand your business & handle entire workflows on their own. Like having a team of smart assistants. \n\nEx: \"Dun, handle client onboarding\" - automatically creates projects, sets up meetings, sends welcome emails & preps documents."
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

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 h-fit">
        {#if activeIndex>3}
            {#each phases as phase}
                <div 
                    class="cursor-pointer transition-all hover:scale-[1.02]"
                    on:click={() => activeIndex = 0}
                >
                    <PhaseCard 
                        icon={phase.icon} 
                        label={phase.label} 
                        description={phase.description} 
                        isActive={false}
                        isCurrent={phase.isCurrent}
                    />
                </div>
            {/each}
        {:else}
            <!-- Mobile Layout -->
            <div class="lg:hidden">
                {#each phases as phase, i}
                    <div 
                        class="cursor-pointer transition-all hover:scale-[1.02] mb-2"
                        on:click={() => activeIndex = i}
                    >
                        <PhaseCard 
                            icon={phase.icon} 
                            label={phase.label} 
                            description={phase.description} 
                            isActive={i === activeIndex}
                            isCurrent={phase.isCurrent}
                        />
                    </div>
                {/each}
            </div>
    
            <!-- Desktop Layout -->
            <div class="hidden lg:flex col-span-1 flex flex-col gap-2 h-full">
                {#each phases as phase, i}
                    {#if i !== activeIndex}
                        <div 
                            class="cursor-pointer transition-all hover:scale-[1.02] flex-1"
                            on:click={() => activeIndex = i}
                        >
                            <PhaseCard 
                                icon={phase.icon} 
                                label={phase.label} 
                                description={phase.description} 
                                isActive={false}
                                isCurrent={phase.isCurrent}
                            />
                        </div>
                    {/if}
                {/each}
            </div>
    
            <div class="hidden lg:block lg:col-span-2 h-full">
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