<script setup></script>
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component
          :is="Component"
          v-if="$route.meta.keepAlive"
          :key="$route.name"
      />
    </keep-alive>
    <component
        :is="Component"
        v-if="!$route.meta.keepAlive"
        :key="$route.name"
    />
  </router-view>
</template>
<style lang="less">
#app {
  height: 100%;
}
</style>
