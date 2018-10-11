
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
      name: '表格选项',
      icon: 'ios-paper',
      children: [
          { path: '/test', component: test, name: '表格' },
          { path: '/tests', component: tests, name: '表单' }
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
      { path: '/newstart', component: newStart, name: '富文本' },
      { path: '/fenxi', component: fenxi, name: 'ECharts' }
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