<template>
    <div class="tab-bar-itam" @click="itemClick">
        <div v-if="!isActive"><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :style="activeStyle"><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    data(){
        return {
            
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red',
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1;
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {} 
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path);
            console.log(this.$route.path);
        }
    },
}
</script>

<style>
.tab-bar-itam{
    flex:1;
    text-align:center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-itam img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

</style>