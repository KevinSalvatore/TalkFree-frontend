import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    console.log(router.app.$options.components.App.store.state)
    if (router.app.$options.components.App.store.state.userInfo.username) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});

export default router;
