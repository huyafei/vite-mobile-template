/**
 * @name: index
 * @description：index.js
 * @date: 2021/12/30 16:25
 * @author: yf_hu
 */
import { createRouter, createWebHashHistory } from "vue-router";
import cookies from "@/plugins/cookie";
import constantRoutes from "./modules/constantRoutes";
import asyncRoutes from "./modules/asyncRoutes";

const router = createRouter({
  // history: createWebHistory(process.env.VUE_APP_public_path),
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach(async (to, from, next) => {
  if (["Login", "Page404", "Page401"].includes(to.name)) {
    next();
  } else {
    // 刷新页面重新登陆，更新权限
    // if (!from.name && to.name !== "Login") {

    //   next({
    //     name: "Login",
    //     query: {
    //       redirect: to.fullPath,
    //     },
    //   });
    // } else {
    const token = cookies.get("token");
    if (token) {
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath
        }
      });
    }
    // }
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
