<script lang="ts">
  import Counter from '@/components/Counter.svelte';
  const title = 'Hello Svelte!';
</script>

<main>
  <div>
    <h1 class="text-4xl font-bold dark:text-white text-slate-800 ">{title}</h1>
    <div class="my-6">
      <Counter {title} />
    </div>
  </div>
</main>

<style lang="scss">
  main {
    @apply h-screen grid place-items-center;

    div {
      @apply text-center;
    }
  }
</style>
