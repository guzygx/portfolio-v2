<script>
	import ParaglideSSG from '$lib/components/ParaglideSSG/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	import Header from '$lib/components/Header/index.svelte';
	import Body from '$lib/components/Body/index.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ParaglideSSG />
<Header />
<Body>
	{@render children()}
</Body>
<Footer />
