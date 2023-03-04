<script lang="ts">
  export let title: string = '';

  let count: number = 0;
</script>

<div>
  <button
    class="mb-3 dark:bg-slate-700 bg-slate-400 rounded-lg px-4 py-2 focus:ring"
    on:click={() => count++}
  >
    Counter {count}
  </button>
  <br />
  <p class="mb-2 mt-4">Try to change title prop</p>
  <input
    class="dark:bg-slate-900 px-4 py-2 rounded-lg bg-slate-300"
    placeholder="Try to change title"
    type="text"
    bind:value={title}
  />
  <h3 class="text-xl font-bold mt-4">{title}</h3>
</div>

<style lang="postcss">
  /* global style apply example */
  :global(:root) {
    @apply bg-slate-200 dark:bg-slate-800;
  }
</style>
