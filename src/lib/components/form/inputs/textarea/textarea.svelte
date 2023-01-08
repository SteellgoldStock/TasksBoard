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

<textarea id="message" rows={rows} cols={cols} max class="{disabled == true ? "dark:bg-gray-800 border-gray-600" : ""} block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder={placeholder} disabled={disabled} on:change={changeValue}>
</textarea>