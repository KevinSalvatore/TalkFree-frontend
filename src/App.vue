<template>
  <div id="app">
    <transition name="pop-up" mode="out-in">
      <pop-up v-if="showPopUp">
        <p class="pop-up__content">这是一个对话框点击遮盖层可以关闭</p>
      </pop-up>
    </transition>
    <transition
      name="notification"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
    >
      <notification v-if="showNotification">
        <p class="notification__content">Notification</p>
      </notification>
    </transition>
    <!-- <button @click="showPopUP">ShowPopUp</button>
    <button @click="notificationContral">Toggle</button>-->
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
import PopUp from "./components/PopUp/PopUp";
import Notification from "./components/Notification/Notification";
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["showPopUp", "showNotification"])
  },
  // methods: {
  //   ...mapActions(["showPopUP", "notificationContral"])
  // },
  components: { PopUp, Notification, FooterGuide }
};
</script>

<style lang="stylus">
.pop-up-enter-active, .pop-up-leave-active
  transition opacity .5s
.pop-up-enter, .pop-up-leave-to
  opacity 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color $base-font-color
  width 100%
  height 100%
  .pop-up__content, .notification__content
    font-size $middle-font-size
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
