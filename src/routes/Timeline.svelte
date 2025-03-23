<script lang="ts">
  import { Circle } from '@lucide/svelte';

  const histories = [
    {
      period: '2011-2015',
      title: '立命館大学 情報理工学部 情報システム学科',
    },
    {
      period: '2015-2017',
      title: '奈良先端科学技術大学院大学(NAIST) 情報科学研究科',
    },
    {
      period: '2017-現在',
      title: '株式会社MIXI',
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
