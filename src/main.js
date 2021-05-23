import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios';
import echarts from 'echarts'
import router from './router'
import $ from 'jquery'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import './assets/css/common.scss'
import store from './store';

Vue.config.productionTip = false

// Vue.protoType.$axios = axios;
// Vue.protoType.echarts = echarts;
axios.defaults.baseURL = '';

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(router)
Vue.prototype.$driver = Driver

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')