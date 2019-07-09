<template>
  <transition-group
    name="noti"
    tag="div"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp"
    class="notification-wrapper horizontal-center"
  >
    <div
      v-for="notification in notifications"
      :key="notification.time"
      class="notification-container box-shadow-border item-margin around-padding"
    >
      <p class="notification-head retina-border-bottom">{{notification.head}}</p>
      <p class="notification-content">{{notification.content}}</p>
    </div>
  </transition-group>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapState(["notifications"])
  },
  components: {}
};
</script>
<style lang="stylus">
.noti-move
  transition all 1s
.notification-wrapper
  z-index 1000
  position fixed
  top .5rem
  left 0
  right 0
  .notification-container
    width 8rem
    border-radius $border-radius-default
    background-color $container-background-color
    line-height 1.6
    font-weight lighter
    .notification-head
      font-size $small-font-size
    .notification-content
      font-size $mini-font-size
</style>