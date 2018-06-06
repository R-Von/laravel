
<template>
		<el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1" :route="{path: '/' }">首页</el-menu-item>
		  <el-menu-item index="2" :route="{path: '/example'}">示例</el-menu-item>
		  <el-menu-item index="3" :route="{path: '/finance'}">财务管理</el-menu-item>
		  <el-menu-item index="4" :route="{path: '/account'}">账号管理</el-menu-item>
		  <el-menu-item index="5" :route="{path: '/ad'}">广告管理</el-menu-item>
		  <el-menu-item index="6" :route="{path: '/chart'}">图表</el-menu-item>
		  <el-menu-item index="6" :route="{path: '/hmap'}">图表</el-menu-item>
		  
		  <!-- <el-menu-item index="6" route="/">销售线索推送配置</el-menu-item> -->

		 <!--  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
		</el-menu>
</template>
<script>
	export default{
		data(){
			return{
				activeIndex: '1',
			}
		},
		methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>
<style>
/*	header{
		width:100%;
		text-align: center;
		height:120px;
		line-height: 120px;
		background: #dedede;
		font-size: 50px;
		overflow: auto;
	}
*/
</style>
