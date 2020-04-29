import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from "./components/HelloWorld.vue"
import PageNotFound from "./views/PageNotFound.vue"
import Freeman from "./views/Freeman.vue"

Vue.use(Router)
export default new Router({
    mode: 'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
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
        // {
        //     path:'/login',
        //     name:'home',
        //     component:Home,
        //     meta:{
        //         title:'home'
        //     }
        // },
        // {
        //     path:'/',
        //     name:'home',
        //     component:Home,
        //     meta:{
        //         title:'home'
        //     }
        // }
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