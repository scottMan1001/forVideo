import Vue from 'vue'
import App from './App.vue'
import router from './router'
import commonComponents from './components/index.js'
Vue.config.productionTip = false
Vue.use(commonComponents)
 /* 路由发生变化修改页面title */
 router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')