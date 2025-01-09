<script>
  import Abbr from '$lib/components/Abbr.svelte';
  import Ayah from '$lib/components/Ayah.svelte';
  import RadialFlickMenu from '$lib/components/RadialFlickMenu.svelte';
  import Sparkles from '$lib/components/Sparkles.svelte';
</script>

<h2>
  <Sparkles>
    Components Of VIVIDUS <img src="/logo-simple.png" alt="vividus logo" width="32" />
  </Sparkles>
</h2>

<div class="component-list">
  <div class="component-item">
    <Sparkles>Whimsical</Sparkles>
  </div>

  <div class="component-item">
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
        {
          action: () => {
            console.log('hi');
          },
          title: 'hi',
        },
      ]}
    />
  </div>

  <div class="component-item">
    <Abbr title="[m]essenger [R]ibo-[N]ucleic [A]cid" styles="color:red;" />
  </div>

  <div class="component-item" dir="rtl">
    <Ayah number="112:2-114:2" showLink={true} />
  </div>
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

  .component-item {
    padding: 1rem;
    width: 55%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    display: grid;
  }

  .component-item > :global(*) {
    place-self: center;
  }
</style>
