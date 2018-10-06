<template>
    <div class="box">
       <i-col :span="spanLeft" class="layout-menu-left">
        <Menu theme="dark" class="navList" accordion >
        <!-- 左边内容 -->
        <div class="layout-logo-left">
                <span class="layout-text"> Admin 管理系统</span>
        </div>
        <template v-for="item in $router.options.routes">
            <!-- 左边导航栏 -->
                <Submenu :name="item.name" :key="item.id">
                     <template slot="title">
                        <Icon :type="item.icon" :size="iconSize"></Icon>
                        <span class="layout-text" >{{item.name}}</span>
                    </template>
                    <template v-for="(child,childIndex) in item.children" v-if="!child.hidden">
                        <Menu-item :name="child.path" :key="child.id"><router-link :to="child.path">{{child.name}}</router-link></Menu-item>
                    </template>
                </Submenu>
                
        </template>
     </Menu>
     </i-col>
        <!-- 右边内容 -->
     <i-col :span="spanRight">
                <!-- 中间内容 -->
                <div class="layout-content">
                    <div class="layout-content-main">
                         <router-view></router-view>
                     </div>
                </div>
            </i-col>
    </div> 
       
</template>

<script>

    export default{
         name:'navList',
        data(){
            return{
                spanLeft: 5,//左边内容的宽度
                spanRight: 19//中间内容的宽度
            }
        },
        computed: {
            iconSize () {//字体大小设置
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            //路由点击实现内容显示
            
          
        }
    }
</script>

<style spoced lang="scss">
    .box{
        height: 100%;
        display: flex;
        
        .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: auto;
        background: #fff;
        border-radius: 4px;
         height: 80%;
    }
    .layout-content-main{
        
    }
    }
    .layout-menu-left{
        background: #515a6e;
        width: 240px;
        height: 100%;
        position: relative;
       
        .navList{
            position: absolute;
            top: 20px
        }
        .layout-text{
            color: #fff;
        }
        
    }
</style>