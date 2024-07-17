<script lang="ts">
	import Accordion from '@components/Accordion/Accordion.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
	import PrimaryCta from '../components/Shared/Buttons/PrimaryCTA.svelte'
	export let items: Array<{ title: string; content: string; id: string }>
</script>

<div class="flex flex-col items-center justify-center px-6 py-10 lg:py-28">
	<div class="flex max-w-3xl flex-col">
		<span class="mb-10 text-center">
			<SectionHeading>
				<span class="text-black" slot="heading">FAQ's</span>
			</SectionHeading>
		</span>
		<Accordion {items} />
	</div>
	<a href="/enquire" class="mt-10 flex w-full justify-center">
		<PrimaryCta text="Get in touch" />
	</a>
</div>
