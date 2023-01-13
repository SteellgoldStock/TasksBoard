<script lang="ts">
  import clsx from "clsx";
  export let value: string;

  export let placeholder: string = "Enter your message";
  export let disabled: boolean = false;
  export let type: "text" | "password" | "email" = "text";
  export let label: string | undefined = undefined;

  let id: string = Math.random().toString(2).substring(1);

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

{#if label}
  <label for={id} class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
{/if}

<input disabled={disabled} type={type} name="email" id={id} class="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 {disabled == true ? "bg-gray-600" : ""}" on:input={changeValue} placeholder={placeholder} />