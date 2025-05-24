<script lang="ts">
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';
  import * as m from '$lib/paraglide/messages';

  let visible = $state(false);
  onMount(() => (visible = true));
</script>

<header class="min-h-[5rem] text-center font-bold text-white">
  {#if visible}
    <div in:blur={{ opacity: 500, delay: 100, duration: 400 }}>
      <h1 class="text-[2rem]">{m.site_title()}</h1>
      <p class="text-[1.25rem]">{m.site_description()}</p>
    </div>
  {/if}
</header>
