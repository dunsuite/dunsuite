<script lang="ts">
    import ExplainerCard from "$lib/components/ui/misc/explainer-card.svelte";

    let activeIndex = 0;

    const activeIndexHandle = (index: number) => {
        activeIndex = index;
    };

    interface Solution {
        solution: string;
        images: object[];
    }

    const solutions: Solution[] = [
        { 
            solution: "Purpose built tools that do one job but exceptionally well", 
            images: [
                {src: "/pitch/solution/tools-1.png", description:""},
                {src: "/pitch/solution/tools-2.png", description:""},
            ] 
        },
        { 
            solution: "Distraction-free UI that tunes your attention to what matters the most", 
            images: [
                { src: "/pitch/solution/distraction-free-ui-1.png", description:"A closed thread design in DunChat smartly highlights conclusions, enhancing user attention"},
                { src: "/pitch/solution/distraction-free-ui-2.png", description:"Active thread design in DunChat keeps discussions clear & focused by its topic."},
                { src: "/pitch/solution/distraction-free-ui-3.png", description:"DunTasks organizes tasks by status & priority, helping users find effective tasks to complete first"},
                { src: "/pitch/solution/distraction-free-ui-4.png", description:"DunTasks is built with keyboard shortcuts to speed up actions, removing the need for mouse"},
                { src: "/pitch/solution/distraction-free-ui-5.png", description:"DunBooks’ invoice highlights key financial data first, allowing users to quickly see payment info without calculating through the list"},
                { src: "/pitch/solution/distraction-free-ui-6.png", description:"DunBooks’ invoice panel keeps the list quickly accessible, still allowing faster review of invoices without losing your place."},
            ] 
        },
        { 
            solution: "Design that fits all screen, not just PCs", 
            images: [
                {src: "/pitch/solution/adaptive-designs-1.png", description:""},
                {src: "/pitch/solution/adaptive-designs-2.png", description:""},
                {src: "/pitch/solution/adaptive-designs-3.png", description:""},
            ] 
        },
        { 
            solution: "Natural AI that does your job for you", 
            images: [
                {src: "/pitch/solution/natural-ai-1.png", description:""},
                {src: "/pitch/solution/natural-ai-2.png", description:""},
            ] 
        },
    ];
</script>

<section
    id="pitch-solution"
    class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
    style="overflow-anchor: none;" 
>
    <h2
        id="pitch-solution-title"
        class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
    >
        We're fixing that with Dun
    </h2>

    <div class="flex flex-col gap-2 w-full">
        {#each solutions as solution, index}
            <ExplainerCard 
                caption={solution.solution}
                images={solution.images}
                {index}
                {activeIndex}
                {activeIndexHandle}
            />
        {/each}
    </div>
</section>