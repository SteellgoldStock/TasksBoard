<script lang="ts">
  export let type: "default" | "success" | "danger" | "warning" | "info" = "default";

  let style: string = "";
  switch (type) {
    case "default":
      style = "text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400";
      break;
    case "success":
      style = "text-green-500 bg-green-200 rounded dark:bg-green-700 dark:text-green-100";
      break;
    case "danger":
      style = "text-red-500 bg-red-200 rounded dark:bg-red-700 dark:text-red-100";
      break;
    case "warning":
      style = "text-yellow-500 bg-yellow-200 rounded dark:bg-yellow-400 dark:text-gray-50";
      break;
    case "info":
      style = "text-blue-500 bg-blue-200 rounded dark:bg-blue-700 dark:text-blue-100";
      break;
  }
</script>

<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium {style}">
  <slot></slot>
</span>