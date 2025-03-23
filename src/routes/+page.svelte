<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { Building, BriefcaseBusiness, CodeXml, Server, Keyboard, Pointer } from '@lucide/svelte';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
	import Avatar from './Avatar.svelte';
	import Timeline from './Timeline.svelte';
	import Footer from './Footer.svelte';

	const inviewOptions = {
		rootMargin: '-50%'
	};

	let activeSection = $state<'sec-profile' | 'sec-job' | 'sec-blog'>('sec-profile');

	function onInviewEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		activeSection = detail.node.id;
	}
</script>

<div class="space-y-4 py-8">
	<Header />
	<Nav {activeSection} />

	<div class="space-y-12 rounded-sm bg-white pt-12">
		<section
			id="sec-profile"
			class="flex justify-center gap-12 px-12"
			use:inview={inviewOptions}
			oninview_enter={onInviewEnter}
		>
			<Avatar />
			<div class="space-y-4">
				<div class="space-y-2">
					<h2 class="text-3xl">ぬこすけ 🍊</h2>
					<ul class="inline-flex gap-4">
						<li class="inline-flex items-center gap-1 text-sm">
							<Building size="1em" />
							<span>MIXI inc.</span>
						</li>
						<li class="inline-flex items-center gap-1 text-sm">
							<BriefcaseBusiness size="1em" />
							<span>Software Engineer</span>
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
				<span class="border-b-[2px] border-sky-300 px-4 pb-2">しごと</span>
			</h2>
			<div class="space-y-6 py-6">
				<p class="text-center">社内ID・決済基盤や前払い式決済アプリの開発、運用に携っています.</p>
				<div class="grid grid-cols-3 place-content-stretch gap-4 px-6">
					<div class="space-y-4 text-center">
						<div class="grid justify-items-stretch space-y-2">
							<CodeXml size="64px" class="justify-self-center text-rose-400" />
							<h3 class="text-lg font-semibold">フロントエンド</h3>
						</div>
						<p class="text-sm">
							JavaScript / TypeScript / React / Next.js / SvelteKit / TailwindCSS
						</p>
					</div>
					<div class="space-y-4 text-center">
						<div class="grid justify-items-stretch space-y-2">
							<Server size="64px" class="justify-self-center text-violet-400" />
							<h3 class="text-lg font-semibold">サーバサイド</h3>
						</div>
						<p class="text-sm">
							Elixir / Go / Python / Ruby / Node.js / Phoenix Framework / Rails / AWS / GCP /
							Terraform
						</p>
					</div>
					<div class="space-y-4 text-center">
						<div class="grid justify-items-stretch space-y-2">
							<Keyboard size="64px" class="justify-self-center text-emerald-400" />
							<h3 class="text-lg font-semibold">開発環境</h3>
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
				<span class="border-b-[2px] border-sky-300 px-4 pb-2">ブログ</span>
			</h2>
			<div class="space-y-6 py-6">
				<p class="text-center">
					日々の作業ログや技術ネタについて書いています. もしよければのぞいてみてください.
				</p>
				<ul class="text-center">
					<li>
						<a
							href="https://blog.nukosuke.com"
							target="_blank"
							class="inline-flex items-center gap-[.5em]"
						>
							<Pointer size="1em" class="rotate-[90deg]" />
							<span class="text-sky-400 hover:text-sky-600">技術ブログ</span>
						</a>
					</li>
				</ul>
			</div>
		</section>

		<Footer />
	</div>
</div>
