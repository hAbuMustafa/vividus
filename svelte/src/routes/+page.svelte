<script>
  import Abbr from '$lib/components/Abbr.svelte';
  import Ayah from '$lib/components/Ayah.svelte';
  import Component from '$lib/components/docs/ComponentWrapper.svelte';
  import RadialFlickMenu from '$lib/components/RadialFlickMenu.svelte';
  import Sparkles from '$lib/components/Sparkles.svelte';
</script>

<h2>
  <Sparkles>
    Components Of VIVIDUS <img src="/logo-simple.png" alt="vividus logo" width="32" />
  </Sparkles>
</h2>

<div class="component-list">
  <Component name="Sparkles" usage="<Sparkles>Whimsical</Sparkles>">
    {#snippet Result()}
      <Sparkles>Whimsical</Sparkles>
    {/snippet}
  </Component>

  <Component
    name="RadialFlickMenu"
    usage={`<RadialFlickMenu 
      options={[
        {title:'home', action:()=>{alert('home')}},
        {title:'about', action:()=>console.log('about')},
        {title:'login', action:()=>alert('login')}
        ]}
        />`}
  >
    {#snippet Result()}
      <RadialFlickMenu
        options={[
          {
            title: 'home',
            action: () => {
              alert('home');
            },
          },
          { title: 'about', action: () => console.log('about') },
          { title: 'login', action: () => alert('login') },
        ]}
      />
    {/snippet}
    {#snippet Attrs()}
      <li class="optional">options: MenuItem[]</li>
      <li class="optional">size: number</li>
      <li class="optional">itemThickness: number</li>
      <li class="optional">showBorder: boolean</li>
      <li class="optional">borderColor: string</li>
      <li class="optional">menuItemColor: string</li>
      <li class="optional">dismissButtonColor: string</li>
    {/snippet}
  </Component>

  <Component
    name="Abbr"
    usage={`<Abbr title="[m]essenger [R]ibo-[N]ucleic [A]cid" styles="color:red;" />`}
  >
    {#snippet Result()}
      <Abbr title="[m]essenger [R]ibo-[N]ucleic [A]cid" styles="color:red;" />
    {/snippet}
    {#snippet Attrs()}
      <li>title: string</li>
      <li class="optional">styles: string</li>
      <li class="optional">partStyles: string</li>
      <li class="optional">segmentStyles: string</li>
      <li class="optional">useTitle: boolean</li>
      <li class="optional">useTransition: boolean</li>
    {/snippet}
  </Component>

  <Component
    name="Ayah"
    usage={`<Ayah number="11:2" showLink={true} />
  
<Ayah number="11:2" showReference={false} />

<Ayah number="11:2" showNumbers={false} />

<Ayah number="112" />

<Ayah number="112:2-114:2" />
`}
  >
    {#snippet Result()}
      <Ayah number="11:2" showLink={true} />
      <hr />
      <Ayah number="11:2" showReference={false} />
      <hr />
      <Ayah number="11:2" showNumbers={false} />
      <hr />
      <Ayah number="112" />
      <hr />
      <Ayah number="112:2-114:2" />
    {/snippet}
    {#snippet Attrs()}
      <li>number: string</li>
      <li class="optional">styles: string</li>
      <li class="optional">showNumbers: boolean</li>
      <li class="optional">showReference: boolean</li>
      <li class="optional">showLink: boolean</li>
    {/snippet}
  </Component>
</div>

<style>
  h2 {
    text-align: center;
    background-color: lightgray;
    border-radius: 8px;
    width: 80%;
    margin-inline: auto;
  }

  .component-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  hr {
    border: 1px solid black;
    width: 100%;
  }
</style>
