<script>
  import Abbr from '$lib/components/Abbr.svelte';
  import RadialFlickMenu from '$lib/components/RadialFlickMenu.svelte';
  import Sparkles from '$lib/components/Sparkles.svelte';
</script>

<h2>Components</h2>
<ul>
  <li>
    <Sparkles>Whimsical</Sparkles>
  </li>

  <li>
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
  </li>

  <li>
    <Abbr title="[m]essenger [R]ibo-[N]ucleic [A]cid" styles="color:red;" />
  </li>
</ul>
