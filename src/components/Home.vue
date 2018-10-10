
<template>
    <div class="box"  :class="{'layout-hide-text': spanLeft < 5}">
       <i-col :span="spanLeft" class="layout-menu-left">
        <Menu theme="dark" class="navList" accordion>
        <!-- 左边内容 -->
        <div class="layout-logo-left">
                <span class="layout-text"> Admin 管理系统</span>
        </div>
        <template v-for="item in $router.options.routes">
            <!-- 左边导航栏 -->
                <Submenu :name="item.name" :key="item.id" v-if="!item.leaf">
                     <template slot="title">
                        <Icon :type="item.icon" :size="iconSize"></Icon>
                        <span class="layout-text" >{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children" v-if="!child.hidden">
                        <Menu-item :name="child.path" :key="child.id" ><router-link :to="child.path">{{child.name}}</router-link></Menu-item>
                    </template>
                </Submenu>
                
        </template>
     </Menu>
     </i-col>
        <!-- 右边内容 -->
     <i-col :span="spanRight" class="right" style="background:#fff;padding:15px;">
         <div class="layout-header">
             <!-- menu -->
                    <i-button type="text" @click="toggleClick">
                        <Icon type="md-menu"  size="25"/>
                    </i-button>
            <!-- header -->
                    <Dropdown placement="bottom-end">
                        <span class="head-img">
                           {{curUserName}}
                            <img src="../assets/touxiang.jpg" style="width:50px;height:50px;margin-top:10px">
                        </span>
                        <Dropdown-menu slot="list">
                            <Dropdown-item @click.native="modifyPassWord()">修改密码</Dropdown-item>
                            <Dropdown-item @click.native="logout()">退出</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
                <!-- 应用中心 -->
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item >应用中心</Breadcrumb-item>
                        <Breadcrumb-item>{{$route.name}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <!-- 中间内容 -->
                <div class="layout-content">
                    <div class="layout-content-main">
                         <router-view></router-view>
                     </div>
                </div>
            </i-col>
            
            <!-- 修改密码模态框 -->
            <Modal v-model="modal1" title="修改密码" @on-ok="comfirmModifyPS"  @on-cancel="cancel" >
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <Form-item label="原密码" prop="oldPassword">
                    <Input v-model="formValidate.oldPassword" placeholder="请输入原始密码"></Input>
                </Form-item>
                <Form-item label="新密码" prop="newPassword">
                    <Input v-model="formValidate.newPassword" placeholder="请输入新密码"></Input>
                </Form-item>
                 <Form-item label="确认新密码" prop="resetPassword">
                    <Input v-model="formValidate.resetPassword" placeholder="请再次输入新密码"></Input>
                </Form-item>
            </Form>
        </Modal>
    </div> 
       
</template>

<script>

   export default {
        data () {
            return {
                spanLeft: 5,
                //用户登录输入的名字
                curUserName : sessionStorage.getItem('user').replace(/\"/g, ""),
                spanRight: 19,
                width:500,
                modal1: false,
                formValidate: {
                    oldPassword: '',
                    newPassword: '',
                    resetPassword:''
                },
                ruleValidate: {
                    oldPassword: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    newPassword: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    resetPassword: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                }
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
            },
             modifyPassWord() {
                this.modal1 = true;    
            },
            comfirmModifyPS() {
                this.$refs.formValidate.validate((valid) => {
                    if (this.formValidate.newPassword === this.formValidate.resetPassword && this.formValidate.newPassword !== '' || this.formValidate.resetPassword !== '') {
                         this.modal1 = false;
                //         this.loading = false;
                            this.$Message.success('修改成功!');
                        
                        
                    } else {
                        this.$Message.error('修改失败!');
                        return false;
                    }
                })    
               // this.$Message.info('点击了确定');
            },
            cancel(){
                this.modal1 = false;    
                this.$Message.info('点击了取消');
            },
            //点击退出登录
            logout() {
                this.$router.push('/login');
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
    }
    .layout-menu-left{
        background: #515a6e;
        height: 100%;
        position: relative;
        overflow: hidden;
       
        .navList{
            position: absolute;
            top: 20px;
            background: #515a6e;
            width: 400px !important;
            
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
    .layout-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .layout-breadcrumb{
        height: 35px;
        line-height: 35px;
    }
</style>