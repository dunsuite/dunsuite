<script lang="ts">

    interface Props{
        icon: any;
        label: string;
        link?: string;
        umamiEvent?: string;
    }
    
    let { icon, label, link = "", umamiEvent } : Props = $props();
</script>

<a 
    href={link}
    target={link && link.includes('http') ? "_blank" : "_self"}
    data-umami-event={umamiEvent}
    class="p-5 gap-5 bg-white shadow-mild hover:shadow-subtle rounded-3xl flex flex-col transition-all duration-200 hover:scale-[1.02] text-black"
>
    <span class="bg-[#F5F5F5] rounded-xl p-2 border w-fit">
        <svelte:component this={icon} />
    </span>

    <p class="text-md w-full font-medium m-0">
        {label}
    </p>
</a>