<script lang="ts">
    export let icon: any;
    export let label: string;
</script>

<div class="p-5 gap-5 bg-white shadow-md rounded-3xl flex flex-col transition-all hover:scale-[1.02] text-black">
    <span class="bg-[#F5F5F5] rounded-xl p-2 border w-fit">
        <svelte:component this={icon} />
    </span>

    <p class="text-md w-full font-medium m-0">
        {label}
    </p>
</div>