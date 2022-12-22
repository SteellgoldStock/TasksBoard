<script lang="ts">
  import type { TaskDetailsProps } from './TaskDetails';
  import dayjs from 'dayjs';
  import { Tag } from '../tag';
  
  export let props : TaskDetailsProps;

  let date = dayjs(props.addedAt).format('DD/MM/YYYY');
  let hour = dayjs(props.addedAt).format('HH');
  let minute = dayjs(props.addedAt).format('mm');

  function changeColor() {
    let element = document.getElementsByClassName(props.identifier)[0];

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

<div class="break-inside-avoid mb-3 border border-gray-500 bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
  <div class="px-4 py-5 sm:p-6 md:p-4">
    <div class="flex items-center gap-3">
      <div class="{props.identifier} flex-shrink-0 bg-green-500 rounded-md p-3 hover:bg-green-400 hover:transition-all duration-500" on:click={changeColor} on:keypress={changeColor}>
        <svg class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l4 4L19 7" />
        </svg>
      </div>
      <p class="text-sm leading-5 font-medium text-gray-200 dark:text-gray-50 truncate">{ props.title }</p>
    </div>
    <p class="text-gray-300 mt-3">{ props.description }</p>
    <div class="flex mt-2">
      <Tag type="default">Ajouté le { date } à { hour }h{ minute }m</Tag>
    </div>
  </div>
</div>