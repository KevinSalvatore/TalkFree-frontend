<template>
  <div class="login-wrapper center">
    <div class="login-logo horizontal-center animated bounceInDown fast">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3rem"
        height="3rem"
        class="login-logo__icon"
        version="1.1"
        viewBox="0 0 1245 1024"
        id="logo-pic"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2AF598" />
            <stop offset="100%" stop-color="#08AEEA" />
          </linearGradient>
        </defs>
        <path
          fill="url(#linear)"
          d="M870.953514 333.768649c-209.781622 0-374.867027 145.020541-374.867028 322.836756s165.223784 322.836757 374.867028 322.836757a548.116757 548.116757 0 0 0 132.289729-22.417297L1124.185946 1024l-33.210811-110.702703C1179.537297 845.768649 1245.405405 756.92973 1245.405405 656.605405c0-177.816216-176.294054-322.836757-374.451891-322.836756z m-121.496217 267.208648A47.463784 47.463784 0 0 1 705.72973 556.419459 47.740541 47.740541 0 0 1 749.457297 512c33.349189 0 55.351351 22.278919 55.351352 44.557838s-22.002162 44.419459-55.351352 44.419459z m242.438919 0a47.325405 47.325405 0 0 1-43.727567-44.557838A47.602162 47.602162 0 0 1 991.896216 512c33.072432 0 55.351351 22.278919 55.351352 44.557838s-22.278919 44.419459-55.351352 44.419459z"
        />
        <path
          fill="url(#linear)"
          d="M440.735135 0C198.434595 0 0 166.054054 0 378.326486c0 122.188108 66.006486 222.512432 176.432432 300.41946l-44.142702 133.811892 154.153513-77.907027c55.351351 10.931892 99.355676 22.278919 154.430271 22.278919 13.837838 0 27.675676 0 41.513513-1.798919a334.045405 334.045405 0 0 1-13.837838-93.267027c0-193.72973 166.054054-352.034595 374.728649-352.034595a378.88 378.88 0 0 1 42.482162 2.629189C847.429189 133.12 657.574054 0 440.735135 0zM294.192432 296.683243a53.137297 53.137297 0 1 1 52.722163-53.137297 52.860541 52.860541 0 0 1-52.722163 53.137297z m314.395676 0a53.137297 53.137297 0 1 1 52.722162-53.137297A52.860541 52.860541 0 0 1 608.864865 296.683243z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3.75rem"
        height=".6rem"
        class="login-logo__name"
      >
        <text x="50%" y="50%" class="logo logo-name-text-1">Talk Free</text>
        <text x="50%" y="50%" class="logo logo-name-text-2">Talk Free</text>
        <text x="50%" y="50%" class="logo logo-name-text-3">Talk Free</text>
      </svg>
    </div>
    <login-container class="animated bounceInDown login-container" />
  </div>
</template>

<script>
import LoginContainer from "./components/LoginContainer/LoginContainer";
export default {
  // mounted() {
  //   const that = this;
  //   setTimeout(function() {
  //     that.$router.push("/chats");
  //   }, 1500);
  // },
  components: {
    LoginContainer
  }
};
</script>

<style lang="stylus">
.login-wrapper
  width 100%
  height 100%
  background-color #26324A
  .login-logo
    .logo
      font-size $middle-font-size
      font-weight bold
      stroke-width 1px
      stroke-dasharray 30% 70%
      animation stroke 4.5s infinite linear
      fill none
      text-anchor middle
      dominant-baseline central
    .logo-name-text-1
      stroke #2AF598
    .logo-name-text-2
      stroke #19D1C1
      animation-delay -1.5s
    .logo-name-text-3
      stroke #08AEEA
      animation-delay -3s
  .login-container
    margin-top .5rem
@keyframes stroke
  to
    stroke-dashoffset -100%
</style>
