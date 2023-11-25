# `@vividus/svelte/abbr`

This component uses the native `abbr` tag to render expandable abbreviations in Svelte. It's as easy to use as just enclose the abbreviation letters in square brackets, and it'll do the rest for you:

```svelte
import {Abbr} from "@vividus/svelte";
...
<Abbr title="[m]essenger [R]ibo-[N]ucleic [A]cid" />
```

This is to make it more human readable, and to retail the case state and hyphens or other stylizing additions. I mean, in contrary to extracting acronyms as the upper cased letters only, which will not work with abbreviations like "mRNA".

## Customization

You can customize bits of the component's behavior and looks by passing in props.

### Customize Transition

By default the transition duration is `0.7` seconds, and the easing function is `ease-in-out`. You can customize these by passing in the `duration`, and `easing` props.

```svelte
<Abbr title="[W]orld [H]ealth [O]rganization" duration="2" easing="ease-out" />
<!-- OR -->
<Abbr title="[W]orld [H]ealth [O]rganization" duration="2" easing="cubic-bezier(0.785, 0.135, 0.15, 0.86)" />
```

Remember, the supplied duration will be interpreted in **seconds**.

### Customize Appearance

You can override any styles by passing in the `styles` prop.

```svelte
<Abbr title="e[X]tensible [M]arkup [L]anguage" styles="color:red;font-weight:bold;" />
```

Due the current limitations, the `abbr` tag uses a monospace font list to function properly:

```CSS
font-family: 'Courier New', Courier, monospace;
```

Make sure to override the fonts with the ones you want to use in your `styles` prop.

# Known issues

- The need for use of a monospace font.
