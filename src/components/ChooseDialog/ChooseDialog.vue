<template>
  <div class="choose-dialog-wrapper">
    <div class="choose-dialog__content retina-border-bottom">{{content}}</div>
    <div class="vertical-middle">
      <router-link
        tag="p"
        :to="btnLeftDes"
        :style="{color: btnLeftColor}"
        @click.native="$emit('leftBtnClick')"
        class="choose-dialog-btn choose-dialog-btn__left retina-border-right"
      >{{btnLeft}}</router-link>
      <router-link
        tag="p"
        :to="btnRightDes"
        :style="{color: btnRightColor}"
        @click.native="$emit('rightBtnClick')"
        class="choose-dialog-btn choose-dialog-btn__right"
      >{{btnRight}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    btnLeft: {
      type: String,
      default: "Cancel"
    },
    btnRight: {
      type: String,
      required: true
    },
    btnLeftDes: {
      type: String,
      default: ""
    },
    btnRightDes: {
      type: String,
      default: ""
    },
    btnLeftColor: {
      type: String,
      default: ""
    },
    btnRightColor: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus">
.choose-dialog-wrapper
  background-color $container-background-color
  border-radius $border-radius-default
  font-size $middle-font-size
  .choose-dialog__content
    padding $big-gap
    font-weight lighter
  .choose-dialog-btn
    width 50%
    flex-grow 0
    flex-shrink 0
    box-sizing border-box
    padding $big-gap
    text-align center
</style>
