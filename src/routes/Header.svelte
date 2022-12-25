<script lang="ts">
	import { page } from '$app/stores';
	$: pathList = $page.url.pathname.split('/');
</script>

<div
	class="navbar bg-base-100/25 backdrop-blur text-primary-content rounded-xm p-0 max-h-1 sticky top-0 z-50 relative max-w-full"
>
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">AI Tracker</a>
	</div>
	<div class="flex-initial">
		<ul class="menu menu-horizontal mx-10">
			<li><a href="/about">About</a></li>
			<!-- <li tabindex="0"> -->
			<li>
				<p>
					Resources
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</p>
				<ul class="p-2 bg-base-100">
					<li><a href="/resources/sd">Stable Diffusion</a></li>
					<li><a href="/resources/chatgpt">ChatGPT</a></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
<div class="text-sm breadcrumbs max-w-sm flex-1 m-2">
	<ul>
		{#each pathList as path, i}
			{#if i === 0}
				<li>
					<a href="/" class="text-purple-500">Home</a>
				</li>
			{:else}
				<li>
					<a href={pathList.slice(0, i + 1).join('/')}>{path}</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
