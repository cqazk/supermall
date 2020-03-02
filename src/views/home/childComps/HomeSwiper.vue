<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item[0]">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
const Swiper =()=>import('components/common/swiper/Swiper')
const SwiperItem =()=>import('components/common/swiper/SwiperItem');
export default {
  name: "SwiperHome",
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
    Swiper,
    SwiperItem
  }
};
</script>

<style>
</style>