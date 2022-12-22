<script lang="ts">
  import "../app.css";
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

  <div class="container mx-auto px-2 sm:px-4 py-4">
    <slot />
  </div>
</main>