<script lang="ts">
	export let text: string
	export let type: 'submit' | 'button' = 'submit'
</script>

<button
	{type}
	class="inline-flex w-full items-center justify-center gap-x-2 rounded-full border-2 border-black bg-transparent px-4 py-4 text-sm font-semibold text-black hover:shadow-md disabled:pointer-events-none disabled:opacity-50 lg:max-w-40 lg:py-2">
	{text}
</button>
