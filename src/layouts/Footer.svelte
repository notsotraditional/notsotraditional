<script lang="ts">
	import Logo from '../../public/logo.svg'
	import Item from '../components/Footer/Item.svelte'

	const items = [
		{
			heading: 'Services',
			links: [
				{ text: 'UX/UI', link: '/ui' },
				{ text: 'Automation', link: '/automation' },
				{ text: 'Low / No Code', link: '/code' },
			],
		},
		{
			heading: 'Pages',
			links: [
				{ text: 'Home', link: '/' },
				{ text: 'About us', link: '/about' },
				{ text: 'Enquire', link: '/enquire' },
			],
		},
		{
			heading: 'Contact Us',
			links: [
				{ text: 'info@notsotraditional.com', link: 'mailto:info@notostraditional.com' },
				{ text: 'Cape Town, South Africa', link: '' },
			],
		},
	]

	let currentDate = new Date().getFullYear()
</script>

<footer class="mt-32 flex flex-col flex-wrap justify-evenly border-0 border-t-[1px] border-orange px-6 py-10 lg:flex-row lg:px-20 lg:pb-10">
	<div class="flex max-w-md flex-col">
		<img src={Logo.src} alt="Not so traditional logo" class="mb-5" height={Logo.height} width={Logo.width} />
		<p class="mb-8 text-sm text-black">
			Not your traditional agency, we are your low-code, no-code automation experts, dedicated to driving digital innovation and saving your
			team valuable time.
		</p>
	</div>
	{#each items as section}
		<Item heading={section.heading} items={section.links} />
	{/each}
	<p class="mt-20 w-full text-center text-xs text-orange">All rights reserved &copy; {currentDate} not so traditional</p>
</footer>
