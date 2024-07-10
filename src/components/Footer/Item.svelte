<script lang="ts">
    export let heading: string
    export let items: {link: string, text: string}[] | [] = []
</script>

<div class="flex flex-col mb-8">
    <h3 class="text-orange mb-3 text-lg">{heading}</h3>
<ul class="m-0 p-0 flex flex-col gap-3">
    {#each items as item}
        <li><a href={item.link} class="text-base text-black {item.link ? 'hover:text-orange transition-colors hover:underline' : ''}">{item.text}</a></li>
    {/each}
</ul>
</div>