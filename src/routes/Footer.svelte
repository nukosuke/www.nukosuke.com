<script lang="ts">
	import { MapPin } from '@lucide/svelte';
	import {
		SiBluesky,
		SiMastodon,
		SiX,
		SiGithub,
		SiMatrix,
		SiMedium,
		SiQiita,
		SiZenn
	} from '@icons-pack/svelte-simple-icons';
</script>

<footer class="space-y-8 rounded-b bg-[#fff4e0] px-12 py-8 text-yellow-900">
	<div class="grid grid-cols-2">
		<ul class="space-y-4">
			<li>
				<div class="inline-flex gap-4">
					<span class="inline-flex gap-1 font-bold">
						<MapPin />
						Location
					</span>
					<p>Shibuya-ku Tokyo, Japan</p>
				</div>
			</li>
			<li>
				<div class="inline-flex gap-3">
					<a href="https://bsky.app/profile/nukosuke.bsky.social"><SiBluesky size={20} /></a>
					<a href="https://mastodon.social/@nukosuke"><SiMastodon size={20} /></a>
					<a href="https://x.com/pg_nukosuke"><SiX size={20} /></a>
					<a href="https://github.com/nukosuke"><SiGithub size={20} /></a>
					<a href="https://matrix.to/#/@nukosuke:matrix.org"><SiMatrix size={20} /></a>
					<a href="https://medium.com/@nukosuke"><SiMedium size={20} /></a>
					<a href="https://qiita.com/nukosuke"><SiQiita size={20} /></a>
					<a href="https://zenn.dev/nukosuke"><SiZenn size={20} /></a>
				</div>
			</li>
		</ul>
		<form action="https://formspree.io/ox3vtaem@duck.com" method="POST" class="w-full space-y-2">
			<h3 class="pb-2 text-lg font-bold">お問い合わせ</h3>
			<div>
				<label for="email" class="mb-2 block text-sm font-medium">メールアドレス</label>
				<input
					id="email"
					type="email"
					name="email"
					required
					placeholder="you@example.com"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-700 focus:ring-yellow-700"
				/>
			</div>
			<div>
				<label for="body" class="mb-2 block text-sm font-medium">本文</label>
				<textarea
					id="body"
					name="body"
					required
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-700 focus:ring-yellow-700"
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full cursor-pointer rounded-lg bg-yellow-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-yellow-700 focus:outline-none sm:w-auto"
				>送信</button
			>
		</form>
	</div>
	<p class="text-center text-gray-700">&copy; nukosuke.com (*ΦωΦ*)</p>
</footer>
