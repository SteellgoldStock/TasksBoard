<script lang="ts">
  import dayjs from 'dayjs';
  import type { TaskDetailsProps } from './TaskDetails';
  import { removeClasses, addClasses } from '$lib/utils/Classes';
    import clsx from 'clsx';
    import { Text } from '../text';
  
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
        <Check size={19} color="white" />
      </div>
      <Text size="sm" font="medium" align="left" color="text-default dark:text-dark">{ props.taskTitle }</Text>
    </div>
    <div class="mt-3">
      <Text size="base" font="normal" align="left" color="text-gray-300">{ props.taskContent }</Text>
    </div>
  </div>
</div>