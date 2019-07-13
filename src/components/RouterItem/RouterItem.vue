<template>
  <router-link tag="div" :to="des" class="router-item-wrapper vertical-middle">
    <p class="router-item__title">{{itemTitle}}</p>
    <div class="router-item__description vertical-middle">
      <div class="router-item__description__container">
        <slot />
      </div>
      <div v-if="showArrow" class="router-item__description__icon">
        <i class="icon ion-ios-arrow-forward"></i>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    des: {
      type: String,
      default: ""
    },
    itemTitle: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus">
.router-item-wrapper
  font-size $middle-font-size
  line-height $large-font-size
  padding $gap 0
  justify-content space-between
  .router-item__title
    flex-grow 1
  .router-item__description
    .router-item__description__container
      padding-right $gap
      font-size $small-font-size
      font-weight lighter
      color $footer-color
    .router-item__description__icon
      line-height 1
      padding-right $gap
</style>
