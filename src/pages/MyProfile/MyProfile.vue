<template>
  <div class="my-profile-wrapper">
    <transition
      name="mask"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <a-mask v-if="maskShow" @maskClick="maskShow = false">
        <password-check-out
          class="password-check-out"
          des
          @leftBtnClick="maskShow = false"
          @rightBtnClick="checkPwd"
        />
      </a-mask>
    </transition>
    <page-header class="retina-border-bottom">
      <div slot="page-header__left" class="vertical-middle">
        <div @click="$router.push('/me')">
          <i class="icon ion-ios-arrow-back"></i>
        </div>
        <p class="page-header-title">My Profile</p>
      </div>
      <div slot="page-header__right"></div>
    </page-header>
    <div class="block retina-border-bottom">
      <router-item itemTitle="Profile Phote" class="has-margin-right retina-border-bottom">
        <div class="profile-photo">
          <img :src="$store.state.userInfo.avatar ? $store.state.userInfo.avatar : defaultAvatar" />
        </div>
      </router-item>
      <router-item itemTitle="Name" class="has-margin-right" @click.native="maskShow = true">
        <p>{{$store.state.userInfo.username}}</p>
      </router-item>
      <router-item itemTitle="Gender" class="has-margin-right">
        <p>{{$store.state.userInfo.gender}}</p>
      </router-item>
      <router-item itemTitle="Region" class="has-margin-right">
        <p>{{$store.state.userInfo.region ? $store.state.userInfo.region : 'Earth'}}</p>
      </router-item>
      <router-item itemTitle="What's Up" class="has-margin-right">
        <p>{{$store.state.userInfo.slogan}}</p>
      </router-item>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import RouterItem from "@/components/RouterItem/RouterItem";
import Mask from "@/components/Mask/Mask";
import PasswordCheckOut from "@/components/PasswordCheckOut/PasswordCheckOut";
import { storage } from "@/API/storage.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      defaultAvatar: require("@/static/images/defaultAvatar.png"),
      maskShow: true
    };
  },
  methods: {
    checkPwd(password) {
      console.log(password);
    }
  },
  components: { "a-mask": Mask, PasswordCheckOut, PageHeader, RouterItem }
};
</script>

<style lang="stylus">
.my-profile-wrapper
  .has-margin-right
    margin-left $gap
  .password-check-out
    width 80%
  .page-header-title
    margin-left $big-font-size
  .block
    background-color $container-background-color
  .profile-photo
    width 1.5rem
    height 1.5rem
    img
      object-fit cover
      width 100%
      object-position center center
</style>
