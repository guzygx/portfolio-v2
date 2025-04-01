<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Body from '$lib/components/Body/Body.svelte';
	import '../app.css';
	
	let { children } = $props();
	
</script>

	<Header />
	<Body>
		{@render children()}
	</Body>
	<Footer />
