<script lang="ts">
  export let title: string;
  export let styles: string = '';
  export let easing: string = 'ease-in-out';
  export let duration: string = '0.7';
  export let delay: string = '0';
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
  style:--easing={easing}
  style:--duration="{duration}s"
  style:--delay="{delay}s"
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
      transition: width var(--duration) var(--easing) var(--delay);
    }
  }

  abbr:is(:hover, :active) .rest {
    width: var(--full-width);
  }
</style>
