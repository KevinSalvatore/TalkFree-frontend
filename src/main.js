import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import "es6-promise/auto";
import "animate.css";

import "./utils/rem";
import "./style/reset.css";
import "./style/more.css";
import "./mixin/index.styl";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
