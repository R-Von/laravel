
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
const Shape   = () => import('./components/Shape')




const routes = [
	{
		path:"/example",
		component:Example
	},
	{
		path:"/",
		component:Layout,
		redirect: '/index',
		children:[
			{
				path:"index",
				component:Index
			},
			{
				path:"article",
				component:Article
			},
			{
				path:"cater",
				component:Cater,
				meta:{requiresAuth:true }
			},
			{
				path:"shape",
				component:Shape
			}
		]
	}
]

const router = new VueRouter({
	routes
})


router.beforeEach((to, from, next) => {
	console.log(to.meta.requiresAuth);
	if (to.meta.requiresAuth) {  
		// console.log("1");
		 // next({
   //              path: from.path,
   //              query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
   //          })
   		next();
	}else{
		next();	
	}
	
})


const app = new Vue({
    router
}).$mount("#app");


