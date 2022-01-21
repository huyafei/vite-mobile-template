<script setup>
// @ is an alias to /src
import {computed, onMounted, ref, reactive} from "vue";
import {useStore} from "vuex";
import {useI18n} from 'vue-i18n'
import * as echarts from "echarts";
import {getUserInfoApi} from "../../api";
import Cookies from "@plugins/cookie";

const store = useStore();
const {t} = useI18n()

const language = ref("")
const echartsOptions = reactive({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    },
  ],
});

const userInfo = computed(() => store.state.user.userInfo);

const initEcharts = function () {
  const dom = document.getElementById("echars")
  const myChart = echarts.init(dom);
  myChart.setOption(echartsOptions, true);
};
const languageChange = function (e) {
  Cookies.set("language",e)
}
// 使用 action
const getUserInfo = () => store.dispatch("user/getUserInfo");

onMounted(() => {
  initEcharts();
  getUserInfoApi().then((res) => {
    // 使用 mutation
    store.commit("user/SET_USERINFO", res.data.result)
  });
});

</script>

<template>
  <div class="">
    <VenNavbar title="首页标题"></VenNavbar>
    <van-button type="primary" @click="getUserInfo">获取用户信息</van-button>
    <van-radio-group v-model="$i18n.locale" direction="horizontal" @change="languageChange">
      <van-radio name="zh-CN">中文</van-radio>
      <van-radio name="en-US">English</van-radio>
    </van-radio-group>
    {{t('global.confirm')}}
    <div>
      用户:{{ userInfo.name }}
    </div>
    <div id="echars"></div>
    <p>
      君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也，使口非是无欲言也，使心非是无欲虑也。及至其致好之也，目好之五色，耳好之五声，口好之五味，心利之有天下。是故权利不能倾也，群众不能移也，天下不能荡也。生乎由是，死乎由是，夫是之谓德操。德操然后能定，能定然后能应。能定能应，夫是之谓成人。天见其明，地见其光，君子贵其全也。
    </p>
  </div>
</template>
<style lang="less" scoped>
#echars {
  height: 300px;
}

p {
  color: @cl-blue;
  .ellipsis(2);
}
</style>
