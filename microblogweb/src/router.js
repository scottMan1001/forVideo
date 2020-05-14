import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from "./components/HelloWorld.vue"
import PageNotFound from "./views/PageNotFound.vue"
import Freeman from "./views/Freeman.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
Vue.use(Router)
export default new Router({
    mode: 'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'login',
            component:Login,
            meta:{
                title:'login'
            }
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            meta:{
                title:'home'
            }
        },
        {
            path:'/hello',
            name:'hello',
            component:HelloWorld,
            meta:{
                title:'hello'
            }
        },
        {
            path:'/freeman',
            name:'freeman',
            component:Freeman,
            meta:{
                title:'freeman'
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                title:'login'
            }
        },
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{
                title:'register'
            }
        },
        {
            path:'*',
            name:'home',
            component: PageNotFound,
            meta:{
                title:'error'
            }
        },
    ]
})