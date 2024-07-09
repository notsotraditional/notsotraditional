<script lang="ts">
    import Logo from '../../../public/logo.svg'
    import PrimaryCta from '../../components/Shared/Buttons/PrimaryCTA.svelte'

    export let activePage: boolean = false
</script>
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-8 dark:bg-neutral-800">
    <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
      <a class="sm:order-1 flex-none text-xl font-semibold dark:text-white" href="#"><img src={Logo.src}/></a>
      <div class="sm:order-3 flex items-center gap-x-2">
        <button type="button" class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg text-black hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
       <a href="/enquire">
        <PrimaryCta text="Get in touch" type="button"/>
        </a>
      </div>
      <div id="navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
        <div class="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 text-base">
          <a class="font-medium text-black hover:text-orange" href="#" aria-current="page">Home</a>
          <a class="font-medium text-black hover:text-orange" href="/ui">UX / UI</a>
          <a class="font-medium text-black hover:text-orange" href="/automation">Automation</a>
          <a class="font-medium text-black hover:text-orange" href="/nocode">Low Code / No Code</a>
          <a class="font-medium text-black hover:text-orange" href="/about">About Us</a>
        </div>
      </div>
    </nav>
  </header>