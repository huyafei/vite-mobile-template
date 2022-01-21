<script setup>
import {ref} from "vue";

const text = ref("哦豁，页面不见了");
</script>
<template>
  <div class="main">
    <!--    <div  class="error">-->
    <van-empty :description="text" image="error"/>
    <!--    </div>-->
  </div>
</template>
<style lang="less" scoped></style>
