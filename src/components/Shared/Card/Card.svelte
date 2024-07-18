<script lang="ts">

    interface Tier {
        title: string
        targetAudience: string
        pricing: string
        includedHours: string
        additionalHours: string
        commitment: string
        support: string
        discoveryService: string
        usageReports: string
        optimizationRecommendations: string
        rollOverHours: string
        idealFor: string
        exclusions: string
    }

	export let tier: Tier
</script>

<div class="flex flex-col bg-white shadow-lg rounded-xl p-4 md:p-10">
    <h3 class="text-2xl font-bold text-black mb-5">{tier.title}</h3>
    <p class="mt-1 text-black mb-3 max-w-md">{tier.targetAudience}</p>
    
    <p class="mt-1 text-base font-medium text-orange">Pricing</p>
    <p class="mt-2 text-black mb-3">{tier.pricing}</p>

    <p class="mt-1 text-base font-medium text-orange">Included Hours</p>
    <p class="mt-2 text-black mb-3">{tier.includedHours}</p>

    <p class="mt-1 text-base font-medium text-orange">Additional Hours</p>
    <p class="mt-2 text-black mb-3">{tier.additionalHours}</p>

    <p class="mt-1 text-base font-medium text-orange">Support</p>
    <p class="mt-2 text-black mb-3">{tier.support}</p>

    <p class="mt-1 text-base font-medium text-orange">Discovery Service</p>
    <p class="mt-2 text-black mb-3">{tier.discoveryService}</p>

    <p class="mt-1 text-base font-medium text-orange">Usage Reports</p>
    <p class="mt-2 text-black mb-3">{tier.usageReports}</p>

    <p class="mt-1 text-base font-medium text-orange">Optimisation Recommendations</p>
    <p class="mt-2 text-black mb-3">{tier.optimizationRecommendations}</p>

    <p class="mt-1 text-base font-medium text-orange">Roll-Over Hours</p>
    <p class="mt-2 text-black mb-3">{tier.rollOverHours}</p>
  </div>