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

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!auth.loggedIn()) {
//       next({
//         path: "/login"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
