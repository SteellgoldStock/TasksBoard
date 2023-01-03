<script lang="ts">
  import { Navbar } from "$lib/components/layout";
  import "/src/app.css";
</script>

<main class="container mx-auto px-2 sm:px-4 py-4">
  <Navbar />
  <div class="container mx-auto sm:px-4 py-4">
    <slot />
  </div>  
</main>