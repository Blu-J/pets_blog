<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
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
