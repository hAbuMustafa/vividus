<script>
  import Abbr from '$lib/components/Abbr.svelte';
  import Ayah from '$lib/components/Ayah.svelte';
  import RadialFlickMenu from '$lib/components/RadialFlickMenu.svelte';
  import Sparkles from '$lib/components/Sparkles.svelte';
</script>

<h2>Components</h2>
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
    قال الله تعالى:
    <Ayah number="2:280-282" showLink={true} /> صدق الله العظيم
  </div>
</div>

<style>
  h2 {
    text-align: center;
  }

  .component-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .component-item {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }
</style>
