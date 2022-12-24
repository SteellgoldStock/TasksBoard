<script lang="ts">
  import "../app.css";
  import { Navbar } from "$lib/components/layouts/navbar";
</script>

<main class="bg-gradient-to-b from-[#111827] to-black">
  <Navbar />
  <slot />
</main>