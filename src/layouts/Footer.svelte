<script lang="ts">
    import Logo from '../../public/logo.svg'
    import Item from '../components/Footer/Item.svelte'


    const items = [
        {
            heading: 'Services',
            links: [
                {text: 'UX/UI', link: '/ui'},
                {text: 'Automation', link: '/automation'},
                {text: 'Low / No Code', link: '/code'}
            ]
        },
        {
            heading: 'Pages',
            links: [
                {text: 'Home', link: '/'},
                {text: 'About us', link: '/about'},
                {text: 'Enquire', link: '/enquire'}
            ]
        },
        {
            heading: 'Contact Us',
            links: [
                {text: 'info@notsotraditional.com', link: 'mailto:info@notostraditional.com'},
                {text: 'Cape Town, South Africa', link: ''},
            ]
        }
    ]

    let currentDate = new Date().getFullYear()
</script>
<footer class="flex flex-col lg:flex-row px-6 lg:px-20 py-10 mt-32 lg:pb-10 justify-evenly flex-wrap border-orange border-0 border-t-[1px]">
    <div class="flex flex-col max-w-md">
        <img src={Logo.src} alt="Not so traditional logo" class="mb-5" height={Logo.height} width={Logo.width}/>
        <p class="text-black text-sm mb-8">Not your traditional agency, we are your low-code, no-code automation experts, dedicated to driving digital innovation and saving your team valuable time.</p>
    </div>
    {#each items as section}
        <Item heading={section.heading} items={section.links}/>
    {/each}
    <p class="text-center w-full mt-20 text-orange text-xs">All rights reserved &copy; {currentDate} not so traditional</p>
</footer>
