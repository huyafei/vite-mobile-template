<script setup>
import {ref} from "vue";

const text = ref("抱歉，您没有权限");
</script>
<template>
  <div class="main">
    <div class="error">{{ text }}</div>
  </div>
</template>
<style lang="less" scoped></style>
