<script>
    import Card from '@components/Shared/Card/Card.svelte'
	import SectionHeading from '@components/Shared/Headings/SectionHeading.svelte'
    import PrimaryCta from '@components/Shared/Buttons/PrimaryCTA.svelte';
    let tiers = [
      {
        title: "Pay as you go",
        targetAudience: "Flexibility at Your Fingertips - Pay Only for What You Use. Perfect for Small Businesses and Project-Based Work. Optional discovery service and support available on an hourly basis. Prices exclude VAT and any tool subscriptions or costs.",
        pricing: "R900 / £50 / €55 per hour",
        includedHours: "N/A",
        additionalHours: "R900 / £50 / €55 per hour",
        commitment: "No commitment, pay-as-you-go",
        support: "R900 / £50 / €55 per hour",
        discoveryService: "Optional, charged per hour",
        usageReports: "Not included",
        optimizationRecommendations: "Not included",
        rollOverHours: "N/A",
        idealFor: "Flexible needs, occasional projects",
        exclusions: "VAT and any tool subscriptions/costs excluded"
      },
      {
        title: "Month to month",
        targetAudience: "Predictable, Scalable, and Value-Packed Automation. Designed for Growing Businesses with Consistent Needs. Enjoy included discovery service, priority support, and comprehensive monthly reports. Prices exclude VAT and any tool subscriptions or costs.",
        pricing: "R18,000 / £1000 / €1100 per month",
        includedHours: "Up to 30 hours",
        additionalHours: "R720 / £40 / €44 per hour",
        commitment: "Monthly subscription",
        support: "Included (priority support)*",
        discoveryService: "Included",
        usageReports: "Monthly usage reports",
        optimizationRecommendations: "Included",
        rollOverHours: "Up to 5 hours roll-over",
        idealFor: "Predictable needs, ongoing projects",
        exclusions: "VAT and any tool subscriptions/costs excluded"
      }
    ];
  </script>

<div class="flex flex-col items-center justify-center pt-28 px-6">
    <SectionHeading>
        <span slot="heading" class="mb-10 block">Pricing</span>
    </SectionHeading>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
    {#each tiers as tier}
        <Card tier={tier} />
    {/each}
  </div>
  <p class="text-sm mb-20 mt-5">*Additional support available, priced per hour if you are over the 30 hour limit.</p>
  <PrimaryCta text="Get in touch"/>
  <p class="mt-10 max-w-lg text-center text-lg">Still not convinced? Use our handy calculator below to see how much you manual processes are costing you.</p>
</div>