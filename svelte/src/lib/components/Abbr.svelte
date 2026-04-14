<script lang="ts">
  interface Props {
    title: string;
    styles?: string;
    partStyles?: string;
    segmentStyles?: string;
    useTitle?: boolean;
    useTransition?: boolean;
  }

  let {
    title,
    styles = "",
    partStyles = "",
    segmentStyles = "",
    useTitle = true,
    useTransition = true,
  }: Props = $props();

  const cleanTitle = $derived(title.replace(/[\[\]]/g, ""));
  const shift = $derived(title.charAt(0) !== "[");

  const segments = $derived(title.match(/[^\[\]]+/g));
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

<style>
  abbr {
    interpolate-size: allow-keywords;
    text-decoration: none;

    @supports not (interpolate-size: allow-keywords) {
      font-family: monospace;
    }
  }

  abbr span {
    vertical-align: text-bottom;
  }

  abbr .rest {
    display: inline-block;
    overflow-x: hidden;

    width: 0;
  }

  abbr.useTransition .rest {
    @media (prefers-reduced-motion: no-preference) {
      transition: width var(--duration, 0.7s) var(--easing, ease-in-out)
        var(--delay, 0s);
    }
  }

  abbr:is(:hover, :active) .rest {
    width: auto;

    @supports not (interpolate-size: allow-keywords) {
      width: var(--full-width);
    }
  }
</style>
