/**
 * @name: constant
 * @description：constant.js
 * @date: 2022/1/6 13:19
 * @author: yf_hu
 */
const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../../views/login.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "Page404",
    meta: {
      title: "提示",
    },
    component: () =>
      import(
        /* webpackChunkName: "pageError" */ "../../views/pageError/404.vue"
        ),
  },
  {
    path: "/401",
    name: "Page401",
    meta: {
      title: "提示",
    },
    component: () =>
      import(
        /* webpackChunkName: "pageError" */ "../../views/pageError/401.vue"
        ),
  },
];
export default constantRoutes;
