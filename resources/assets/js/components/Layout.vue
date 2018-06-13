<template>
	<el-container>
	  <el-header>
	  	<el-menu  router class="el-menu-demo" mode="horizontal" >
		  <el-menu-item index="1" route="index">首页</el-menu-item>
		  <el-menu-item index="2" route="article">文章</el-menu-item>
		  <el-menu-item index="3" route="cater">分类</el-menu-item>
		  <el-menu-item index="4" route="shape">形状</el-menu-item>

		</el-menu>
	  </el-header>
	  <el-main>
	  	<router-view></router-view>	

	  </el-main>
	  <el-footer>Footer</el-footer>
	</el-container>
</template>
<script>

	export default {

	}

</script>
<style>
	/*body{}*/
	.el-main{
		min-height:400px;
		font-size: 50px;
		line-height: 100px;
		text-align: center;
	}
	.el-footer{
		text-align: center;
	}
</style>