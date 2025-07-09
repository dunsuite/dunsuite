<script lang="ts" >
	import CommunityIcon from "$lib/assets/icons/traction/community-icon.svelte";
	import GlobeIcon from "$lib/assets/icons/traction/globe-icon.svelte";
	import WaitlistIcon from "$lib/assets/icons/traction/waitlist-icon.svelte";
	import IconCard from "$lib/components/ui/misc/icon-card.svelte";

    const tractions = [
        { icon: WaitlistIcon, label: "680+ waitlist members" },
        { icon: GlobeIcon, label: "120+ countries reached" },
    ]
    
</script>

<section
	id="pitch-traction"
	class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="pitch-traction-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
        Curious how we’re doing so far?
	</h2>

    <div class="grid w-full grid-cols-1 lg:grid-cols-3 gap-2">
        {#each tractions as traction}
            <IconCard icon={traction.icon} label={traction.label} />
        {/each}
    </div>

</section>