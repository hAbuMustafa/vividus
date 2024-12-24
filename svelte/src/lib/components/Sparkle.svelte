<script lang="ts">
  export let color, size, style;
</script>

<span {style}>
  <svg width={size} height={size} viewBox="0 0 68 68" fill="none">
    <path
      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
      fill={color}
    />
  </svg>
</span>

<style>
  span {
    position: absolute;
    display: block;
    z-index: 1;
  }

  @media (prefers-reduced-motion: no-preference) {
    span {
      animation: grow-and-shrink 700ms forwards;
    }
  }

  svg {
    display: block;
  }

  @media (prefers-reduced-motion: no-preference) {
    svg {
      animation: spin 1000ms linear;
    }
  }

  @keyframes grow-and-shrink {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(180deg);
    }
  }
</style>
