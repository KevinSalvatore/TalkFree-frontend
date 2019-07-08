import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { storage } from "@/API/storage.js";

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    if (storage("session")("get")("isLogin")) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});

export default router;
