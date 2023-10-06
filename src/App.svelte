<script>
  import Nav from "./components/Nav.svelte";
  import AboutMe from "./components/AboutMe.svelte";
</script>

<Nav />
<main class=" snap-y snap-proximity overflow-y-scroll h-screen scroll-smooth">
  <div class="snap-start">
    <AboutMe />
  </div>
  <div class="snap-none">
    <AboutMe />
    <AboutMe />
    <AboutMe />
    <AboutMe />
  </div>
</main>

