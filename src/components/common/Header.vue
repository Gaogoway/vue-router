<template>
    <div class="header">
        <div class="header-bar">
            <Icon type="md-menu" class="list"/>
            管理系统
            <div class="shouye">首页</div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name:'Header',
        data(){
            return{

            }
        }
    }
</script>

<style spoced lang="scss">
    .header-bar{
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:200px;
    }
    .header{
        background:skyblue;
        width:100%;
        height:60px;
        line-height:60px;
        padding-left:10px;
    }
    
</style>