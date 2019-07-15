<template>
  <div class="password-check-out-wrapper">
    <p class="password-check-out__content retina-border-bottom">Please Input Your Password</p>
    <div class="password-check-out__content retina-border-bottom">
      <input
        type="password"
        class="pwdInput content-padding"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="vertical-middle">
      <p
        @click="cancel"
        class="password-check-out-btn password-check-out-btn__left retina-border-right"
      >Cancel</p>
      <router-link
        tag="p"
        :to="des"
        @click.native="$emit('rightBtnClick', password)"
        class="password-check-out-btn password-check-out-btn__right"
      >Confirm</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { password: "" };
  },
  props: {
    des: {
      type: String,
      default: ""
    }
  },
  methods: {
    cancel() {
      this.password = "";
      this.$emit("leftBtnClick");
    }
  }
};
</script>

<style lang="stylus">
.password-check-out-wrapper
  background-color $container-background-color
  border-radius $border-radius-default
  font-size $middle-font-size
  .password-check-out__content
    padding $big-gap
    font-weight lighter
  .pwdInput
    border 0
    border-bottom 1px solid $active-color
    outline none
    font-size $middle-font-size
  .password-check-out-btn
    width 50%
    flex-grow 0
    flex-shrink 0
    box-sizing border-box
    padding $big-gap
    text-align center
    &.password-check-out-btn__right
      color $active-color
</style>
