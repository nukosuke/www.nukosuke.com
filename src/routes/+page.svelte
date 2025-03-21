<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { Building, BriefcaseBusiness } from '@lucide/svelte';
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
			class="flex gap-12 px-12"
			use:inview={inviewOptions}
			oninview_enter={onInviewEnter}
		>
			<Avatar />
			<div class="space-y-4">
				<div class="space-y-2">
					<h2 class="text-3xl">ぬこすけ 🍊</h2>
					<ul class="inline-flex gap-4">
						<li class="inline-flex items-center gap-1">
							<Building size="1em" />
							<span>MIXI inc.</span>
						</li>
						<li class="inline-flex items-center gap-1">
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
			<h2 class="border-l-[0.25rem] border-sky-300 px-2 text-2xl">しごと</h2>
			<p>社内ID・決済基盤や前払い式決済アプリの開発、運用に携っています.</p>
			<ul>
				<li>フロントエンド</li>
				<li>サーバサイド</li>
				<li>開発環境</li>
			</ul>
		</section>

		<section
			id="sec-blog"
			class="space-y-4 px-12"
			use:inview={inviewOptions}
			oninview_enter={onInviewEnter}
		>
			<h2 class="border-l-[0.25rem] border-sky-300 px-2 text-2xl">ブログ</h2>
			<ul>
				<li><a href="https://blog.nukosuke.com">技術ブログ</a></li>
			</ul>
		</section>

		<Footer />
	</div>
</div>
