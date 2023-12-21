<script lang="ts">
  export let data: any[][];
  export let caption: string | undefined = '';
  export let useHeader: boolean = true;
  export let headerRows: typeof useHeader extends true ? number : 0 = 1;
  export let footer: string | string[] | undefined = '';
</script>

<table>
  {#if caption}
    <caption>{caption}</caption>
  {/if}

  {#if useHeader}
    <thead>
      {#each data as row, i}
        {#if i < headerRows}
          <tr>
            {#each row as columnName, ii}
              <th>{columnName}</th>
            {/each}
          </tr>
        {/if}
      {/each}
    </thead>
  {/if}

  <tbody>
    {#each data as row, i}
      {#if i >= headerRows}
        <tr>
          {#each row as td, ii}
            <td>{td}</td>
          {/each}
        </tr>
      {/if}
    {/each}
  </tbody>

  {#if footer}
    <tfoot>{footer}</tfoot>
  {/if}
</table>
