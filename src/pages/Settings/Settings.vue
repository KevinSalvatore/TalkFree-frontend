<template>
  <div class="settings-wrapper">
    <transition
      name="mask"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <a-mask v-if="maskShow" @maskClick="maskShow = false">
        <choose-dialog class="choose-dialog"
          content="Do you really want to log out?"
          btnRight="Log out"
          btnRightColor="#64EDAC"
          @leftBtnClick="maskShow = false"
          @rightBtnClick="logOut"
          btnRightDes="/login"
        />
      </a-mask>
    </transition>
    <page-header class="me__head retina-border-bottom">
      <div slot="page-header__left" class="vertical-middle">
        <div @click="$router.push('/me')">
          <i class="icon ion-ios-arrow-back"></i>
        </div>
        <p class="page-header-title">Settings</p>
      </div>
      <div slot="page-header__right"></div>
    </page-header>
    <div class="block retina-border-bottom">
      <router-item itemTitle="Account Security" class="has-margin-right retina-border-bottom"></router-item>
      <router-item itemTitle="Do Not Disturb" class="has-margin-right"></router-item>
    </div>
    <div class="block retina-border-top-bottom item-margin">
      <router-item itemTitle="About" class="has-margin-right retina-border-bottom"></router-item>
      <router-item itemTitle="Help & Feedback" class="has-margin-right"></router-item>
    </div>
    <div class="block retina-border-top-bottom item-margin">
      <p class="log-out" @click="maskShow = true">Log Out</p>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import RouterItem from "@/components/RouterItem/RouterItem";
import Mask from "@/components/Mask/Mask";
import ChooseDialog from "@/components/ChooseDialog/ChooseDialog";
import { storage } from "@/API/storage.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      maskShow: false
    };
  },
  methods: {
    ...mapActions("userInfo/", ["updateUserInfo"]),
    logOut() {
      this.maskShow = false;
      storage("local")("clear");
      let userInfo = {
        username: null,
        avatar: null,
        gender: null,
        region: null,
        slogan: null
      };
      this.updateUserInfo(userInfo);
    }
  },
  components: { "a-mask": Mask, ChooseDialog, PageHeader, RouterItem }
};
</script>

<style lang="stylus">
.settings-wrapper
  .has-margin-right
    margin-left $gap
  .choose-dialog
    width 80%
  .page-header-title
    margin-left $big-font-size
  .block
    background-color $container-background-color
    .log-out
      font-size $middle-font-size
      line-height $large-font-size
      padding $gap 0
      text-align center
</style>
