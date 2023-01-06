<script lang="ts">
  import clsx from "clsx";

  export let value: string;

  export let placeholder: string = "Enter your message";
  export let disabled: boolean = false;
  export let size: "large" | "default" | "small" = "default";
  export let defaultValue: string = "";
  
  const sizeClass = clsx({
    "block w-full p-4 sm:text-md": size === "large",
    "block w-full p-2.5 text-sm": size === "default",
    "block w-full p-2 sm:text-xs": size === "small",
  });

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<input type="text" class="{sizeClass} text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" on:change={changeValue} value={defaultValue}>