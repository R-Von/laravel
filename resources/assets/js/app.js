
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const Example = () => import('./components/ExampleComponent')
const Layout  = () => import('./components/Layout')
const Index   = () => import('./components/Index')
const Article = () => import('./components/Article')
const Cater   = () => import('./components/Cater')



const routes = [
	{
		path:"/example",
		component:Example
	},
	{
		path:"/",
		component:Layout,
		redirect: '/Index',
		children:[
			{
				path:"Index",
				component:Index
			},
			{
				path:"Article",
				component:Article
			},
			{
				path:"Cater",
				component:Cater
			}
		]
	}
]

const router = new VueRouter({
	routes
})
const app = new Vue({
    router
}).$mount("#app");





// const routes = [
//     {
//         path:"/",
//         component: { template:"<layout></layout>"},
//         meta: {
//             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//         },
//         redirect: '/adv_index',
//         children:[
//             {
//                 path:"adv_index",
//                 name:"首页",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<adv-index></adv-index>" }          
//             },
//             {
//                 path: "plan_create",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<plan-create></plan-create>" }  
//             },
//             {
//                 path: "plan_list",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<plan-list></plan-list>" }
//             },
//             {
//                 path: "plan_edit/:id",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<plan-edit></plan-edit>" }
//             },
//             {
//                 path: "adv_platform",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<adv-platform></adv-platform>" }
//             },
//             {
//                 path: "adv_look/:id",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<adv-look></adv-look>" }
//             },
//             {
//                 path: "txadv_create/:mode",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<advtx-create></advtx-create>" }
//             },
//             {
//                 path: "txadv_create/:mode/:id",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<advtx-create></advtx-create>" }
//             },
//             {
//                 path: "txadv_edit/:mode/:id",
//                 name: "广告",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<advtx-edit></advtx-edit>" }
//             },
//             {
//                 path: "creative_list",
//                 name: "创意",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<creative-list></creative-list>" }
               
//             },
//             {
//                 path: "creative_create",
//                 name: "创意",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<creative-create></creative-create>" }

//             },
//             {
//                 path: "creative_edit/:id/:gro_id",
//                 name: "创意",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<creative-edit></creative-edit>" }

//             },
//             {
//                 path: "sale_clue",
//                 name: "销售线索",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<sale-clue></sale-clue>" }

//             }, 
//             {
//                 path: "data_center",
//                 name: "数据中心",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<data-center></data-center>" }

//             },
//             {
//                 path: "population",
//                 name: "定向人群包",
//                 meta: {
//                     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//                 },
//                 component: { template: "<population></population>" }
               
//             },
//             {
//                 path: "example",
//                 component: { template: "<example-component></example-component>" }
//             }
//         ]
//     }
// ]