<script>
  import { onMount } from "svelte";
  export let duration = 15;
  export let repeat = 2;
  export let paused = false;
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
  .paused .text {
    animation-play-state: paused;
  }
  @keyframes animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>

<div style="overflow: hidden;">
  <div class="content" class:paused={paused === true}>
    {#each Array(repeat) as _, i}
      <div class="text" style="animation-duration: {duration}s">
        <slot />
      </div>
    {/each}
  </div>
</div>
