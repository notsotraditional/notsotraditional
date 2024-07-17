<script lang="ts">
	export let heading: string
	export let items: { link: string; text: string }[] | [] = []
</script>

<div class="mb-8 flex flex-col">
	<h3 class="mb-3 text-lg text-orange">{heading}</h3>
	<ul class="m-0 flex flex-col gap-3 p-0">
		{#each items as item}
			<li>
				<a href={item.link} class="text-base text-black {item.link ? 'transition-colors hover:text-orange hover:underline' : ''}"
					>{item.text}</a>
			</li>
		{/each}
	</ul>
</div>
