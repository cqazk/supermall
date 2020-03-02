<template>
  <div id="home">
    <nav-tab class="home-nav">
      <div slot="conter">购物街</div>
    </nav-tab>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <TabControl :titles="['流行','新款','精选']" class="tab-control"  v-on:TabClick="TabClick"/>
    <good-list :goods="goods[currentType].list[0]"/>
  </div>
</template>

<script>
const NavTab = () => import("components/common/navtab/NavTab");
const TabControl = () => import("components/content/tabControl/TabControl");
const GoodList=()=>import("components/content/goods/GoodList");

const HomeSwiper = () => import("./childComps/HomeSwiper");
const HomeRecommendView = () => import("./childComps/HomeRecommendView");
const HomeFeatureView = () => import("./childComps/HomeFeatureView");

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavTab,
    TabControl,
    GoodList,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType:'pop'
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {});
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...[res.data.list])
      })
      this.goods[type].page+=1;
    },
    TabClick(index){
      switch(index){
        case 0 :
          this.currentType='pop'
          break
        case 1 :
          this.currentType='new'
          break
        case 2 :
          this.currentType='sell'
          break
        
      }
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  z-index: 9;
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>