<script lang="ts" >
	import { InvestIcon, PhoneIcon, ToolsIcon } from "$lib/assets/icons/hey";
	import IconCard from "$lib/components/ui/misc/icon-card.svelte";

    const pages = [
        { icon: ToolsIcon, label: "Check what we've built so far!", link:'/tools', umamiEvent: "Tools" },
        { icon: InvestIcon, label: "If you're an investor, check this!", link:'/pitch', umamiEvent: "Pitch" },
        { icon: PhoneIcon, label: "Interested in dun? Let's talk!", link:'https://cal.com/imsanju/15min', umamiEvent: "Talk" },
    ]
    
</script>

<section
	id="hey-get-to"
	class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="hey-get-to-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
        Get to what matters to you
	</h2>

    <div 
        id="hey-get-to-pages"
        class="grid w-full grid-cols-1 lg:grid-cols-3 gap-2"
    >
        {#each pages as page}
            <IconCard 
                icon={page.icon} 
                label={page.label} 
                link={page.link}
                umamiEvent={page.umamiEvent + " - Hey"}
            />
        {/each}
    </div>
</section>