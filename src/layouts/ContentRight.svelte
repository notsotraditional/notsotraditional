<script lang="ts">
	import PrimaryCta from '@components/Shared/Buttons/PrimaryCTA.svelte'
	import SectionHeading from '../components/Shared/Headings/SectionHeading.svelte'
    import { onMount } from 'svelte'
    import { animate, scroll } from 'motion';
	export let link: string
    export let id: string


    let element: HTMLElement | null = null

	onMount(() => {
		element = document.getElementById(id)
		if (element) {
			scroll(
                animate(element,
                    { opacity: [0, 1] },
                    { duration: 1},
                ),
                {
				target: element,
				offset: ['center end', 'end end'],
			})
		}
	})
</script>

<div class="flex flex-col items-center px-10 pt-16 md:pt-32 lg:flex-row-reverse lg:gap-32 lg:px-20 opacity-0" {id}>
	<div class="flex max-w-2xl flex-col">
		<SectionHeading>
			<slot name="heading" slot="heading" />
		</SectionHeading>
		<p class="mb-10 text-base leading-[150%] text-black"><slot name="description" /></p>
		<a href={link} class="hidden w-full lg:block"><PrimaryCta text="Find out more" type="button" /></a>
	</div>
	<slot name="image" />
    <a href={link} class="mt-10 w-full lg:hidden"><PrimaryCta text="Find out more" type="button" /></a>
</div>
