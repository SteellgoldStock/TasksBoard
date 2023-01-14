<script lang="ts">
  import dayjs from 'dayjs';
  import type { TaskDetailsProps } from './TaskDetails';
  import { removeClasses, addClasses } from '$lib/utils/Classes';
  import clsx from 'clsx';
  import { Text } from '../text';
  import { Check } from "lucide-svelte"
  
  export let props : TaskDetailsProps;

  let date = dayjs(props.createdAt).format("DD/MM/YYYY à HH:mm");
  
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

<div class="mb-3 border-2 {completed ? "border-dashed" : ""} rounded-lg shadow-lg bg-secondary border-gray-700 hover:border-light-border-hover hover:transition-all duration-500 {completed ? "order-last opacity-30 hover:opacity-60" : ""}">
  <div class="px-4 py-5 sm:p-6 md:p-4">
    <div class="flex items-center gap-3">
      <div class="{props.taskIdentifier} {isCompletedColor} flex-shrink-0 p-2 rounded-md hover:transition-all duration-500" on:click={completeTask} on:keypress={completeTask}>
        <Check size={19} color="white" />
      </div>
      <div>
        <Text size="base" font="medium" align="left" color="text-wg">{ props.taskTitle }</Text>
        <Text size="xs" font="normal" align="left" color="text-gray-300">Le { date }</Text>
      </div>
    </div>
    <div class="mt-3">
      <Text size="base" font="normal" align="left" color="text-gray-300">{ props.taskContent }</Text>
    </div>
  </div>
</div>