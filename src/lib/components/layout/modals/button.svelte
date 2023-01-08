<script lang="ts">
  export let modalId: string;
</script>

<button data-modal-target={modalId} data-modal-toggle={modalId} class="block bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
  <slot />
</button>