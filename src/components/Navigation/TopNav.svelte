<script lang="ts">
	import Logo from '../../../public/logo.svg'
	import PrimaryCta from '../../components/Shared/Buttons/PrimaryCTA.svelte'

	export let activePage: boolean = false
</script>

<header class="dark:bg-neutral-800 flex w-full flex-wrap py-8 text-lg lg:flex-nowrap lg:justify-start">
	<nav class="mx-auto flex w-full max-w-[85rem] basis-full flex-wrap items-center justify-between px-4 md:px-10" aria-label="Global">
		<a class="flex-none text-xl font-semibold lg:order-1 dark:text-white" href="/"><img src={Logo.src} /></a>
		<div class="flex items-center gap-x-2 lg:order-3">
			<button
				type="button"
				class="hs-collapse-toggle hover:bg-gray-50 dark:border-neutral-700 inline-flex items-center justify-center gap-x-2 rounded-lg p-2.5 text-black disabled:pointer-events-none disabled:opacity-50 lg:hidden dark:bg-transparent dark:text-white dark:hover:bg-white/10"
				data-hs-collapse="#navbar-alignment"
				aria-controls="navbar-alignment"
				aria-label="Toggle navigation">
				<svg
					class="size-4 flex-shrink-0 hs-collapse-open:hidden"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
				<svg
					class="hidden size-4 flex-shrink-0 hs-collapse-open:block"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
			</button>
			<a href="/enquire">
				<PrimaryCta text="Get in touch" type="button" />
			</a>
		</div>
		<div
			id="navbar-alignment"
			class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 lg:order-2 lg:block lg:grow-0 lg:basis-auto">
			<div class="mt-5 flex flex-col gap-8 text-base lg:mt-0 lg:flex-row lg:items-center lg:ps-5">
				<a class="font-medium text-black hover:text-orange" href="/" aria-current="page">Home</a>
				<!-- <a class="font-medium text-black hover:text-orange" href="/ui">UX / UI</a> -->
				<a class="font-medium text-black hover:text-orange" href="/automation">Automation as a Service</a>
				<a class="font-medium text-black hover:text-orange" href="/code">Low Code / No Code</a>
				<!-- <a class="font-medium text-black hover:text-orange" href="/about">About Us</a> -->
			</div>
		</div>
	</nav>
</header>
