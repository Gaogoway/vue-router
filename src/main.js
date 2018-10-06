// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import "./styleSheets/main.scss"
import "./javascript/index"

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(iView)

const router =new Router({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
}).$mount('#app')
