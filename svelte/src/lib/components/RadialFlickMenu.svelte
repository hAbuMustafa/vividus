<script lang="ts">
  export let options: any[] = [];

  export let size = 120;
  export let itemThickness = 40;
  export let showBorder = false;
  export let borderColor = '#000000';

  const [menuRadius, menuCenter] = [size / 2, size / 2];

  const itemPercent = 1 / options.length;

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

    console.log(arc);

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
  {#each options as item, i (i)}
    <g>
      <path
        style="transform-origin: 0 100%;"
        stroke={showBorder ? borderColor : null}
        fill="green"
        id={`rmi-${i}`}
        d="
        M {size / 2} 0
        {getArc(size / 2, size / 2, size / 2, itemPercent * 360, 0)} 
        {polarToCartesian(
          size / 2,
          size / 2,
          size / 2 - itemThickness,
          itemPercent * 360
        )}
        {getArc(size / 2, size / 2, size / 2 - itemThickness, 0, -itemPercent * 360, 0)}
        Z
      "
        role="menuitem"
        tabindex="0"
      />
      <text font-size="2" fill="black">
        <textPath href={`#rmi-${i}`} text-anchor="middle" method="align">
          {item.title}
        </textPath>
      </text>
    </g>
  {/each}
  <circle
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
  />
</svg>
