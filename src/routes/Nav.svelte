<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref, setLocale } from '$lib/paraglide/runtime';

  type HeaderProps = { activeSection: string };
  let { activeSection }: HeaderProps = $props();

  const defaultClasses = 'px-3 py-2';
  const activeClasses = 'bg-white rounded-full text-yellow-700';

  const sections = [
    { targetId: 'sec-profile', title: m.section_title_profile() },
    { targetId: 'sec-job', title: m.section_title_job() },
    { targetId: 'sec-blog', title: m.section_title_blog() },
  ];

  // デフォルトの click イベントだと path は書きかわるが遷移しないので明示的に reload する
  function switchLocale(locale: 'ja' | 'en') {
    return (event: Event) => {
      event.preventDefault();
      setLocale(locale, { reload: true });
    };
  }
</script>

<nav
  class="sticky top-0 z-10 mt-4 rounded-t-sm bg-[#fff4e0] px-8 py-3 text-sm font-bold md:mt-0 md:rounded-b-sm"
>
  <div class="flex justify-between">
    <ul class="inline-flex gap-2">
      {#each sections as sec, index (index)}
        <li
          class={activeSection === sec.targetId ? [defaultClasses, activeClasses] : defaultClasses}
        >
          <a href="#{sec.targetId}">{sec.title}</a>
        </li>
      {/each}
    </ul>
    <ul class="inline-flex gap-1 self-center">
      <li><a href={localizeHref('/', { locale: 'ja' })} onclick={switchLocale('ja')}>JA</a></li>
      <li>/</li>
      <li><a href={localizeHref('/', { locale: 'en' })} onclick={switchLocale('en')}>EN</a></li>
    </ul>
  </div>
</nav>
