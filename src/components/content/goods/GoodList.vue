<template>
  <div class="goods">
    <list-item v-for="(item,index) in goods" :key="index" :gooditem="item" />
  </div>
</template>

<script>
const ListItem = () => import("./ListItem");

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    ListItem
  }
};
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>