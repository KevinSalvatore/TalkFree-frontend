<template>
  <div class="login-container-wrapper">
    <button @click="showCard = 'LoginCard'">Login</button>
    <button @click="showCard = 'RegistCard'">Regist</button>

    <transition
      name="login-container"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <keep-alive>
        <component v-bind:is="showCard"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import LoginCard from "./components/LoginCard/LoginCard";
import RegistCard from "./components/RegistCard/RegistCard";
export default {
  data() {
    return {
      showCard: "LoginCard"
    };
  },
  components: {
    LoginCard,
    RegistCard
  }
};
</script>

<style lang="stylus"></style>
