<template>
  <div class="me-wrapper">
    <page-header class="me__head">
      <div slot="page-header__left"></div>
      <div slot="page-header__right">
        <div>
          <i class="icon ion-ios-camera"></i>
        </div>
      </div>
    </page-header>
    <profile-card
      :avatar="$store.state.userInfo.avatar ? $store.state.userInfo.avatar : defaultAvatar"
      :username="$store.state.userInfo.username ? $store.state.userInfo.username : ''"
      :region="$store.state.userInfo.region ? $store.state.userInfo.region : 'Earth'"
    />
    <div class="item-list">
      <div v-for="(item, index) in items" :key="index" class="entrance vertical-middle item-margin">
        <div class="entrance__left">
          <img :src="item.entranceImg" />
        </div>
        <router-item
          :des="item.des"
          :itemTitle="item.itemTitle"
          class="entrance__right retina-border-top-bottom"
        ></router-item>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import RouterItem from "@/components/RouterItem/RouterItem";
import { storage } from "@/API/storage.js";

export default {
  data() {
    return {
      defaultAvatar: require("@/static/images/defaultAvatar.png"),
      items: [
        {
          entranceImg: require("@/static/smallIcons/post.png"),
          itemTitle: "My Posts",
          des: ""
        },
        {
          entranceImg: require("@/static/smallIcons/setting.png"),
          itemTitle: "Settings",
          des: "/settings"
        }
      ]
    };
  },
  methods: {},
  computed: {},
  components: { PageHeader, ProfileCard, RouterItem }
};
</script>
<style lang="stylus">
.me-wrapper
  .me__head
    background-color $container-background-color
  .item-list
    .entrance
      justify-content space-between
      background-color $container-background-color
      .entrance__left
        padding $gap
        width $large-font-size
        height $large-font-size
        img
          width 100%
          object-fit cover
          object-position center center
      .entrance__right
        flex-grow 1
</style>