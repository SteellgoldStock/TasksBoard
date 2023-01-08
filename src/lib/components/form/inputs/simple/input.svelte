<script lang="ts">
  import clsx from "clsx";

  export let value: string;

  export let placeholder: string = "Enter your message";
  export let disabled: boolean = false;
  export let size: "large" | "default" | "small" = "default";
  
  const sizeClass = clsx({
    "block w-full p-4 sm:text-md": size === "large",
    "block w-full p-2.5 text-sm": size === "default",
    "block w-full p-2 sm:text-xs": size === "small",
  });
</script>

<input type="text" disabled={disabled} placeholder={placeholder} class="{sizeClass} border rounded-lg sm:text-md bg-gray-700 border-gray-600 placeholder-gray-400 text-white" bind:value={value}>