<script lang="ts">
  export let options: any[] = [];

  const itemLength = Math.floor(100 / options.length);
</script>

<div class="wrapper">
  <svg width="50%" height="50%" viewBox="0 0 42 42" class="donut">
    {#each options as item, index (index * 12)}
      <circle
        class="donut-segment"
        cx="21"
        cy="21"
        r={100 / (2 * Math.PI)}
        fill="none"
        stroke={`#${index.toString(16)}${index.toString(16)}0000`}
        stroke-width="10"
        stroke-dasharray={`${itemLength} ${100 - itemLength}`}
        stroke-dashoffset={25 -
          itemLength * index -
          ((100 - itemLength * options.length) / options.length) * index}
      />
    {/each}
  </svg>
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    pointer-events: none;

    & circle {
      pointer-events: stroke;

      &:hover {
        stroke: rebeccapurple;
      }
    }
  }
</style>
