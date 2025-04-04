<script>
	import DottedLine from './components/DottedLine.svelte';
	import NavBar from './components/NavBar.svelte';
	import Title from './components/Title.svelte';
	import Separator from './components/Separator.svelte';
</script>

<header class="pt-0.5 text-5xl z-10 fixed bg-black">
<!-- <header class=" py-0.5 text-5xl fixed"> -->
	<div class="w-full min-[760px]:flex gap-3.5">
		<Title />
		<Separator />
		<NavBar /> 
	</div>
	<DottedLine />
</header>
