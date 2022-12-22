<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <title>TasksBoard</title>
</svelte:head>

<main class="container mx-auto px-2 sm:px-4 py-4">
  <nav class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
        <img src="https://cdn.discordapp.com/attachments/927843710669062204/1055460347282194492/Light_Logo_TaskBoard_128.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
    </a>
    <div class="flex md:order-2">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Nouvelle tâche
      </button>
    </div>
    </div>
  </nav>

  <div class="container mx-auto px-2 sm:px-4 py-4">
    <slot />
  </div>
</main>