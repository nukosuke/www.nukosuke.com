<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  type HeaderProps = { activeSection: string };
  let { activeSection }: HeaderProps = $props();

  const defaultClasses = 'px-3 py-2';
  const activeClasses = 'bg-white rounded-full text-yellow-700';

  const sections = [
    { targetId: 'sec-profile', title: m.section_title_profile() },
    { targetId: 'sec-job', title: m.section_title_job() },
    { targetId: 'sec-blog', title: m.section_title_blog() },
  ];
</script>

<nav
  class="sticky top-0 z-10 mt-4 rounded-t-sm bg-[#fff4e0] px-8 py-3 text-sm font-bold md:mt-0 md:rounded-b-sm"
>
  <ul class="inline-flex gap-2">
    {#each sections as sec, index (index)}
      <li class={activeSection === sec.targetId ? [defaultClasses, activeClasses] : defaultClasses}>
        <a href="#{sec.targetId}">{sec.title}</a>
      </li>
    {/each}
  </ul>
</nav>
