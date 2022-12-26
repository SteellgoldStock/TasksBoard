<script lang="ts">
  import { Task } from '$lib/components/task';
  
  export let data : import('./$types').PageData;
  const tasks = JSON.parse(data.props.tasks);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
  {#each tasks as task }
    <Task props={{ title: task.title, description: task.description, identifier: task.id, addedAt: task.addedAt }} />
  {/each}
</div>