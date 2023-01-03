<script lang="ts">
  import { Task } from '$lib/components/task';
  
  export let data : import('./$types').PageData;
  const tasks = JSON.parse(data.tasks);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3"> 
  {#each tasks as task }
    <Task props={{ 
      taskIdentifier: task.taskIdentifier,
      taskTitle: task.taskTitle,
      taskContent: task.taskContent,
      taskAuthor: task.taskAuthor,
      isCompleted: task.isCompleted ?? false,
      completedAt: task.completedAt ?? null,
      createdAt: task.createdAt
     }} />
  {/each}
</div>