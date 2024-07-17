<script>
    import SectionHeading from "@components/Shared/Headings/SectionHeading.svelte";
    let payPerHour = 0;
    let hours = 0;
    let totalCost = 0;
  
    function calculateCost() {
      totalCost = payPerHour * hours;
    }
  </script>

<div class="flex items-center justify-center pt-28 flex-col">
<div class="text-center">
    <SectionHeading>
        <span slot="heading">Manual <span class="text-orange">cost calculator</span></span>
    </SectionHeading>
    <p class="mb-10">Calculate how much your manual processes are costing you and your team</p>
</div>
  <div class="max-w-lg w-full flex flex-col gap-5 mt-7">
    <label for="payPerHour" class="block text-sm font-semibold text-black">
      Your pay per hour
    </label>
    <input
      name="payPerHour"
      type="number"
      bind:value={payPerHour}
      class="py-3 px-4 block w-full border-black border-b-2 text-sm focus:border-2 focus:border-black disabled:opacity-50 disabled:pointer-events-none bg-light"
      placeholder="Enter pay per hour"
    />
    <label for="totalHours" class="block text-sm font-semibold text-black">
        Total hours spent on manual processes
      </label>
    <input
      name="totalHours"
      type="number"
      bind:value={hours}
      class="py-3 px-4 block w-full border-black border-b-2 text-sm focus:border-2 focus:border-black  disabled:opacity-50 disabled:pointer-events-none bg-light mb-5"
      placeholder="Enter number of hours"
    />

    <button
      on:click={calculateCost}
      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-orange text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
    >
      Calculate manual cost
    </button>

    {#if totalCost > 0}
      <div class="mt-4 p-4 bg-gray-100 rounded-lg dark:bg-neutral-800">
        <p class="text-lg font-semibold">
          Your current process is costing you: R{totalCost.toFixed(2)}
        </p>
      </div>
    {/if}
  </div>
  </div>