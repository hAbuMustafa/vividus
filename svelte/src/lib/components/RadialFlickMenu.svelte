<script lang="ts">
  export let options: any[] = [];

  export let size = 120;
  export let itemThickness = 40;
  export let showBorder = false;
  export let borderColor = '#000000';

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
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {size} {size}"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="overflow: visible"
>
  <circle
    cx={menuCenter}
    cy={menuCenter}
    r={menuRadius - itemThickness - 1}
    class="radial-menu-item"
    fill="red"
    id="radia-menu-{menuId}-dismiss"
    role="menuitem"
    tabindex="0"
  />
  <text fill="white" font-size="2em">
    <textPath href="#radia-menu-{menuId}-dismiss" text-anchor="middle" method="align">
      X
    </textPath>
  </text>
  {#each options as item, i (i)}
    <g class="radial-menu-item">
      <path
        style="rotate: {i * itemPercent * 360}deg; transform-origin: 50% 50%;"
        stroke={showBorder ? borderColor : null}
        fill="green"
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
      <text font-size="2" fill="black">
        <textPath href="radia-menu-item-{i}" text-anchor="middle" method="align">
          {item.title}
        </textPath>
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
    transform-origin: 50% 50%;
    transition: all 0.5s ease-in-out;
  }

  .radial-menu-item:hover,
  .radial-menu-item:focus {
    transform: scale(1.1);
    z-index: 1;
  }
</style>
