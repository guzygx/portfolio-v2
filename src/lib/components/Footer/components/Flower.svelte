<script>
  import _ from "lodash";

	const chars = ['•', '·'];
	const size = Math.floor(Math.random() * 20) + 4;
	const offset = _.sample(['top-[10px]', 'top-[-10px]', 'top-[-5px]', 'top-[5px]', ''])
</script>

<div class="relative min-w-20">
	<div class="flex rotate-90 absolute">
		{#each { length: size } as x}
			<p class={`relative ${offset}`}>{_.sample(chars)}</p>
		{/each}
	</div>
</div>
