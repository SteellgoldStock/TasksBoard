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
  <label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
{/if}

<input disabled={disabled} type={type} name="email" id={id} class="
bg-gray-50 border
border-gray-300
text-gray-900
sm:text-sm
rounded-lg
focus:ring-gray-600
focus:border-gray-600
block
w-full
p-2.5
dark:bg-gray-700
dark:border-gray-600
dark:placeholder-gray-400
dark:text-white
dark:focus:ring-blue-500
dark:focus:border-blue-500
{disabled == true ? "bg-gray-300 dark:bg-gray-600" : ""}
" on:input={changeValue} placeholder={placeholder} />