<script lang="ts">
	import { animate } from 'motion'
	import DownArrow from '../assets/icons/DownArrow.svg'
	import { onMount } from 'svelte'

	onMount(() => {
		animate('.downArrow', { y: '10px' }, { duration: 1, repeat: Infinity, direction: 'alternate-reverse' })
	})
</script>

<div class="relative flex h-full w-full flex-col px-10 pt-10 md:px-10 lg:h-[600px] lg:items-center lg:justify-center lg:px-20 lg:pt-0">
	<h1 class="text-4xl font-semibold leading-[120%] text-black md:text-6xl lg:text-8xl">
		We help you<span class="text-orange">&nbsp;ship faster</span>
	</h1>
	<img src={DownArrow.src} alt="Down arrow" class="downArrow absolute bottom-0 hidden h-7 lg:block" />
</div>
