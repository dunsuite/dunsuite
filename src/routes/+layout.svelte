<script>
	import '../app.css';
	import { Header } from '$lib/components/ui/misc';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster />
<div
	class="mx-auto my-2 flex h-screen w-full max-w-2xl flex-col items-center justify-start p-4 font-InterVariable antialiased"
>
	<Header />
	<slot></slot>
</div>
