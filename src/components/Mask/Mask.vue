<template>
    <div class="mask-wrapper center" @click.self="$emit('maskClice')">
      <slot />
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.mask-wrapper
  position fixed
  z-index 1000
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0, 0, 0, .5)
</style>
