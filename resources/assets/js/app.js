
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue');
// window.VueRouter = require("vue-router");
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAMap from 'vue-amap';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$http = axios;        //配置请求方法
Vue.config.productionTip = false;   //停掉生产环境info

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'ee250a0046ba5e1cbb060277414f8c71',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});




Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('headers', require('./components/Headers.vue'));
Vue.component('footers', require('./components/Footers.vue'));
Vue.component('home', require('./components/Home.vue'));
Vue.component('adv', require('./components/Advertiser.vue'));
Vue.component('finance', require('./components/Finance.vue'));
Vue.component('account', require('./components/Account.vue'));
Vue.component('chart', require('./components/Chart.vue'));
// Vue.component('vmap', require('./components/Map.vue'));
Vue.component('hmap', require('./components/HeatMap.vue'));






const routes = [
    { path: '/', component: {template :"<home></home>"} },
    { path: '/finance', component: { template: '<finance></finance>' } },
    { path: '/example', component: { template: '<example-component></example-component>' } },
    { path: '/account', component: { template: '<account></account>' } },
    { path: '/ad', component: { template: '<adv></adv>' } },
    { path: '/example', component: { template: '<example-component></example-component>' } },
    { path: '/chart', component: { template: '<chart></chart>' } },
    { path: '/hmap', component: { template: '<hmap></hmap>' } }
];


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
// 设置默认请求地址
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/59016bc17a878d73716db00d';
// axios拦截
axios.interceptors.response.use(function (response) {
	return response;
}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)' ; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
    }else{
        err.message = '连接服务器失败!'
    }
    return Promise.reject(err);
});

const app = new Vue({
    el: '#app',
    router
});

console.log(app)