
<template>
	<div>
		Advertiser

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
