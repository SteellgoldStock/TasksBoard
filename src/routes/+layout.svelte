<script lang="ts">
  import "/src/app.css";
  import { Navbar } from "$lib/components/layouts/navbar";
</script>

<main class="bg-gradient-to-b from-[#111827] to-black">
  <Navbar />
  <slot></slot>
</main>