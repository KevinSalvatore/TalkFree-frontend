<template>
  <div class="notification-wrapper horizontal-center">
    <div class="notification-container around-padding">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style lang="stylus">
.notification-wrapper
  z-index 1000
  position fixed
  top 1rem
  left 0
  right 0
  .notification-container
    width 8rem
    background-color #fff
    border-radius .25rem
    box-shadow 0 0 .25rem 0.025rem $active-color
</style>