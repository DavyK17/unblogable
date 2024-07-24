<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.status} Error | unblogable.</title>
</svelte:head>

<main class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold font-serif">
				un<span class="text-red">blog</span><span class="text-green">able</span>.
			</h1>
			<p class="hero-caption">
				{$page.error?.message}
			</p>
			<a href="/" class="hero-button">Rudi home</a>
		</div>
	</div>
</main>
