<script setup>
/**
 * @name: login
 * @description：login.vue
 * @date: 2021/12/30 17:29
 * @author: yf_hu
 */
import {toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";

import {userLogin} from "../api";
import cookie from "../plugins/cookie";

const router = useRouter();
const route = useRoute();
const {query} = toRefs(route);
const redirect = query.redirect || "/home";
const routerRedirect = function () {
  cookie.remove("token");
  router.replace(redirect);
};
const login = function () {
  const millisecond = new Date().getTime();
  const expiresTime = new Date(millisecond + 7000 * 1000);
  userLogin().then((res) => {
    cookie.set("token", res.data.result.token, expiresTime);
    router.replace(redirect);
  });
};
</script>

<template>
  <div class="">
    <van-button type="primary" @click="routerRedirect()">未登录跳转</van-button>
    <van-button type="primary" @click="login()">登录跳转</van-button>
  </div>
</template>
<style scoped></style>
