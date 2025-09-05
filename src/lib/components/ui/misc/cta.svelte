<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Kbd } from '$lib/components/ui/misc';
</script>

<section
	id="open-to-all-cta"
	class="flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="open-to-all-cta-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight text-gray-500"
	>
		Say goodbye to the <s>clutter</s>
		<br />
		<span class="text-black">And get things Dun.</span>
	</h2>

	<Button
		id="open-to-all-cta-button"
		href="https://duntasks.com"
		target="_blank"
		class="w-fit"
		data-umami-event="Open to All – CTA Button"
	>
		Try DunTasks
		<Kbd key="T" />
	</Button>
</section>
