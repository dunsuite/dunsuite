<script lang="ts">
	import { CTA, SEO } from '$lib/components/ui/misc';
	import Ask from './sections/ask.svelte';
	import Hero from './sections/hero.svelte';
	import MarketOpportunity from './sections/market-opportunity.svelte';
	import Phases from './sections/phases.svelte';
	import Problem from './sections/problem.svelte';
	import Solution from './sections/solution.svelte';
	import Traction from './sections/traction.svelte';
</script>

<SEO title="Pitch Deck | Dun" />

<Hero />
<Problem />
<Solution />
<Traction />
<MarketOpportunity />
<Phases />
<Ask />