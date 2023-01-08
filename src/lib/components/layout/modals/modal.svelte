<script lang="ts">
  import { CloseSvg } from "../svg";
    import { Text } from "../text";

  export let modalId: string;
  export let modalTitle: string;
</script>

<!-- <div id={modalId} data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
  <div class="relative w-full h-full max-w-2xl md:h-auto">
      <div class="relative bg-default-secondary rounded-lg shadow">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <Text size="xl" font="semibold" color="text-white">{ modalTitle }</Text>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={modalId}>
                  <CloseSvg /> 
              </button>
          </div>
          <slot></slot>
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide={modalId} type="button" class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Text size="sm" font="medium" align="center" color="text-white">Envoyer</Text>
              </button>
          </div>
      </div>
  </div>
</div> -->

<div id={modalId} data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed z-50 flex h-full w-full items-center justify-center">
  <div class="w-5/12 rounded-lg bg-default-secondary shadow transition-all ease-in-out duration-500">
    <!-- title -->
    <div class="flex items-center justify-between border-b p-4 dark:border-gray-600">
      <Text size="lg" font="semibold" color="text-white">{ modalTitle }</Text>

      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={modalId}>
        <CloseSvg /> 
      </button>
    </div>

    <!-- body -->
    <slot></slot>

    <!-- footer -->
    <div class="border-t border-gray-200 p-4 dark:border-gray-600">
      <button data-modal-hide={modalId} type="button" class="block bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
        <Text size="sm" font="medium" align="center" color="text-white">Envoyer</Text>
      </button>
    </div>
  </div>
</div>