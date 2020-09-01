<script>
  import { onMount } from "svelte";

  export let duration = 15;
  export let repeat = 2;
  export let paused = false;
  export let pauseOnHover = false;

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
  .text {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
  }
  .paused {
    animation-play-state: paused;
  }
  @keyframes animation {
    100% {
      transform: translateX(-100%);
    }
  }
</style>

<div style="overflow: hidden;" id="container">
  <div class="content" class:paused={paused || (pauseOnHover && hovered)}>
    {#each Array(repeat) as _}
      <div class="text" style="animation-duration: {duration}s">
        <slot />
      </div>
    {/each}
  </div>
</div>
