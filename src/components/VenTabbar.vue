<script setup>
import {reactive, ref} from "vue";
import {useRoute} from "vue-router"

const route = useRoute()

const active = ref("HomeIndex");
const tabbarList = reactive([
  {
    text: "首页",
    icon: "home-o",
    path: "/home/index",
    name: "HomeIndex",
  },
  {
    text: "分类",
    icon: "flag-o",
    path: "/classify/index",
    name: "ClassifyIndex",
  },
  {
    text: "购物车",
    icon: "friends-o",
    path: "/cart/index",
    name: "CartIndex",
  },
  {
    text: "我的",
    icon: "user-o",
    path: "/my/index",
    name: "MyIndex",
  },
]);
// const getSelectItemBarName = () => {
//   active.value = route.name;
// }
// watch(() => route.name,(val,oldVal)=>{
// })
// watch(() => active.value,(val,oldVal)=>{
//   console.log(val,oldVal)
// })
</script>
<template>
  <van-tabbar v-model="active" active-color="#1989fa" route>
    <template v-for="item in tabbarList" :key="item.path">
      <van-tabbar-item
          :icon="item.icon"
          :name="item.name"
          :to="item.path"
          replace>{{ item.text }}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>
<style lang="less" scoped>
</style>
