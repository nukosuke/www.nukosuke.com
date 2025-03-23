<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
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

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
