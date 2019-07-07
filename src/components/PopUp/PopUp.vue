<template>
  <div
    class="pop-up-wrapper center"
    :style="{backgroundColor: 'rgba(0,0,0,'+opacity+')'}"
    @click.self="hidePopUP"
  >
    <div class="pop-up-container around-padding" :style="{borderRadius: borderRadius}">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.6
    },
    borderRadius: {
      type: String,
      default: ".15rem"
    }
  },
  methods: {
    ...mapActions(["hidePopUP"])
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
  background-color #000
  z-index 999
  .pop-up-container
    background-color #fff
    width 80%
</style>
