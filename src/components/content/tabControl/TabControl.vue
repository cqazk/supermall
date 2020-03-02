<template>
  <div class="tab-control">
      <div v-for="(item , index) in titles" 
      :key="index" class="itemControl" 
      :class="{active:index===currentIndex}" 
      @click='itemClick(index)'>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            this.$emit('TabClick',index)
            // if(index==0){
            //     this.$emit('fun',this.goods['pop'].list[0])
            // }
            // else if(index==1){
            //     console.log("bbb")
            //     this.$emit('fun',this.goods['new'].list[0])
            // }
            // else {
            //     this.$emit('fun',this.goods['sell'].list[0])
            // }
        }
    },
}
</script>

<style>
.tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background: #fff;
}
.itemControl{
    flex: 1;
}
.itemControl span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-tint);
}
</style>