import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import ajax from "@/API/ajax.js";

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    console.log("Sending...");
    ajax("/user/token").then(
      data => {
        if (data.success === true) {
          next();
        } else {
          next({
            path: "/login"
          });
        }
      },
      () => {
        next({
          path: "/login"
        });
      }
    );

    // if (JSON.parse(storage("session")("get")("isLogin"))) {
    //   next();
    // } else {
    // next({
    //   path: "/login"
    // });
    // }
  }
});

export default router;
