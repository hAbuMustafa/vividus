<script lang="ts">
  interface ColGroup {
    span?: number;
    style?: string;
  }

  interface tItem {
    content: string | HTMLElement[] | HTMLElement;
    rowspan?: number;
    colspan?: number;
  }

  interface tHeader extends tItem {
    scope: 'row' | 'column';
  }

  type RowContent = HTMLElement | string | tHeader | tItem;

  interface Caption {
    content: string | HTMLElement[] | HTMLElement;
    side:
      | 'top'
      | 'bottom'
      | 'block-start'
      | 'block-end'
      | 'inline-start'
      | 'inline-end'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'revert-layer'
      | 'unset';
  }

  interface TableData {
    caption?: string | Caption;
    colgroup?: ColGroup[] | HTMLTableColElement[];
    thead?: RowContent[][];
    rows: RowContent[][];
    tfoot?: (HTMLElement | string)[][];
  }

  function hasScope(tData: RowContent): tData is tHeader {
    if (typeof tData === 'string') return false;
    return tData.hasOwnProperty('scope');
  }

  function hasContent(dataItem: RowContent): dataItem is tItem {
    return dataItem.hasOwnProperty('content') && typeof dataItem !== 'string';
  }

  export let data: TableData;
</script>

<table>
  {#if data.caption}
    {#if typeof data.caption !== 'string'}
      <caption style:caption-side={data.caption.side}>
        {data.caption.content}
      </caption>
    {:else}
      <caption>
        {data.caption}
      </caption>
    {/if}
  {/if}

  {#if data.colgroup}
    <colgroup>
      {#each data.colgroup as col}
        <col span={col.span} />
      {/each}
    </colgroup>
  {/if}

  {#if data.thead}
    <thead>
      {#each data.thead as tHeadRows}
        <tr>
          {#each tHeadRows as tH}
            <th rowspan={tH.rowspan} colspan={tH.colspan}>
              {#if hasContent(tH)}
                {#if tH.content}
                  {tH.content}
                {:else}
                  {tH}
                {/if}
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </thead>
  {/if}

  <tbody>
    {#each data.rows as tRow}
      <tr>
        {#each tRow as tData}
          {#if hasScope(tData)}
            <th scope={tData.scope}>{tData.content}</th>
          {:else}
            <!-- svelte-ignore -->
            {#if hasContent(tData)}
              <td colspan={tData.colspan} rowspan={tData.rowspan}>{tData.content}</td>
            {:else}
              <td>{tData}</td>
            {/if}
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>

  {#if data.tfoot}
    <tfoot>
      {#each data.tfoot as tFootRow}
        <tr>
          {#each tFootRow as tFootData}
            {#if hasScope(tFootData)}
              <th scope={tFootData.scope}>{tFootData.content}</th>
            {:else}
              <td>{tFootData}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tfoot>
  {/if}
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #000;

    & tr,
    td,
    th {
      border: 1px solid #000;
    }
  }

  thead,
  th[scope] {
    background-color: aliceblue;
  }

  tfoot {
    background-color: darkcyan !important;
  }
</style>
