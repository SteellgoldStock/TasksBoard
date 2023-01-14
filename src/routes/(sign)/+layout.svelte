<script lang="ts">
  import { Navbar } from "$lib/components/layout/navbar";
  import "/src/app.css";
</script>

<main class="container mx-auto px-2 sm:px-4 py-4">
  <Navbar />
  <div class="container mx-auto sm:px-4 py-4">
    <div class="flex flex-col items-center md:h-screen lg:py-0">
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <slot />
      </div>
    </div>
  </div>  
</main>