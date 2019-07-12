<template>
  <div class="plus-btn-wrapper">
    <i class="icon ion-ios-add-circle-outline" @click.self="show = !show"></i>
    <transition
      name="entrance"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div class="entrances" v-show="show">
        <div class="vertical-middle content-margin">
          <div>
            <i class="icon ion-ios-chatbubbles"></i>
          </div>
          <p>New Chat</p>
        </div>
        <div class="vertical-middle content-margin">
          <div>
            <i class="icon ion-ios-person-add"></i>
          </div>
          <p>Add Contacts</p>
        </div>
        <div class="vertical-middle content-margin">
          <div>
            <i class="icon ion-ios-mail"></i>
          </div>
          <p>Support</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="stylus">
.plus-btn-wrapper
  margin-left $big-font-size
  position relative
  i
    font-size $big-font-size
    line-height 1
  .entrances
    &:before
      content ''
      position absolute
      right 0
      top 0
      transform translateY(-.15rem)
      border-top .15rem solid transparent
      border-right .15rem solid $base-font-color
      border-bottom .15rem solid $base-font-color
      border-left .15rem solid transparent
    position absolute
    right 50%
    top 50%
    padding $top-btn-gap $left-right-gap
    transform translateY(.6rem)
    background-color $base-font-color
    border-top-left-radius $border-radius-default
    border-bottom-left-radius $border-radius-default
    border-bottom-right-radius $border-radius-default
    color $gap-background-color
    i
      font-size $big-font-size
    p
      font-size $small-font-size
      white-space nowrap
      margin-left $small-font-size
</style>
