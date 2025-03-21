<script lang="ts">
	import '../app.css';
	import './global.scss';
	let { children } = $props();
</script>

<svelte:head>
	<title>じぶんβ</title>
</svelte:head>

<div class="container mx-auto">
	{@render children()}
</div>
