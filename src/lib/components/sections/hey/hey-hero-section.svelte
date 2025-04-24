<script lang="ts">
    interface Props {
        ref?: string;
    }

    let { ref } : Props = $props();

    let names = {
        rbs: 'Ritheesh',
        sanju: 'Sanju',
        rohitth: 'Rohitth',
        venky: 'Venky',
    }

    type key = 'rbs' | 'rohitth' | 'sanju' | 'venky';
</script>

<section
    id="hey"
    class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
    <h1
		id="hey-title"
		class="mt-4 w-full pt-3 text-start text-[min(12vw,80px)] font-medium leading-[1] tracking-[-2px] text-title sm:pt-12 sm:tracking-[-4px] md:pt-8 text-balance"
	>
        Rethinking work tools, the Dun way
	</h1>
	<div
		id="pitch-description"
		class="mt-5 flex flex-col gap-6 text-xl font-medium leading-relaxed text-gray-600"
	>
        {#if ref && ref in names}
            <p>
                Hello again! If you've made it here, {names[ref as key]} might already gave you a peek into Dun. Now let's continue that chat, why does Dun matter?
            </p>
        {:else}
            <p>
                Hey there! If you've landed here, we've probably met before. Maybe it was a scan, a link, or just a spark of curiosity
            </p>

            <p>
                However you found us, you're here and that means something. So now you're probably thinking: “Okay, what's about Dun?” Let's get into that!
            </p>
        {/if}
	</div>
</section>