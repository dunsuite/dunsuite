<script lang="ts">
	import { discord, github, instagram, linkedin, x } from "$lib/assets/socials";
	import clsx from "clsx";

    const socialLinks = [
		{ name: 'X', url: 'https://x.com/dunsuite', icon: x },
		{ name: 'GitHub', url: 'https://github.com/dunsuite', icon: github },
		{ name: 'Discord', url: 'https://discord.gg/kxF3Snje', icon: discord },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/company/dunsuite/', icon: linkedin },
		{ name: 'Instagram', url: 'https://www.instagram.com/dunsuite/', icon: instagram }
	];
</script>

<section
	id="hey-socials"
	class="mb-12 flex w-full flex-col gap-6 duration-1000 animate-in slide-in-from-bottom-60"
>
	<h2
		id="hey-socials-title"
		class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
	>
        Follow for every update, right as it drops
	</h2>

    <ul class="flex flex-wrap gap-2">
        {#each socialLinks as link}
            <li>
                <a
                    id="waitlist-social-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex size-24 items-center justify-center rounded-3xl bg-white p-8 duration-700 animate-in slide-in-from-bottom-60"
                    data-umami-event={`Waitlist – ${link.name}`}
                >
                    <img
                        src={link.icon}
                        alt={link.name}
                        class={clsx(
                            'size-8',
                            'transition-opacity duration-700',
                            'transition-transform duration-700',
                            'group-hover:scale-110'
                        )}
                    />
                </a>
            </li>
        {/each}
    </ul>

</section>