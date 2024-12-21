<script>
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Body from '$lib/components/Body/Body.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />
	<Body>
		{@render children()}
	</Body>
	<Footer />
</ParaglideJS>
