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

<textarea id="message" rows={rows} cols={cols} class="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 {disabled == true ? "bg-gray-600" : ""}" placeholder={placeholder} disabled={disabled} on:change={changeValue}>
</textarea>