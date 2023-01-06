<script lang="ts">
  import dayjs from 'dayjs';
  import type { TaskDetailsProps } from './TaskDetails';
  import { removeClasses, addClasses } from '$lib/utils/Classes';
    import clsx from 'clsx';
  
  export let props : TaskDetailsProps;

  let date = dayjs(props.createdAt).format('DD/MM/YYYY');
  let hour = dayjs(props.createdAt).format('HH');
  let minute = dayjs(props.createdAt).format('mm');
  
  export let completed: boolean = false;
  let isCompletedColor: string = clsx({
    "bg-green-500 hover:bg-green-400": !completed,
    "bg-rose-500 hover:bg-rose-400": completed,
  });

  function completeTask() {
    // TODO: Update task status with API

    // @ts-ignore
    let element: HTMLElement = document.getElementsByClassName(props.taskIdentifier)[0];

    if (element.classList.contains("bg-green-500") && element.classList.contains("hover:bg-green-400")) {
      removeClasses(element, ["bg-green-500", "hover:bg-green-400"]);
      addClasses(element, ["bg-rose-500", "hover:bg-rose-400"]);
      completed = true;
    } else {
      removeClasses(element, ["bg-rose-500", "hover:bg-rose-400"]);
      addClasses(element, ["bg-green-500", "hover:bg-green-400"]);
      completed = false;
    }
  }
</script>

<div class="mb-3 border-2 {completed ? "border-dashed" : ""} border-default-light-border bg-default-secondary rounded-lg shadow-lg dark:bg-dark-secondary dark:border-gray-700 hover:border-default-light-border-hover hover:transition-all duration-500 {completed ? "order-last opacity-30 hover:opacity-60" : ""}">
  <div class="px-4 py-5 sm:p-6 md:p-4">
    <div class="flex items-center gap-3">
      <div class="{props.taskIdentifier} {isCompletedColor} flex-shrink-0 rounded-md p-3 hover:transition-all duration-500" on:click={completeTask} on:keypress={completeTask}>
        <svg class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l4 4L19 7" />
        </svg>
      </div>

      <p class="text-sm leading-5 font-medium text-light dark:text-dark-light truncate">{ props.taskTitle }</p>
    </div>
    <p class="text-gray-300 mt-3">{ props.taskContent }</p>
  </div>
</div>