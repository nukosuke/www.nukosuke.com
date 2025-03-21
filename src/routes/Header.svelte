<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let visible = $state(false);
	onMount(() => (visible = true));
</script>

<header class="header">
	{#if visible}
		<div in:blur={{ opacity: 500, delay: 100, duration: 400 }}>
			<h1 class="header-title">じぶんβ</h1>
			<p class="header-desc">nukosuke's web</p>
		</div>
	{/if}
</header>

<style lang="scss">
	.header {
		color: white;
		font-weight: bold;
		min-height: 5rem;

		.header-title {
			font-size: 2rem;
		}
		.header-desc {
			font-size: 1.25rem;
		}
	}
</style>
