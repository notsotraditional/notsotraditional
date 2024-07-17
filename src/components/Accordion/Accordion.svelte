<script lang="ts">
	import AccordionItem from './AccordionItem.svelte'
	export let items: Array<{ title: string; content: string; id: string }>
</script>

<div class="hs-accordion-group px-6">
	{#each items as item, index}
		<div class="hs-accordion" class:active={index === 0} id="{item.id}-heading">
			<AccordionItem title={item.title} id={item.id} hidden={index > 0}>
				<p class="text-black" slot="content">
					{item.content}
				</p>
			</AccordionItem>
		</div>
	{/each}
</div>
