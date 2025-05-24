<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import '../app.css';
  import * as m from '$lib/paraglide/messages';

  let { children } = $props();
</script>

<svelte:head>
  <title>{m.site_title()} | {m.site_description()}</title>
</svelte:head>

<div class="container mx-auto">
  {@render children()}
</div>

<div style="display:none">
  {#each locales as locale, idx (idx)}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
