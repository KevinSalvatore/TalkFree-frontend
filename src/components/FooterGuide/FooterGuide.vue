<template>
  <div id="footer-guide" class="retina-border-top vertical-middle">
    <div
      v-for="item in items"
      :key="item.id"
      class="footer-item center"
      @click="goTo('/'+item.path)"
    >
      <div class="footer-item__icon">
        <img :src="item.path === $route.path.split('/')[1] ? item.active : item.notActive" />
      </div>
      <div
        class="footer-item__title"
        :class="{'selected-footer': item.path === $route.path.split('/')[1]}"
      >{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          path: "chats",
          title: "Chats",
          active: require("@/static/footerGuideIcon/active/chats.png"),
          notActive: require("@/static/footerGuideIcon/notActive/chats.png")
        },
        {
          path: "contacts",
          title: "Contacts",
          active: require("@/static/footerGuideIcon/active/contacts.png"),
          notActive: require("@/static/footerGuideIcon/notActive/contacts.png")
        },
        {
          path: "discover",
          title: "Discover",
          active: require("@/static/footerGuideIcon/active/discover.png"),
          notActive: require("@/static/footerGuideIcon/notActive/discover.png")
        },
        {
          path: "me",
          title: "Me",
          active: require("@/static/footerGuideIcon/active/me.png"),
          notActive: require("@/static/footerGuideIcon/notActive/me.png")
        }
      ]
    };
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus">
.footer-guide
  height $footer-guide-height
  justify-content space-around
  .footer-item
    .footer-item__icon
      width .6rem
      height .6rem
      img
        object-fit cover
        width 100%
        height 100%
    .footer-item__title
      line-height 1.6
    .selected-footer
      color $active-color
</style>
