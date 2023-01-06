<script>
    import { Input } from "$lib/components/form/inputs/simple";

    let value = "Hello world";
</script>
<h1>Default page for /test</h1>

<div class="flex justify-center">
    <div class="w-1/2">
        <h1 class="text-white">{value}</h1>
        <Input bind:value={value} />
    </div>
</div>