<script lang="ts">
	import SEO from '$lib/components/ui/misc/seo.svelte';
	import Ask from '$lib/components/sections/ask.svelte';
	import Hero from '$lib/components/sections/hero.svelte';
	import MarketOpportunity from '$lib/components/sections/market-opportunity.svelte';
	import Phases from '$lib/components/sections/phases.svelte';
	import Problem from '$lib/components/sections/problem.svelte';
	import Solution from '$lib/components/sections/solution.svelte';
	import Traction from '$lib/components/sections/traction.svelte';
</script>

<SEO title="Pitch Deck | Dun" />

<Hero />
<Problem />
<Solution />
<Traction />
<MarketOpportunity />
<Phases />
<Ask />