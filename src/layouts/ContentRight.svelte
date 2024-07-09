<script lang="ts">
	import PrimaryCta from '@components/Shared/Buttons/PrimaryCTA.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
	export let link: string
</script>

<div class="flex flex-col-reverse items-center px-10 pt-16 md:pt-32 lg:flex-row lg:gap-32 lg:px-20">
	<a href={link} class="mt-10 w-full lg:hidden"><PrimaryCta text="Find out more" type="button" /></a>
	<slot name="image" />
	<div class="flex max-w-2xl flex-col">
		<SectionHeading>
			<slot name="heading" slot="heading" />
		</SectionHeading>
		<p class="mb-10 text-base leading-[150%] text-black"><slot name="description" /></p>
		<a href={link} class="hidden w-full lg:block"><PrimaryCta text="Find out more" type="button" /></a>
	</div>
</div>
