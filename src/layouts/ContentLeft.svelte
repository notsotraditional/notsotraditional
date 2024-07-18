<script lang="ts">
	import PrimaryCta from '@components/Shared/Buttons/PrimaryCTA.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
	import { scroll, animate } from 'motion'
	import { onMount } from 'svelte'

	export let link: string
	export let id: string
	export let buttonText: string = 'Find out more'

	let element: HTMLElement | null = null

	onMount(() => {
		element = document.getElementById(id)
		if (element) {
			scroll(animate(element, { opacity: [0, 1] }, { duration: 1 }), {
				target: element,
				offset: ['start end', 'end end'],
			})
		}
	})
</script>

<div class="flex w-screen flex-col items-center">
	<div class="flex flex-col items-center gap-10 px-10 pt-16 opacity-0 md:pt-32 lg:flex-row lg:px-20" {id}>
		<div class="flex max-w-2xl flex-col">
			<SectionHeading>
				<slot name="heading" slot="heading" />
			</SectionHeading>
			<p class="mb-10 text-base leading-[150%] text-black"><slot name="description" /></p>
			<a href={link} class="hidden lg:block"><PrimaryCta text={buttonText} type="button" /></a>
		</div>
		<slot name="image" />
		<a href={link} class="mt-10 block w-full lg:hidden"><PrimaryCta text={buttonText} type="button" /></a>
	</div>
</div>
