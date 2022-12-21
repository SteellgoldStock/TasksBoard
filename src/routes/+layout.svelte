<script>
  import "../app.css";
</script>

<main class="container mx-auto px-2 sm:px-4 py-4">
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src="https://media.discordapp.net/attachments/1037009897289691208/1055264520559415437/Logo_TasksBoard_2.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
        <!-- <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TasksBoard</span> -->
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