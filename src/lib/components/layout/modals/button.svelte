<script lang="ts">
  export let modalId: string;
</script>

<button data-modal-target={modalId} data-modal-toggle={modalId} class="text-white border-2 border-gray-500 hover:border-gray-300 bg-gray-700 dark:border-gray-700 dark:bg-gray-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:transition-all duration-500" type="button">
  <slot />
</button>