<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import markdown_content from '$lib/markdown/about.md?raw';
</script>

<div class="container max-w-fit m-2">
	<article class="flex-auto prose max-w-screen-lg text-xl">
		<!-- Await sd_models -->
		{#await markdown_content}
			<div>Loading...</div>
		{:then text}
			<SvelteMarkdown source={text} />
		{/await}
	</article>
</div>
