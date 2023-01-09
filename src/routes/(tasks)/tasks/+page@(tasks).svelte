<script lang="ts">
  import { Input } from '$lib/components/form/inputs/simple';
  import { TextArea } from '$lib/components/form/inputs/textarea';
  import { Task } from '$lib/components/layout/task';

  let newTaskTitle: string;
  let newTaskContent: string;
  
  export let data : import('./$types').PageData;
  const tasks = JSON.parse(data.tasks);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3"> 
  <div class="mb-3 border-2 border-dashed border-default-light-border bg-default-secondary rounded-lg shadow-lg dark:bg-dark-secondary dark:border-gray-700 hover:border-default-light-border-hover hover:transition-all duration-500">
    <div class="px-4 py-5 sm:p-6 md:p-4">
      <div class="flex items-center gap-3">
        <Input bind:value={newTaskTitle} placeholder="Titre de la tâche" />
      </div>
      <div class="mt-3">
        <TextArea bind:value={newTaskContent} placeholder="Description de la tâche" />
      </div>
      <div class="mt-3">
        <button type="button" class="px-3 py-2 w-full text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none">Créer la tâche</button>
      </div>
    </div>
  </div>

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