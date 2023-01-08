<script lang="ts">
  export let size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"  | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" = "base";
  export let font: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" = "normal";
  export let align: "left" | "center" | "right" | "justify" | "start" | "end" = "center";
  export let color: string = "text-gray-900 dark:text-gray-400";
</script>

<p class="text-{size} font-{font} text-{align} {color}">
  <slot></slot>
</p>