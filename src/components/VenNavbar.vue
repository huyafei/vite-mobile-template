<script setup>
/**
 * @name: VenNavbar
 * @description：VenNavbar.vue
 * @date: 2022/1/5 9:46
 * @author: yf_hu
 */
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  leftArrow: {
    type: Boolean,
    default: true,
  },
  leftText: {
    type: String,
    default: "",
  },
})
const onClickLeft = function () {
  router.go(-1);
};
</script>
<template>
  <van-nav-bar
      :left-arrow="leftArrow"
      :left-text="leftText"
      :title="title"
      class="nav-bar"
      safe-area-inset-top
      @click-left="onClickLeft"
  >
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
  </van-nav-bar>
</template>
<style scoped></style>
