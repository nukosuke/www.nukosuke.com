<script lang="ts">
  import { VERSION as SVELTE_VERSION } from 'svelte/compiler';
  import { VERSION as SVELTEKIT_VERSION } from '@sveltejs/kit';
  import { PUBLIC_GIT_HASH } from '$env/static/public';
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import '../app.css';
  import * as m from '$lib/paraglide/messages';

  let { children } = $props();
</script>

<svelte:head>
  <title>{m.site_title()} | {m.site_description()}</title>
  <meta name="description" content={m.site_description()} />
  <meta
    name="generator"
    content="SvelteKit {SVELTEKIT_VERSION} (svelte/compiler {SVELTE_VERSION})"
  />
  <!-- TODO: OGP -->
</svelte:head>

<div class="container mx-auto">
  {@render children()}
</div>
<p class="px-1 text-xs">
  <a href="https://github.com/nukosuke/www.nukosuke.com/tree/{PUBLIC_GIT_HASH}"
    >rev:{PUBLIC_GIT_HASH}</a
  >
</p>

<div style="display:none">
  {#each locales as locale, idx (idx)}
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
