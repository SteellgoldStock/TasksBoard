<script lang="ts">
  import Textarea from "../form/inputs/textarea/textarea.svelte";
  import { Modal } from "./modals";

  let content: string;
</script>

<nav class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
      <img src="https://cdn.discordapp.com/attachments/927843710669062204/1055460347282194492/Light_Logo_TaskBoard_128.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
    </a>
    <div class="flex md:order-2">
      <!-- TODO: Add button for connect (with GitHub? or Discord?) -->
      <button data-modal-target="staticModal" data-modal-toggle="staticModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
        Nouvelle tâche
      </button>
    </div>
  </div>
</nav>

<Modal modalId="newtask-form" title="Nouvelle tâche">
  <div class="p-6 space-y-6">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil, impedit earum saepe est consequatur nesciunt repellendus distinctio eum amet sequi ea animi officia optio. Repellat quae possimus quaerat eos.
    </p>
    <Textarea placeholder="Faire cuir les pates" bind:value={content} />
  </div>
</Modal>