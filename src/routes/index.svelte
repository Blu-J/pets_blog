<style></style>
<script context="module">
  export async function preload() {
    const pets = await (await this.fetch(`petImage/all.json`)).json();
    return { pets };
  }
</script>

<script>
  export let pets;
</script>

<svelte:head>
  <title>Pets</title>
</svelte:head>

{#each pets as pet}
<a rel="prefetch" href="petImage/{pet}">
  <img src="pets/{pet}.jpg" alt="{pet}" width="250" />
</a>
{/each}
