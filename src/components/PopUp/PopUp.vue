<template>
  <div class="pop-up-wrapper center" :style="{backgroundColor: 'rgba(0,0,0,'+opacity+')'}">
    <div class="pop-up-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.6
    }
  }
};
</script>

<style lang="stylus">
.pop-up-wrapper
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 999
</style>
