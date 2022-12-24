<script lang="ts">
  import "../app.css";
  let show = false;
</script>

<main class="container mx-auto px-2 sm:px-4 py-4">
  <nav class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img src="https://cdn.discordapp.com/attachments/927843710669062204/1055460347282194492/Light_Logo_TaskBoard_128.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
      </a>
      <div class="flex md:order-2">
        <!-- TODO: Add button for connect (with GitHub? or Discord?) -->
      </div>
    </div>
  </nav>

  {#if show}
    <div class="grid grid-cols-2 md:grid-cols-6">
      <div class="col-span-3 sm:col-span-2 lg:col-span-1 xl:col-span-1">
        <p class="text-2xl font-bold text-white">Nouvelle tâche</p>
      </div>
      <div class="col-span-3 sm:col-span-4 lg:col-span-5 xl-col-span-5">
        <slot />
      </div>
    </div>
  {:else}
    <div class="container mx-auto px-2 sm:px-4 py-4">
      <slot />
    </div>
  {/if}
  
</main>