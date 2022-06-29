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
    <p class="wz">
      君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也，使口非是无欲言也，使心非是无欲虑也。及至其致好之也，目好之五色，耳好之五声，口好之五味，心利之有天下。是故权利不能倾也，群众不能移也，天下不能荡也。生乎由是，死乎由是，夫是之谓德操。德操然后能定，能定然后能应。能定能应，夫是之谓成人。天见其明，地见其光，君子贵其全也。
    </p>
  </div>
</template>
<style scoped lang="less">
.wz {
  font-size: 16px;
  color: @cl-blue;
}
</style>
