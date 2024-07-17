<script lang="ts">
	import Accordion from '@components/Accordion/Accordion.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
	export let items: Array<{ title: string; content: string; id: string }>
</script>

<div class="flex items-center justify-center py-10 lg:py-28">
	<div class="flex max-w-3xl flex-col">
		<span class="mb-10 text-center">
			<SectionHeading>
				<span class="text-orange" slot="heading">FAQ's</span>
			</SectionHeading>
		</span>
		<Accordion {items} />
	</div>
</div>
