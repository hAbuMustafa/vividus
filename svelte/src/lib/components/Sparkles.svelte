<!-- This component is totally a recreation of Josh W. Comeau's Sparkle component (found at https://www.joshwcomeau.com/react/animated-sparkles-in-react/) for a Svelte Version -->

<script lang="ts">
  import { prefersReducedMotion } from '$lib/utils/a11y-helpers.js';
  import { randomInterval, range } from '$lib/utils/helpers.js';
  import { DEFAULT_COLOR, generateSparkle } from '$lib/utils/sparkles-helpers.js';
  import Sparkle from './Sparkle.svelte';

  export let color = DEFAULT_COLOR;

  const userPrefersReducedMotion = prefersReducedMotion();

  let sparkles = [...range(4).map(() => generateSparkle(color))];

  randomInterval(
    () => {
      const now = Date.now();

      const sparkle = generateSparkle(color);

      sparkles = [...sparkles, sparkle];
      sparkles = [
        ...sparkles.filter((sp) => {
          const delta = now - sp.createdAt;
          return delta < 750;
        }),
      ];
    },
    userPrefersReducedMotion ? null : 50,
    userPrefersReducedMotion ? null : 500
  );
</script>

<span>
  {#each sparkles as sparkle (sparkle.id)}
    <Sparkle color={sparkle.color} size={sparkle.size} style={sparkle.style} />
  {/each}
  <strong>
    <slot />
  </strong>
</span>

<style>
  span {
    position: relative;
    display: inline-block;
  }

  strong {
    position: relative;
    font-weight: bold;
  }
</style>
