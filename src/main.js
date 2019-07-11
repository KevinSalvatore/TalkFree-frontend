import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "es6-promise/auto";
import "animate.css";

import "./utils/rem";
import "./style/reset.css";
import "./style/more.css";
import "./mixin/index.styl";

// import PopUp from "./components/PopUp/PopUp.vue";

Vue.config.productionTip = false;

// Vue.component("PopUp", PopUp);

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
