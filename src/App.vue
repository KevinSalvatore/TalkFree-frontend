<template>
  <div id="app">
    <notification />
    <div class="page">
      <transition
        name="page"
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster"
        mode="out-in"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <transition
      name="notification"
      enter-active-class="animated fadeInUp faster"
      leave-active-class="animated fadeOutDown faster"
      mode="out-in"
    >
      <footer-guide class="footer-guide" v-show="$route.meta.showFooterGuide" />
    </transition>
  </div>
</template>

<script>
import Notification from "./components/Notification/Notification";
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: { Notification, FooterGuide }
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color $base-font-color
  width 100%
  height 100%
  .footer-guide
    color $footer-color
    font-size $mini-font-size
    position fixed
    left 0
    right 0
    bottom 0
  .page
    background-color $gap-background-color
    width 100%
    height 100%
</style>
