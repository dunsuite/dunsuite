<script lang="ts">
    import ExplainerCard from "$lib/components/ui/misc/explainer-card.svelte";

    let activeIndex = 0;

    const activeIndexHandle = (index: number) => {
        activeIndex = index;
    };

    interface Problem {
        problem: string;
        images: object[];
    }

    const problems: Problem[] = [
        { 
            problem: "Too many app switches to get the context", 
            images: [
                { src: "/pitch/problem/context-switching.png", description:""},
            ] 
        },
        { 
            problem: "Over complicated features that feel complex to learn & you never use", 
            images: [
                { src: "/pitch/problem/overcomplicated-features-1.png", description:""},
                { src: "/pitch/problem/overcomplicated-features-2.png", description:""},
            ] 
        },
        { 
            problem: "Clunky interface that make work harder, not easier", 
            images: [
                { src: "/pitch/problem/clunky-interfaces-1.png", description:""},
                { src: "/pitch/problem/clunky-interfaces-2.png", description:""},
            ] 
        },
    ];
</script>

<section
    id="pitch-problem"
    class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
    <h2
        id="pitch-problem-title"
        class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
    >
        Business tools today are messy, right?
    </h2>

    <div class="flex flex-col gap-2 w-full">
        {#each problems as problem, index}
            <ExplainerCard 
                caption={problem.problem}
                images={problem.images}
                {index}
                {activeIndex}
                {activeIndexHandle}
            />
        {/each}
    </div>
</section>