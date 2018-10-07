
import Home from "../components/Home.vue" 
import test from "../components/guanli/test.vue"
import tests from "../components/guanli/tests.vue"
import addUser from "../components/guanli/addUser.vue"
import hotUser from "../components/guanli/hotUser.vue"
import newStart from "../components/guanli/newStart.vue"
import fenxi from "../components/guanli/fenxi.vue"
import Login from "../components/Login.vue"

let routes = [
    {
      path: '/',
      component: Home,
      name: '内容管理',
      icon: 'ios-paper',
      children: [
          { path: '/test', component: test, name: '文章管理' },
          { path: '/tests', component: tests, name: '评论管理' }
      ],
      redirect:"/login"//默认跳转登录页面
  },
  {
    path: '/',
    component: Home,
    name: '用户管理',
    icon: 'ios-people',
    children: [
        { path: '/adduser', component: addUser, name: '新增用户' },
        { path: '/hotuser', component: hotUser, name: '活跃用户' }
    ]
},
{
  path: '/',
  component: Home,
  name: '统计分析',
  icon: 'ios-stats',
  children: [
      { path: '/newstart', component: newStart, name: '新增和启动' },
      { path: '/fenxi', component: fenxi, name: '活跃分析' }
  ]
},
{
    path: '/login',
    component: Login,
    name: 'main',
    leaf: true
}
  ]
  export default routes;