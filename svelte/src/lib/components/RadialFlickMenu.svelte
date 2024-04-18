<script lang="ts">
  export let options: any[] = [];

  export let size = 120;
  export let itemThickness = 40;
  export let showBorder = true;
  export let borderColor = '#000000';

  const itemPercent = 1 / options.length;

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function getArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');

    const p = `A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`;

    return p;
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
        style="transform-origin: 0 100%; color: black;"
        stroke={showBorder ? borderColor : null}
        fill="green"
        id={`rmi-${i}`}
        d="
        M {size / 2} 0
        {getArc(size / 2, size / 2, size / 2, 0, 360 * itemPercent)}
        l -{itemThickness} 0
        M {size / 2} {itemThickness}
        {getArc(size / 2, size / 2, size / 2 - itemThickness, 0, 360 * itemPercent)}
        Z
      "
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
    stroke="yellow"
    stroke-dasharray="5 3 3 4"
  />
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2}
    stroke="yellow"
    stroke-dasharray="5 3 3 4"
  />
</svg>

<!-- <script lang="ts">
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
</style> -->
