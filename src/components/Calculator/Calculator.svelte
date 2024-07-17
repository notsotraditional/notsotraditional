<script>
    let payPerHour = 0;
    let hours = 0;
    let totalCost = 0;
  
    function calculateCost() {
      totalCost = payPerHour * hours;
    }
  </script>
  
  <div class="max-w-sm space-y-3">
    <input
      type="number"
      bind:value={payPerHour}
      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      placeholder="Enter pay per hour"
    />
    
    <input
      type="number"
      bind:value={hours}
      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      placeholder="Enter number of hours"
    />
    
    <button
      on:click={calculateCost}
      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    >
      Calculate Cost
    </button>
    
    {#if totalCost > 0}
      <div class="mt-4 p-4 bg-gray-100 rounded-lg dark:bg-neutral-800">
        <p class="text-lg font-semibold">
          Total Cost: ${totalCost.toFixed(2)}
        </p>
      </div>
    {/if}
  </div>