<template>
  <div class="login-container-wrapper horizontal-center">
    <div class="input-wrapper">
      <input-item
        iconName="person"
        placeholder="Username"
        @valueChange="loginDetails.username = $event"
      />
      <input-item
        iconName="lock"
        placeholder="Password"
        inputType="password"
        @valueChange="loginDetails.password = $event"
      />
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
          @valueChange="loginDetails.passwordA = $event"
        />
      </transition>
    </div>

    <div class="choose-btn">
      <div
        class="sub around-padding"
        @click="sub"
      >{{showCard === "LoginCard" ? 'Sign In' : 'Sign Up'}}</div>
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
import { storage } from "@/API/storage.js";
import ajax from "@/API/ajax.js";

export default {
  data() {
    return {
      showCard: "LoginCard",
      loginDetails: {
        username: "",
        password: "",
        passwordA: ""
      }
    };
  },
  methods: {
    sub() {
      if (this.showCard === "LoginCard") {
        let user = {
          username: this.loginDetails.username,
          password: this.loginDetails.password
        };

        ajax("/user/login", user, "POST").then(
          data => {
            if (data.success) {
              storage("session")("set")("token", data.token);
              this.$router.go(-1);
            } else {
              console.log(data.msg);
            }
          },
          err => {
            console.log(err);
          }
        );
        // this.$store.dispatch("newNotification", {
        //   head: "Tip",
        //   content: "Log in..."
        // });
        // setTimeout(() => {
        //   storage("session")("set")("isLogin", true);
        //   this.$store.dispatch("newNotification", {
        //     head: "Tip",
        //     content: "Log in successful!"
        //   });
        //   this.$router.push("./chats");
        // }, 1000);
      } else if (this.showCard === "RegistCard") {
        let { username, password, passwordA } = this.loginDetails;
      } else {
        return;
      }
    }
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
