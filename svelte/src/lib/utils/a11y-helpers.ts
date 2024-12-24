import { browser } from '$app/environment';

export function prefersReducedMotion() {
  if (!browser) return;

  const mediaQueryList = window.matchMedia('(prefers-reduced-motion: no-preference)');
  return !mediaQueryList.matches;
}
