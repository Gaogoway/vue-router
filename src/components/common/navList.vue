<template> 
    <Menu theme="light" class="navList">
        <div class="layout-logo-left">
                <span class="layout-text"> Admin 管理系统</span>
        </div>
        <template v-for="item in $router.options.routes">
                <Submenu :name="item.name">
                     <template slot="title">
                        <Icon :type="item.icon" :size="iconSize"></Icon>
                        <span class="layout-text" >{{item.name}}</span>
                    </template>
                    <template v-for="(child,childIndex) in item.children" v-if="!child.hidden">
                        <Menu-item :name="child.path"><router-link :to="child.path">{{child.name}}</router-link></Menu-item>
                    </template>
                </Submenu>
                
        </template>
        
     </Menu>
            
</template>

<script>
    export default{
        name:'navList',
        data(){
            return{
                spanLeft: 5,
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        }
    }
</script>

<style spoced lang="scss">
    .navList{
        height: 100%;
        width: 20% !important;
        float:left;
    }
    .layout-logo-left{
        font-size:30px;
    }

</style>