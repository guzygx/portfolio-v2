<script>
  const animate = (el) => {
		el.animate(
			[{ background: 'red' }],
			// { duration: 120, direction: 'alternate', iterations: 2 },
      {			duration: 120, css: (t, u) => `transform: translate(10px) rotate(10deg);`}
		)
  }
</script>

<nav class="max-[408px]:text-4xl max-[408px]:flex">
  <a class="hover:text-bright-green" on:click={(e) => animate(e.target)} href="/about">abt</a>
	<span>..</span>
  <a class="hover:text-bright-green" on:click={(e) => animate(e.target)} href="/works">wrks</a>
	<span>..</span>
  <a class="hover:text-bright-green" on:click={(e) => animate(e.target)} href="/contact">cntct</a>
</nav>

