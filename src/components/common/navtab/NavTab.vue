<template>
  <div class="nav-tab">
      <div class="left"><slot name='left'></slot></div>
      <div class="conter"><slot name='conter'></slot></div>
      <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavTab'
}
</script>

<style>
.nav-tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 55px 1px rgba(100,100,100,0)
}
.left{
    width: 60px;
}
.right{
    width: 60px;
}
.conter{
    flex: 1;
}
</style>