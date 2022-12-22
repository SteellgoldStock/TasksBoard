<script lang="ts">
	let tasks = [
		{ title: 'Built for Error', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, eius.", id: "built-for-error", addedAt: 1671633179722 },
		{ title: 'Secret of the Three-Inch Inspector', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, modi! Quidem temporibus fugit repellat perspiciatis obcaecati non aliquid illum error. Quasi aperiam eveniet quod eligendi quidem doloremque iste cumque atque.", id: "secret-of-the-three-inch-inspector", addedAt: 1671891279722 },
		{ title: 'Sugar and Spice', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus modi cum quo aliquid autem illum deserunt sit qui? Quaerat molestiae asperiores, deleniti omnis distinctio adipisci debitis nam maxime. Cumque sint nemo culpa voluptatum. Libero voluptatibus tenetur necessitatibus tempora quod, sit natus quisquam consectetur beatae, quos odit, qui maxime dolores!", id: "sugar-and-spice", addedAt: 1097789160000 },
		{ title: 'Mister Nice', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore maiores obcaecati deserunt, fugit debitis esse magnam nam alias eos cupiditate!", id: 'mister-nice', addedAt: 1578466980000 },
		{ title: 'Micha Micha', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, assumenda.", id: 'micha-micha', addedAt: 1578466980000 },
		{ title: 'Zoubiyoulou', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error consequuntur id. Qui nobis, cumque dolore ipsam earum sapiente velit accusantium voluptatem molestiae molestias et ab nemo inventore. Possimus, accusamus.", id: 'zoubiyoulou', addedAt: 1578414778500 },
		{ title: 'Pokémon', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laborum veniam necessitatibus non quaerat et ab quod soluta reprehenderit qui facilis? Dolorum, harum voluptatum. Dicta dolorum quasi incidunt labore totam maiores sed magnam, voluptatum delectus architecto consequatur enim sunt?", id: 'pokemon', addedAt: 1578965888700 }
	];

  import { Task } from "$lib/components/task";
</script>

<div class="tasks columns-1 md:columns-2 lg:columns-3 gap-x-3.5">
  {#each tasks as task}
    <Task props={{ title: task.title, description: task.description, identifier: task.id, addedAt: task.addedAt }} />
  {/each}
</div>