<script lang="ts">
  import { Input } from "$lib/components/form/inputs/simple";
  import { TextArea } from "$lib/components/form/inputs/textarea";
  import { ButtonModal, Modal } from "$lib/components/layout/modals";
    import { Text } from "../text";

  let content: string;
  let title: string;
</script>

<nav class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
      <img src="https://cdn.discordapp.com/attachments/927843710669062204/1055460347282194492/Light_Logo_TaskBoard_128.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
    </a>
    <div class="flex md:order-2">
      <!-- TODO: Add button for connect (with GitHub? or Discord?) -->
      <ButtonModal modalId="newtask-form">Nouvelle tâche</ButtonModal>
    </div>
  </div>
</nav>

<Modal modalId="newtask-form" modalTitle="Nouvelle tâche">
  <div class="p-6 space-y-6">
    <Text size="base" align="left" color="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil, impedit earum saepe est consequatur nesciunt repellendus distinctio eum amet sequi ea animi officia optio. Repellat quae possimus quaerat eos.</Text>
    <Input placeholder="Faire cuir les pates" bind:value={title} />
    <TextArea placeholder="Faire cuir les pates" bind:value={content} />
  </div>
</Modal>