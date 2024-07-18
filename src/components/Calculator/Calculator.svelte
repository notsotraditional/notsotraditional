<script>
	import SectionHeading from '@components/Shared/Headings/SectionHeading.svelte'
	let payPerHour = 0
	let hours = 0
	let totalCost = 0

	const calculateCost = () => {
		totalCost = payPerHour * hours
	}
</script>

<div class="flex flex-col items-center justify-center px-6 pt-28">
	<div class="text-center">
		<SectionHeading>
			<span slot="heading">Manual <span class="text-orange">cost calculator</span></span>
		</SectionHeading>
		<p class="mb-10">Calculate how much your manual processes are costing you and your team</p>
	</div>
	<div class="mt-7 flex w-full max-w-lg flex-col gap-5">
		<label for="payPerHour" class="block text-sm font-semibold text-black"> Your salary per hour </label>
		<input
			name="payPerHour"
			type="number"
			bind:value={payPerHour}
			class="block w-full border-b-2 border-black bg-light px-4 py-3 text-sm focus:border-2 focus:border-black disabled:pointer-events-none disabled:opacity-50"
			placeholder="Enter pay per hour" />
		<label for="totalHours" class="block text-sm font-semibold text-black"> Total hours spent on manual processes </label>
		<input
			name="totalHours"
			type="number"
			bind:value={hours}
			class="mb-5 block w-full border-b-2 border-black bg-light px-4 py-3 text-sm focus:border-2 focus:border-black disabled:pointer-events-none disabled:opacity-50"
			placeholder="Enter number of hours" />

		<button
			on:click={calculateCost}
			class="hover:bg-blue-600 focus:ring-blue-500 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-orange px-4 py-3 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2">
			Calculate manual cost
		</button>

		{#if totalCost > 0}
			<div class="bg-gray-100 dark:bg-neutral-800 mt-4 rounded-lg p-4">
				<p class="text-lg font-semibold">
					Your current process is costing you: R{totalCost.toFixed(2)}
				</p>
			</div>
		{/if}
	</div>
</div>
