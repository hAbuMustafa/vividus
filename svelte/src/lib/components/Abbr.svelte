<script lang="ts">
  export let title: string;
  export let styles: string = '';
  export let useTitle: boolean = true;
  export let useTransition: boolean = true;

  const cleanTitle = title.replace(/[\[\]]/g, '');
  const shift = title.charAt(0) !== '[';

  const segments = title.match(/[^\[\]]+/g)!;
</script>

<abbr
  title={useTitle ? cleanTitle : null}
  aria-label={cleanTitle.toLowerCase()}
  style={styles ?? null}
  class:useTransition
>
  {#each segments as segment, i}
    {#if shift}
      {#if i % 2}
        {segment}
      {:else}
        <span class="rest" style:--full-width="{segment.length}ch">{segment}</span>
      {/if}
    {:else if !shift}
      {#if i % 2}
        <span class="rest" style:--full-width="{segment.length}ch">{segment}</span>
      {:else}
        {segment}
      {/if}
    {/if}
  {/each}
</abbr>

<style>
  abbr {
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
  }

  abbr .rest {
    display: inline-block;
    overflow-x: hidden;
    vertical-align: bottom;
    width: 0;
  }

  abbr.useTransition .rest {
    @media (prefers-reduced-motion: no-preference) {
      transition: width var(--duration, 0.7s) var(--easing, ease-in-out) var(--delay, 0s);
    }
  }

  abbr:is(:hover, :active) .rest {
    width: var(--full-width);
  }
</style>
