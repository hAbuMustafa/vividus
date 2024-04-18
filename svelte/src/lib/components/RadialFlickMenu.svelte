<script lang="ts">
  export let options: any[] = [];

  export let size = 120;
  export let itemThickness = 40;
  export let showBorder = false; // todo: use thick border by default
  export let borderColor = '#000000';
  export let menuItemColor = 'green'; // xxx: use system accent color by default
  export let dismissButtonColor = 'red';

  const [menuRadius, menuCenter] = [size / 2, size / 2];

  const itemPercent = 1 / options.length;

  const menuId = crypto.randomUUID();

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    return `L ${centerX + radius * Math.cos(((angleInDegrees - 90) * Math.PI) / 180.0)} ${centerY + radius * Math.sin(((angleInDegrees - 90) * Math.PI) / 180.0)}`;
  }

  function getArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    clockwise: 0 | 1 = 1,
    largArc?: 0 | 1
  ) {
    const largeArcFlag = largArc ?? endAngle - startAngle <= 180 ? '0' : '1';

    const arc = `A ${radius} ${radius} 0 ${largeArcFlag} ${clockwise} ${x + radius * Math.cos(((startAngle - 90) * Math.PI) / 180.0)} ${y + radius * Math.sin(((startAngle - 90) * Math.PI) / 180.0)}`;

    // console.log(arc);

    return arc;
  }

  // todo: add interaction to dismiss menu and fire action for every button (mouseup)
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {size} {size}"
  fill="none"
  style:--dismiss-button-color={dismissButtonColor}
  style:--menu-item-color={menuItemColor}
  xmlns="http://www.w3.org/2000/svg"
  style="overflow: visible"
>
  <circle
    cx={menuCenter}
    cy={menuCenter}
    r={menuRadius - itemThickness - 1}
    class="radial-menu-item"
    style:--dismiss-button-color={dismissButtonColor}
    id="radial-menu-{menuId}-dismiss"
    role="menuitem"
    tabindex="0"
  />
  <!-- <text fill="white" font-size="2em">
    <textPath href="#radial-menu-{menuId}-dismiss" text-anchor="middle" method="align">
      X
    </textPath>
  </text> -->
  <text x="50%" y="50%" text-anchor="middle" stroke="white" dy=".4em" font-family="Arial">
    X
  </text>
  {#each options as item, i (i)}
    <g>
      <path
        class="radial-menu-item"
        style="rotate: {i * itemPercent * 360}deg; transform-origin: 50% 50%;"
        style:--menu-item-color={menuItemColor}
        stroke={showBorder ? borderColor : null}
        id="radia-menu-item-{i}"
        role="menuitem"
        tabindex="0"
        d="
        M {menuCenter} 0
        {getArc(menuCenter, menuCenter, menuRadius, itemPercent * 360, 0)} 
        {polarToCartesian(
          menuCenter,
          menuCenter,
          menuRadius - itemThickness,
          itemPercent * 360
        )}
        {getArc(
          menuCenter,
          menuCenter,
          menuRadius - itemThickness,
          0,
          -itemPercent * 360,
          0
        )}
        Z
      "
      />
      <!-- todo: fix text position -->
      <text
        x={menuCenter +
          (menuRadius - itemThickness / 2) *
            Math.cos((((i * itemPercent * 360) / 2 - 90) * Math.PI) / 180.0)}
        y={menuCenter +
          (menuRadius - itemThickness / 2) *
            Math.sin((((i * itemPercent * 360) / 2 - 90) * Math.PI) / 180.0)}
        font-size="1em"
        fill="black"
      >
        {item.title}
      </text>
    </g>
  {/each}
  <!-- <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2 - itemThickness}
    stroke="orange"
    stroke-dasharray="5 3 3 4"
  />
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2}
    stroke="orange"
    stroke-dasharray="5 3 3 4"
  /> -->
</svg>

<style>
  .radial-menu-item {
    transform-origin: var(--transform-origin, 50% 50%);
    transition: var(--highlight-transition, all 0.5s ease-in-out);
    fill: var(--menu-item-color);
  }

  .radial-menu-item[id*='-dismiss'] {
    fill: var(--dismiss-button-color);
  }

  .radial-menu-item:hover,
  .radial-menu-item:focus {
    transform: var(--highlight-transform);
  }

  .radial-menu-item:hover,
  .radial-menu-item:focus {
    fill: var(--highlight-fill, lightgray);
  }

  text {
    pointer-events: none;
  }
</style>
