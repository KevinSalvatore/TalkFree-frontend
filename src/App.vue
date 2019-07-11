<template>
  <div id="app">
    <!-- <transition
      name="pop-up"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <pop-up v-if="showPopUp">
        <p class="pop-up__content around-padding" @click="showPopUp = false">欢迎使用Talk Free!</p>
      </pop-up>
    </transition>-->
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
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      // showPopUp: false
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.showPopUp = false;
  //   }, 1500);
  // },
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
  .pop-up__content
    font-size $middle-font-size
    background-color #fff
    border-radius $border-radius-default
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
