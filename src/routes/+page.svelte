<script lang="ts">
	let tasks = [
		{ title: 'Faire mes devoirs az az France', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, libero nobis dolorum nulla repellat eos tempora voluptatibus et? Minima, saepe.", id: 'faire-mes-devoirs', addedAt: 1671633179722 },
		{ title: 'Manger', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum animi eos explicabo voluptatibus rem qui nulla ea ratione tempora aspernatur repudiandae omnis a ad sunt corporis, natus exercitationem maiores.", id: 'manger', addedAt: 1671891279722 },
		{ title: 'Dormir', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vero voluptatem, fugit velit sed pariatur ea est sunt accusamus blanditiis unde saepe, nemo laborum necessitatibus delectus culpa totam doloremque eligendi voluptate ratione nisi. Sapiente debitis atque quos doloremque, delectus commodi. Voluptatibus, asperiores quod libero iusto nulla aut possimus obcaecati. Eos!', id: 'dormir', addedAt: 1097789160000 },
		{ title: 'Développer', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis culpa magni!', id: 'developper', addedAt: 1578466980000 }
	];

  import { Task } from "$lib/components/task";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
  {#each tasks as task}
    <Task props={
      {
        title: task.title,
        description: task.description,
        identifier: task.id,
        addedAt: task.addedAt
      }
    } />
  {/each}
</div>