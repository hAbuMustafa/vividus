<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    name: string;
    usage: string;
    Result: Snippet;
    Attrs?: Snippet;
  }

  let { name, usage, Result, Attrs }: Props = $props();
</script>

<div class="component-item">
  <h2>{name}</h2>

  <h3>Usage:</h3>
  <pre>
{usage}
  </pre>

  <h3>Result:</h3>
  <div class="result">
    {@render Result()}
  </div>

  <h3>Supported Attributes:</h3>
  <ul class="attributes">
    {#if Attrs}
      {@render Attrs()}
    {:else}
      No Attributes
    {/if}
  </ul>
</div>

<style>
  .component-item {
    padding: 1rem;
    width: 55%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    > div,
    pre {
      display: grid;
      place-items: center;
    }
  }

  h2 {
    margin-block: 0;
    text-align: center;
  }

  pre {
    color: crimson;
    text-wrap: wrap;
  }

  pre,
  .result,
  .attributes {
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .attributes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;

    font-family: 'Courier New', Courier, monospace;
    list-style: none;

    > :global(li) {
      display: inline-block;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f5f5f5;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease-in-out;
    }
  }
</style>
