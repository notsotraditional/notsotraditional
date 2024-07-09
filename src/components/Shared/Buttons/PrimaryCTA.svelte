<script lang="ts">
    export let text : string
    export let type : 'submit' | 'button' = 'submit'
</script>

<button {type} class="py-2 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-full border-2 border-black bg-transparent text-black hover:shadow-md disabled:opacity-50 disabled:pointer-events-none md:min-w-40">
    {text}
</button>