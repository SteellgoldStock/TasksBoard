<script lang="ts">
  export let modalId: string;
</script>

<button data-modal-target={modalId} data-modal-toggle={modalId} class="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
  <slot />
</button>