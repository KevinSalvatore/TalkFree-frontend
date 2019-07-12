<template>
  <div class="page-header-wrapper vertical-middle around-padding retina-border-bottom">
    <slot name="page-header__left" />
    <slot name="page-header__right" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.page-header-wrapper
  width 100%
  height $page-header-height
  justify-content space-between
  font-size $middle-font-size
  i
    font-size $big-font-size
    line-height 1
</style>
