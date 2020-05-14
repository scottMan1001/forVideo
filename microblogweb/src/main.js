import Vue from 'vue'
import flvjs from 'flv.js'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import commonComponents from './components/index.js'
Vue.config.productionTip = false
Vue.use(commonComponents)
Vue.use(flvjs)
 /* 路由发生变化修改页面title */
 router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
//axios设置
axios.defaults.baseURL = "http://127.0.0.1:3000/";
//将axios这个对象添加到Vue的原型对象中，在使用的时候就只需要使用this.对象名就可以了
Vue.prototype.$http = axios

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')