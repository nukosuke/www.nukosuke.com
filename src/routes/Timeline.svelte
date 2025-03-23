<script lang="ts">
  import { Circle } from '@lucide/svelte';
  import * as m from '$lib/paraglide/messages';

  const histories = [
    {
      period: '2011-2015',
      title: m.profile_hist_1(),
    },
    {
      period: '2015-2017',
      title: m.profile_hist_2(),
    },
    {
      period: `2017-${m.profile_hist_period_present()}`,
      title: m.profile_hist_3(),
    },
  ];
</script>

<ol class="relative border-s border-gray-200">
  {#each histories as h, idx (idx)}
    <li class="ms-6 not-last:mb-3">
      <span
        class="absolute -start-2 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-6 ring-white"
      >
        <Circle class="text-sky-400" />
      </span>
      <h3 class="mb-1 flex items-center text-sm font-normal">{h.title}</h3>
      <time class="mb-2 block text-xs leading-none font-normal text-gray-400">{h.period}</time>
    </li>
  {/each}
</ol>
