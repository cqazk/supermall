<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

const TabBarItem=()=>import('./TabBarItem')
export default {
    name:'tabber',
    components:{
        TabBarItem,
    }
}
</script>

<style>

#tab-bar{
    height: 49px;
    background-color:#ccc;
    display:flex;
    box-shadow:0 -1px 1 rgba(100,100,100,.1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>