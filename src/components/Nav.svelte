<script>
  import "animate.css";
</script>

<nav
  class=" w-full h-fit fixed shadow-xl hidden md:flex justify-center lg:py-1 btm-border-nav bg-l1"
>
  <div
    class="flex py-2 px-1 flex-row gap-2 2xl:gap-6 pl-2 pr-6 items-center w-full xl:w-10/12 2xl:8/12"
  >
    <p class="w-fit font-semibold text-xl text-white">Rowan Kortlandt</p>
    <div class="flex-grow" />
    <p class="btn-nav-primary btn-hover relative">About Me</p>
    <p class="btn-nav-primary btn-hover relative">Work Experience</p>
    <p class="btn-nav-primary btn-hover relative">Technology Skills</p>
    <p class="btn-nav-primary btn-hover relative">References</p>
    <div class="border-l border-sky-950 h-5/6 mx-4" />
    <svg
      viewBox="0 0 16 16"
      class="w-5 h-fit mt-auto mb-auto btn-nav-primary"
      href="https://github.com/Rkortlandt"
      fill="white"
      aria-hidden="true"
      ><path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      /></svg
    >
  </div>
</nav>

<style>
  .btm-border-nav:before {
    content: "";
    overflow: hidden;
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0%;
    bottom: 1%;
    transition: transform;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(
      90deg,
      transparent,
      rgb(0, 72, 105),
      rgb(1, 125, 182),
      transparent
    );
  }
  .btn-hover {
    overflow: hidden;
  }
  .btn-hover:before {
    content: "";
    overflow: hidden;
    height: 1px;
    width: 150%;
    position: absolute;
    left: 0%;
    bottom: 0%;
    transition: transform;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(
      90deg,
      rgb(0, 72, 105),
      rgb(1, 125, 182),
      transparent
    );
    transform: translate(-150%);
  }

  .btn-hover:hover:before {
    transform: translate(0%);
  }
</style>
