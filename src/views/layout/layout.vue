<script setup></script>
<template>
  <div class="layout">
    <div class="main">
      <router-view></router-view>
    </div>
    <VenTabbar></VenTabbar>
  </div>
</template>
<style lang="less" scoped>
.layout {
  height: 100%;

  .main {
    height: calc(100% - 50px);
  }
}
</style>
