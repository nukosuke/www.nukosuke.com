<script lang="ts">
	type HeaderProps = { activeSection: string };
	let { activeSection }: HeaderProps = $props();

	const defaultClasses = 'px-3 py-2';
	const activeClasses = 'bg-white rounded-full text-yellow-700';

	const sections = [
		{ targetId: 'sec-profile', title: 'プロフィール' },
		{ targetId: 'sec-job', title: 'しごと' },
		{ targetId: 'sec-blog', title: 'ブログ' }
	];
</script>

<nav class="sticky top-0 z-10 rounded-sm bg-[#fff4e0] px-8 py-3 text-sm font-bold">
	<ul class="inline-flex gap-2">
		{#each sections as sec, index (index)}
			<li class={activeSection === sec.targetId ? [defaultClasses, activeClasses] : defaultClasses}>
				<a href="#{sec.targetId}">{sec.title}</a>
			</li>
		{/each}
	</ul>
</nav>
