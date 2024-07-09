<script lang="ts">

    import { animate  } from "motion"
    import DownArrow from '../assets/icons/DownArrow.svg'
	import { onMount } from "svelte"

    onMount(() => {
        animate('.downArrow', {y: '10px'}, { duration: 1, repeat: Infinity, direction: 'alternate-reverse' })
    })

</script>
<div class="pt-10 px-6 md:pt-0 h-full md:h-[600px] w-full md:items-center md:justify-center flex flex-col relative">
    <h1 class="text-black text-4xl md:text-8xl font-semibold leading-[120%]">We help you<span class="text-orange">&nbsp;ship faster</span></h1>
    <img src={DownArrow.src} alt="Down arrow" class="hidden md:block h-7 downArrow absolute bottom-0"/>
</div>