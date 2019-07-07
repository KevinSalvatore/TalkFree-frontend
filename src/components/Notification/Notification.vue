<template>
  <div class="notification-wrapper horizontal-center">
    <div class="notification-container box-shadow-border">
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
    border-radius $border-radius-default
</style>