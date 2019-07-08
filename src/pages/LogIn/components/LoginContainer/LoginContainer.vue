<template>
  <div class="login-container-wrapper horizontal-center">
    <div class="input-wrapper">
      <input-item iconName="person" placeholder="Username" />
      <input-item iconName="lock" placeholder="Password" inputType="password" />
      <transition
        name="regist-show"
        enter-active-class="animated zoomIn faster"
        leave-active-class="animated zoomOut faster"
        mode="out-in"
      >
        <input-item
          iconName="lock"
          placeholder="Password again"
          inputType="password"
          v-show="showCard === 'RegistCard'"
        />
      </transition>
    </div>

    <div class="choose-btn">
      <div class="sub around-padding">{{showCard === "LoginCard" ? 'Sign In' : 'Sign Up'}}</div>
      <p class="more item-margin">
        <span>Forget password?</span>
        <span class="separate">|</span>
        <span
          @click="showCard==='LoginCard'? showCard='RegistCard' : showCard='LoginCard'"
        >{{showCard === "LoginCard" ? 'New here!' : 'Sign in!'}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import InputItem from "./components/InputItem/InputItem";

export default {
  data() {
    return {
      showCard: "LoginCard"
    };
  },
  components: {
    InputItem
  }
};
</script>

<style lang="stylus">
.login-container-wrapper
  height 9rem
  justify-content space-between
  .sub
    width 7.45rem
    background-color #3BBCB0
    border-radius $border-radius-default
    text-align center
    font-size $big-font-size
    color #eee
    text-transform Uppercase
  .more
    font-size 0
    text-align center
    color rgba(222, 222, 222, .5)
    span
      font-size $small-font-size
    .separate
      margin 0 .25rem
</style>
