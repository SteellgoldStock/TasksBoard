<script lang="ts">
  export let task_title: string = "Hello world!";
  export let task_description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  export let task_id: string = "my-task";

  function changeColor() {
    let element = document.getElementsByClassName(task_id)[0];

    if (element.classList.contains("bg-green-500") && element.classList.contains("hover:bg-green-400")) {
      element.classList.remove("bg-green-500");
      element.classList.remove("hover:bg-green-400");
      element.classList.add("bg-rose-500");
      element.classList.add("hover:bg-rose-400");
    } else {
      element.classList.remove("bg-rose-500");
      element.classList.remove("hover:bg-rose-400");
      element.classList.add("bg-green-500");
      element.classList.add("hover:bg-green-400");
    }
  }
</script>

<div class="max-w-sm border bg-gray-700 border-gray-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
  <div class="px-4 py-5 sm:p-6">
    <div class="flex items-center">
      <div class="{task_id} flex-shrink-0 bg-green-500 rounded-md p-3 hover:bg-green-400 hover:transition-all duration-500" on:click={changeColor} on:keypress={changeColor}> 
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="ml-5 w-0 flex-1">
        <p class="text-sm leading-5 font-medium text-gray-200 dark:text-gray-50 truncate">
          { task_title }
        </p>
        <div class="flex items-baseline">
          <div class="text-sm leading-2 font-sans text-gray-100 dark:text-gray-300">
            { task_description }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>