<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar/>
  </div>
</template>

<script>

const MainTabbar=() => import('../src/components/content/mainTabBar/MainTabBar');

export default {

  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
     @import 'assets/css/base.css'
</style>
