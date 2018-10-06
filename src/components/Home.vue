<template>
    <div class="box"  :class="{'layout-hide-text': spanLeft < 5}">
       <i-col :span="spanLeft" class="layout-menu-left">
        <Menu theme="dark" class="navList" accordion :span="spanLeft">
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
                        <Menu-item :name="child.path" :key="child.id" ><router-link :to="child.path">{{child.name}}</router-link></Menu-item>
                    </template>
                </Submenu>
                
        </template>
     </Menu>
     </i-col>
        <!-- 右边内容 -->
     <i-col :span="spanRight">
         <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="md-menu"  size="32"/>
                    </i-button>
                </div>
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

   export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
          
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
        height: 100%;
        position: relative;
       
        .navList{
            position: absolute;
            top: 20px;
            background: #515a6e;
            width: auto !important;

            a{
                color:#fff !important
            }
        }
        .layout-text{
            color: #fff;
        }
        
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
</style>