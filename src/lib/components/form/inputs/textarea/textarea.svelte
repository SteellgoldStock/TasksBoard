<script lang="ts">
  export let value: string;

  export let placeholder: string = "Enter your message";
  export let rows: number = 5;
  export let cols: number = 30;
  export let disabled: boolean = false;

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<textarea id="message" rows={rows} cols={cols} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} disabled={disabled} on:change={changeValue}>
</textarea>