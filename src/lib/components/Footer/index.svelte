<script>
	import Grass from './components/Grass.svelte';
	import Flower from './components/Flower.svelte';
</script>

<footer
	class="fixed bottom-0 pt-0.5 w-full bg-contain flex flex-col text-5xl pointer-events-none"
>
	{#each Array(3) as _}
		<div class="flex absolute -left-28">
			{#each Array(28) as _}
				<Flower />
			{/each}
		</div>
	{/each}
	<Grass />
</footer>
