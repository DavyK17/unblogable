<script lang="ts">
	import { DummyBlacklist } from "$lib/helpers";

	const blacklist = DummyBlacklist.sort((a, b) => {
		// Convert both strings to lower case for a case-insensitive comparison
		const lowerA = a.toLowerCase();
		const lowerB = b.toLowerCase();

		// Compare the two strings
		if (lowerA < lowerB) return -1;
		if (lowerA > lowerB) return 1;
		return 0;
	});
</script>

<main class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold font-serif">
				un<span class="text-red">blog</span><span class="text-green">able</span>.
			</h1>
			<p class="hero-caption">
				Boycott influencers sanitising the bloodthirsty Ruto regime on X (formerly Twitter) by
				spreading misinformation and playing politics with the lives of innocent Kenyans!
			</p>
			<form method="post" action="?/auth">
				<button class="hero-button" type="submit">Connect your account</button>
			</form>
		</div>
	</div>
</main>
<section class="w-full p-4">
	<div class="container mx-auto max-w-xl">
		<div class="prose blacklist m-0 max-w-full">
			<h2 class="prose-headings:h2">Blacklist</h2>
			<ul>
				{#each blacklist as handle}
					<li>
						<a href={`https://x.com/${handle}`} target="_blank" rel="noreferrer">@{handle}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
<footer class="w-full p-8 mt-20 pb-20">
	<div class="container mx-auto">
		<p>#RutoMustGo</p>
	</div>
</footer>
