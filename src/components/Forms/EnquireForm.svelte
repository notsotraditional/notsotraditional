<script lang="ts">
	import PrimaryCta from "@components/Shared/Buttons/PrimaryCTA.svelte"

    let firstName = '';
    let lastName = '';
    let email = '';
    let companyName = '';
    let contactNumber = '';
    let websiteUrl = '';
    let additionalContent = '';
    // let selectedServices = [];

    const services = [
      'Web App development',
      'Mobile App Development',
      'Website development',
      'Automation as a service'
    ];

    const handleSubmit = async () => {
      try {

        
          const response = await fetch('/api/enquire', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            contactNumber: contactNumber,
            website: websiteUrl,
            companyName: companyName,
            additionalContent: additionalContent,
            webApp: null,
            mobileApp: null,
            websiteDev: null,
            automationAsAService: null,
            recaptcha: token
          })});
        
          const data = await response.json()

          if(data.message !== 'success'){
            throw new Error('Submission has failed')
          }

      } catch (error) {
        console.error(error);
      }
    }
  </script>
<div class="flex flex-col items-center justify-center gap-5 mt-10 px-6">
    <h2 class="font-semibold text-black text-2xl mb-5 lg:mb-10 mt-10 lg:mt-20">Let's get in touch to help you move forward</h2>
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col max-w-lg gap-3 w-full">
        <div class="relative">
          <input type="text" bind:value={firstName} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="First name">
        </div>
        <div class="relative">
          <input type="text" bind:value={lastName} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Last name">
        </div>
        <div class="relative">
          <input type="email" bind:value={email} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Email">
        </div>
        <div class="relative">
            <input type="text" bind:value={companyName} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Company name">
        </div>
        <div class="relative">
            <input type="url" bind:value={websiteUrl} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Website URL">
          </div>

          <div class="relative">
            <input type="contact" bind:value={contactNumber} class="py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Contact number">
          </div>
          <textarea bind:value={additionalContent} class="py-3 ps-2 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-base focus:border-blue-500 focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none placeholder-black" rows="4" placeholder="Additional comments"></textarea>

        <div class="flex flex-col gap-5 mt-10">
            <p class="text-black mb-3">I am interested in the following services:</p>
            {#each services as service, i}
                <div class="flex gap-2">
                    <input type="checkbox" class="shrink-0 mt-0.5 border-black rounded text-orange focus:ring-orange disabled:opacity-50 disabled:pointer-events-none" id="hs-checkbox-group-{i}" value={service}>
                    <label for="hs-checkbox-group-{i}" class="text-base text-black ms-3">{service}</label>
                </div>
            {/each}
        </div>
        <div class="flex flex-col w-full items-center justify-center mt-10">
          <button class="g-recaptcha"
            data-sitekey="reCAPTCHA_site_key"
            data-callback='onSubmit'
            data-action='submit'>Submit
          </button>
            <PrimaryCta text="Submit" type="submit"/>
        </div>
    </form>
</div>