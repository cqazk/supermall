<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item[0]" class="recommend-item">
          <a :href="item.link">
              <img :src='item.image'>
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 15px;
    border-bottom: 10px solid #eee;
    color: azure;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>