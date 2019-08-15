import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import anime from 'animejs/lib/anime.es.js'

import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'

import currencyFilter from './filters/currency'
import dateFilter from './filters/date'
import CandleLoading from './components/CandleLoading'
import Alert from './components/AlertMessage'

import store from './store'
import './bus'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.use(VueI18n)

Vue.component('Alert', Alert)
Vue.component('Loading', Loading)
Vue.component('CandleLoading', CandleLoading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

Vue.use(Vuex)
Vue.use(anime)
const i18n = new VueI18n({
    locale: 'zhTW'
})
Vue.use(VeeValidate, {
    i18n,
    events: 'input|blur',
    dictionary: {
        zhTW
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const api = `${process.env.APIPATH}/api/user/check`
        axios.post(api).then((response) => {
        // this 在元件下才可以使用(目前在router下) 所以要改用axios
            console.log(response.data)
            if (response.data.success) {
                next()
            } else {
                next({
                    path: '/login'
                })
            }
        })
    } else { // 不須驗證or已驗證就直接放行
        next()
    }
})
