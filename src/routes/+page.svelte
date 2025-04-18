<script lang="ts">
  import { inview, type ObserverEventDetails } from 'svelte-inview';
  import { Building, BriefcaseBusiness, CodeXml, Server, Keyboard, Pointer } from '@lucide/svelte';
  import * as m from '$lib/paraglide/messages';
  import Header from './Header.svelte';
  import Nav from './Nav.svelte';
  import Avatar from './Avatar.svelte';
  import Timeline from './Timeline.svelte';
  import Footer from './Footer.svelte';

  const inviewOptions = {
    rootMargin: '-50%',
  };

  type SectionType = 'sec-profile' | 'sec-job' | 'sec-blog';
  let activeSection = $state<SectionType>('sec-profile');

  function onInviewEnter({ detail }: CustomEvent<ObserverEventDetails>) {
    activeSection = detail.node.id as SectionType;
  }
</script>

<div class="py-8 md:space-y-4">
  <Header />
  <Nav {activeSection} />

  <div class="space-y-12 rounded-b-sm bg-white pt-12 md:rounded-t-sm">
    <section
      id="sec-profile"
      class="flex flex-col justify-center gap-6 px-12 md:flex-row md:gap-12"
      use:inview={inviewOptions}
      oninview_enter={onInviewEnter}
    >
      <div class="place-self-center">
        <Avatar />
      </div>
      <div class="justify-items-stretch space-y-4 place-self-center md:place-self-start">
        <div class="space-y-2 text-center">
          <h2 class="text-3xl">{m.profile_name()} 🍊</h2>
          <ul class="inline-flex gap-4">
            <li class="inline-flex items-center gap-1 text-sm">
              <Building size="1em" />
              <span>{m.profile_job_company()}</span>
            </li>
            <li class="inline-flex items-center gap-1 text-sm">
              <BriefcaseBusiness size="1em" />
              <span>{m.profile_job_title()}</span>
            </li>
          </ul>
        </div>
        <Timeline />
      </div>
    </section>

    <section
      id="sec-job"
      class="space-y-4 px-12"
      use:inview={inviewOptions}
      oninview_enter={onInviewEnter}
    >
      <h2 class="text-center text-2xl">
        <span class="border-b-[2px] border-sky-300 px-4 pb-2">{m.section_title_job()}</span>
      </h2>
      <div class="space-y-6 py-6">
        <p class="text-center">{m.job_description()}</p>
        <div class="grid grid-cols-1 place-content-stretch gap-12 md:grid-cols-3 md:gap-4 md:px-6">
          <div class="space-y-4 text-center">
            <div class="grid justify-items-stretch space-y-2">
              <CodeXml size="64px" class="justify-self-center text-rose-400" />
              <h3 class="text-lg font-semibold">{m.job_frontend()}</h3>
            </div>
            <p class="text-sm">
              JavaScript / TypeScript / React / Next.js / SvelteKit / TailwindCSS
            </p>
          </div>
          <div class="space-y-4 text-center">
            <div class="grid justify-items-stretch space-y-2">
              <Server size="64px" class="justify-self-center text-violet-400" />
              <h3 class="text-lg font-semibold">{m.job_server_side()}</h3>
            </div>
            <p class="text-sm">
              Elixir / Go / Python / Ruby / Node.js / Phoenix Framework / Rails / AWS / GCP /
              Terraform
            </p>
          </div>
          <div class="space-y-4 text-center">
            <div class="grid justify-items-stretch space-y-2">
              <Keyboard size="64px" class="justify-self-center text-emerald-400" />
              <h3 class="text-lg font-semibold">{m.job_dev_env()}</h3>
            </div>
            <p class="text-sm">macOS / Ubuntu / Amazon Linux / VSCode / GNU Emacs / fish</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="sec-blog"
      class="space-y-4 px-12"
      use:inview={inviewOptions}
      oninview_enter={onInviewEnter}
    >
      <h2 class="text-center text-2xl">
        <span class="border-b-[2px] border-sky-300 px-4 pb-2">{m.section_title_blog()}</span>
      </h2>
      <div class="space-y-6 py-6">
        <p class="text-center">
          {m.blog_about()}
        </p>
        <ul class="text-center">
          <li>
            <a
              href="https://blog.nukosuke.com"
              target="_blank"
              class="inline-flex items-center gap-[.5em]"
            >
              <Pointer size="1em" class="rotate-[90deg]" />
              <span class="text-sky-400 hover:text-sky-600">{m.blog_link_title()}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <Footer />
  </div>
</div>
