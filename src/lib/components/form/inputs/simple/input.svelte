<script lang="ts">
  import clsx from "clsx";
  export let value: string;

  export let placeholder: string = "Enter your message";
  export let disabled: boolean = false;
  export let type: "text" | "password" | "email" = "text";

  export let id: string | undefined = undefined;
</script>

<input disabled={disabled} type={type} name="email" id={id} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={value} placeholder={placeholder}>