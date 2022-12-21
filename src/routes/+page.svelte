<script lang="ts">
	let tasks = [
		{ title: 'Faire mes devoirs', description: "ptdr", id: 'faire-mes-devoirs' },
		{ title: 'Manger', description: "Aller au macdo", id: 'manger' },
		{ title: 'Dormir', description: 'Dormir dans mon lit douillet', id: 'dormir' }
	];

  import { Task } from "$lib/components/task";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
  {#each tasks as task}
    <Task task_title={task.title} task_description={task.description} task_id={task.id} />
  {/each}
</div>