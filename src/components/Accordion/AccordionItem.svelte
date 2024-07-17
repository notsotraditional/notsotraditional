<script lang="ts">
	export let title: string
	export let id: string
	export let hidden: boolean
</script>

<button
	class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 rounded-lg py-3 text-start font-semibold text-black hover:text-orange disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-orange"
	aria-controls={id}>
	{title}
	<svg
		class="block size-4 hs-accordion-active:hidden"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round">
		<path d="m6 9 6 6 6-6"></path>
	</svg>
	<svg
		class="hidden size-4 hs-accordion-active:block"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round">
		<path d="m18 15-6-6-6 6"></path>
	</svg>
</button>
<div {id} class:hidden class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="{id}-heading">
	<p class="text-black">
		<slot name="content" />
	</p>
</div>
