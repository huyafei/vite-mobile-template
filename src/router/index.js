/**
 * @name: index
 * @description：index.js
 * @date: 2021/12/30 16:25
 * @author: yf_hu
 */
import {createRouter, createWebHashHistory,} from "vue-router";
import cookie from "@/plugins/cookie";
import constantRoutes from "./modules/constantRoutes";
import asyncRoutes from "./modules/asyncRoutes";

const router = createRouter({
  // history: createWebHistory(process.env.VUE_APP_public_path),
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes],
});
router.beforeEach(async (to, from, next) => {
  if (["Login", "Page404", "Page401"].includes(to.name)) {
    next();
  } else if (from.name == null) {
    // 刷新页面重新登陆，更新权限
    next({
      name: "Login",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    const token = cookie.get("token");
    if (token && token !== "undefined") {
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath,
        },
      });
    }
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
