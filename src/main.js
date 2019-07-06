import Vue from "vue";
import App from "./App";
import router from "./router";

import "./utils/rem";

import "./style/reset.css";
import "animate.css";
import "./style/more.css";

import "./mixin/index.styl";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
