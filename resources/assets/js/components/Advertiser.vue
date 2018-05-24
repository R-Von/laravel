<style>
	/*section{
		width: 100%;
		height:300px;
		background: #b3c0d1;
		line-height: 300px;
		text-align: center;
		font-size: 100px;
	}*/
</style>
<template>
	<div>
		<el-button type="success" @click="request(0)">主要按钮(0)</el-button>
		<el-button type="primary" @click="request(100)">主要按钮(100)</el-button>
		<el-button type="primary" @click="request(101)">主要按钮(101)</el-button>
		<el-button type="primary" @click="request(102)">主要按钮(102)</el-button>
<!--   <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button> -->
<h1>{{data}}</h1>

</div>
</template>
<script>
	export default{
		data(){
			return {
				data:""
			}
		},
		methods:{
			request(state){
				this.$http.get(`/test${state}`).then(res=>{
					console.log(res);
					this.data = res.data.data;
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>
