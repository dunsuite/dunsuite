<script lang="ts">
    import { toast } from 'svelte-sonner';
    import AnnouncementIcon from "$lib/assets/icons/ask/announcement-icon.svelte";
    import CodeIcon from "$lib/assets/icons/ask/code-icon.svelte";
    import HandShakeIcon from "$lib/assets/icons/ask/hand-shake-icon.svelte";
    import ChevronIcon from "$lib/assets/icons/chevron-icon.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import IconCard from "$lib/components/ui/misc/icon-card.svelte";
    import Kbd from "$lib/components/ui/misc/kbd.svelte";

    let formData = {
        amount: 0,
        expectation: 0,
        name: "",
        email: "",
        about: "",
    };

    let isLoading = false;
    let isSubmitted = false;

    const asks = [
        { icon: CodeIcon, label: "50% on product development" },
        { icon: HandShakeIcon, label: "30% on hiring A players" },
        { icon: AnnouncementIcon, label: "20% on marketing & sales" },
    ];

    const expectationOptions = [
        { expectation: "Select expectation", value: 0 },
        { expectation: "Expectation 1", value: 1 },
        { expectation: "Expectation 2", value: 2 },
    ];

    const amountOptions = [
        { amount: "Select an amount", value: 0 },
        { amount: "$10,000", value: 10000 },
        { amount: "$50,000", value: 50000 },
    ];

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter' && (!formData.name || !formData.email || formData.amount === 0 || formData.expectation === 0)) {
            event.preventDefault();
            toast.error('Please fill in all required fields.');
        }
    }

    async function handleSubmit() {
        // Validate required fields
        if (!formData.name || !formData.email || formData.amount === 0 || formData.expectation === 0) {
            toast.error('Please enter the values');
            return;
        }

        isLoading = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Handle successful submission
            isLoading = false;
            isSubmitted = true;
            toast.success('Thank you for your interest! We\'ll get back to you soon.');
            
            // Reset form
            formData = {
                amount: 0,
                expectation: 0,
                name: "",
                email: "",
                about: "",
            };
        } catch (error) {
            isLoading = false;
            toast.error('Something went wrong. Please try again.');
        }
    }
</script>

<section
    id="pitch-ask"
    class="mb-12 flex w-full flex-col gap-10 duration-1000 animate-in slide-in-from-bottom-60"
>
    <h2
        id="pitch-ask-title"
        class="w-full text-start text-4xl font-medium leading-tight tracking-tight"
    >
        Now, let's talk about how you can help
    </h2>

    <div class="flex flex-col gap-6 font-medium text-gray-500 ">
        <p class="text-xl leading-relaxed ">
            We're raising <span class="font-medium text-black">$1M</span> to grow DunSuite. Here's how we'll use it
        </p>

        <div class="grid w-full grid-cols-1 lg:grid-cols-3 gap-2 text-md text-black leading-normal">
            {#each asks as ask}
                <IconCard icon={ask.icon} label={ask.label} />
            {/each}
        </div>
    </div>

    <form 
            class="flex flex-wrap gap-5 items-center font-medium leading-relaxed text-gray-500 transition-all duration-500"
            on:submit|preventDefault={handleSubmit}
        >
        <div class="flex flex-wrap gap-3 w-full items-center">

        <span class="text-lg">Would you like to invest?</span>
            <span class="text-lg">if yes, how much are you looking to invest?</span>

            <div class="relative inline-block">
                <select
                    name="amount"
                    id="amount"
                    class="bg-white px-3 py-2 rounded-xl text-md placeholder:text-md text-black transition-all duration-300 outline-none focus:outline-none focus:border-b-2 focus:border-black focus:rounded-b-none appearance-none pr-10 peer"
                    bind:value={formData.amount}
                    on:keypress={handleKeyPress}
                >
                    {#each amountOptions as option}
                        <option value={option.value}>{option.amount}</option>
                    {/each}
                </select>
                <span
                    class="absolute inset-y-0 right-3 flex items-center pointer-events-none peer-focus:rotate-180 transition-transform duration-300"
                >
                    <ChevronIcon />
                </span>
            </div>

            <span class="text-lg">What's your preferred return expectation?</span>

            <div class="relative inline-block">
                <select
                    name="expectation"
                    id="expectation"
                    class="w-[230px] bg-white px-3 py-2 rounded-xl text-md placeholder:text-md text-black transition-all duration-300 outline-none focus:outline-none focus:border-b-2 focus:border-black focus:rounded-b-none appearance-none pr-10 peer"
                    bind:value={formData.expectation}
                    on:keypress={handleKeyPress}
                >
                    {#each expectationOptions as option}
                        <option value={option.value}>{option.expectation}</option>
                    {/each}
                </select>

                <span
                    class="absolute inset-y-0 right-3 flex items-center pointer-events-none peer-focus:rotate-180 transition-transform duration-300"
                >
                    <ChevronIcon />
                </span>
            </div>

            <span class="text-lg">And you are?</span>
            <input
                type="text"
                placeholder="Your name"
                class="w-full lg:w-[270px] bg-white px-3 py-2 rounded-xl placeholder:text-slate-400 text-md placeholder:text-md text-black outline-none focus:outline-none focus:border-b-2 focus:border-black focus:rounded-b-none"
                bind:value={formData.name}
                on:keypress={handleKeyPress}
            />

            <span class="text-lg">How can we reach you?</span>
            <input
                type="email"
                placeholder="Your email"
                class="w-full lg:w-[300px] bg-white px-3 py-2 rounded-xl placeholder:text-slate-400 text-md placeholder:text-md text-black transition-all duration-300 outline-none focus:outline-none focus:border-b-2 focus:border-black focus:rounded-b-none"
                bind:value={formData.email}
                on:keypress={handleKeyPress}
            />
        </div>

        <div class="flex flex-col gap-3 w-full font-medium leading-relaxed text-gray-500 transition-all duration-300">
            <span class="text-lg">Tell us something about yourself</span>
        
            <textarea
                    class="w-full h-[120px] bg-white p-3 rounded-xl resize-none placeholder:text-slate-400 placeholder:text-md text-md text-black transition-all duration-300 outline-none focus:outline-none focus:border-b-2 focus:border-black focus:rounded-b-none"
                    placeholder="Could help us know you better"
                    bind:value={formData.about}
                />
        </div>

        <Button
            id="pitch-form-submit-button"
            type="submit"
            disabled={isLoading}
            class="w-fit group"
            data-umami-event="Pitch – Form Submit Button"
        >
            {isLoading ? 'Submitting...' : 'Submit'}
            {#if !isLoading}
                <Kbd key="S" />
            {/if}
            </Button>
        </form>
</section>