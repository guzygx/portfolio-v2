<script>
	export let char = '.';
	let numberOfDots = 200;
	let dots = char.repeat(numberOfDots);
</script>

<div class="max-h-5 overflow-hidden pointer-events-none">
	<span class={`font-display text-5xl relative top-[-24px] pointer-events-none`}>{dots}</span>
</div>
