import Header from './Header.vue'
import Footer from './Footer.vue'
import Login from './Login.vue'
export default function commonComponents  (Vue) {
    // 检查是否已经全局安装了这些组件
    if (commonComponents.install) return

    Vue.component('Header', Header)
    Vue.component('Footer', Footer)
    Vue.component('Login', Login)
}