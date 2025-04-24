<script lang="ts">
	import { page } from "$app/stores";
	import { GetToSection, HeyHeroSection, SocialsSection, WhyDunSection } from "../../lib/components/sections/hey";
    import { SEO, CTA } from "../../lib/components/ui/misc";
    
    let ref = $page.url.searchParams.get('ref');

</script>

<SEO title="Hey | Dun" />

<HeyHeroSection ref={ref} />
<GetToSection />
<WhyDunSection />
<SocialsSection />
<CTA />