<script lang="ts">
  export let title: string;
  export let styles = '';
  export let partStyles = '';
  export let segmentStyles = '';
  export let useTitle = true;
  export let useTransition = true;

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
        <span class="part" style={partStyles ?? null}>{segment}</span>
      {:else}
        <span
          class="rest"
          style:--full-width="{segment.length}ch"
          style={segmentStyles ?? null}
        >
          {segment}
        </span>
      {/if}
    {:else if !shift}
      {#if i % 2}
        <span
          class="rest"
          style:--full-width="{segment.length}ch"
          style={segmentStyles ?? null}
        >
          {segment}
        </span>
      {:else}
        <span class="part" style={partStyles ?? null}>{segment}</span>
      {/if}
    {/if}
  {/each}
</abbr>

<style lang="scss">
  abbr {
    font-family: monospace;
    text-decoration: none;
  }

  abbr .part {
    vertical-align: text-bottom;
  }

  abbr .rest {
    display: inline-block;
    overflow-x: hidden;
    vertical-align: text-bottom;

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
