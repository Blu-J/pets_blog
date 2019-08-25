<script context="module">
  export async function preload(page, session) {
    const { imageUrl } = page.params;
    const { previous, next, current } = await (await this.fetch(
      `petImage/${imageUrl}.json`
    )).json();
    return { previous, next, current };
  }
</script>

<script>
  export let current;
  export let next;
  export let previous;
</script>

<svelte:head>
  <title>{current}</title>
</svelte:head>

<h1>{current}</h1>
<a rel="prefetch" href="petImage/{previous}">previous </a>
<img src="pets/{current}.jpg" alt="{current}" width="500" />
<a rel="prefetch" href="petImage/{next}">next</a>
