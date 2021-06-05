<script>
  import { onMount } from "svelte";

  export let duration = 15;
  export let repeat = 2;
  export let paused = false;
  export let pauseOnHover = false;
  export let direction = "left";

  let hovered = false;

  onMount(async () => {
    const container = document.querySelector("#container");

    container.onmouseover  = () => { hovered = true  }
    container.onmouseleave = () => { hovered = false }
  })
</script>

<style>
  .content {
    width: 100000px;
  }
  .text{
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .dir-left {
    animation-name: animation-left;
    float: left;
  }
  .dir-right {
    animation-name: animation-right;
    float: right;
  }
  .paused .text {
    animation-play-state: paused;
  }
  @keyframes animation-left {
    100% {
      transform: translateX(-100%);
    }
  }
   @keyframes animation-right {
    100% {
      transform: translateX(100%);
    }
  }
</style>

<div style="overflow: hidden;">
  <div class="content" class:paused={paused || (pauseOnHover && hovered)}>
    {#each Array(repeat) as _, i}
      <div class="text {direction === "left" ? "dir-left" : "dir-right"}" style="animation-duration: {duration}s">
        <slot />
      </div>
    {/each}
  </div>
</div>
