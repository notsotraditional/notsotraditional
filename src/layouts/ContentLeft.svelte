<script lang="ts">
	import PrimaryCta from '@components/Shared/Buttons/PrimaryCTA.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
	export let link: string
</script>

<div class="flex flex-col items-center gap-10 px-10 pt-16 md:pt-32 lg:flex-row lg:px-20">
	<div class="flex max-w-2xl flex-col">
		<SectionHeading>
			<slot name="heading" slot="heading" />
		</SectionHeading>
		<p class="mb-10 text-base leading-[150%] text-black"><slot name="description" /></p>
		<a href={link} class="hidden lg:block"><PrimaryCta text="Find out more" type="button" /></a>
	</div>
	<slot name="image" />
	<a href={link} class="block w-full lg:hidden"><PrimaryCta text="Find out more" type="button" /></a>
</div>
