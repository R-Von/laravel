<template>
	
<div>
<nav>
    <a :class="num===1?'male selected':'male'"  @click="navClick(1)">男子</a>
    <a :class="num===2?'female selected':'female'"  @click="navClick(2)">女子</a>
</nav>
<main>
    {{num===1?'男子':'女子'}}
</main>  
</div>

</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				num:1
			}
		},
		methods:{
			navClick(num){
				// if(){}
				this.num = num;
			}
		},
		mounted(){
			console.log("111")
		}
	}
	

</script>
<style type="text/css">
	

nav {
    position: relative;
    z-index: 1;
    padding-left: 1em;
}
nav > a {
    position: relative;
    display: inline-block;
    padding: .3em 1em 0;
    color: inherit;
    text-decoration: none;
    margin: 0 -.3em;
} 
nav > a::before,
main {
    border: .1em solid rgba(0,0,0,.4);
}
nav a::before {
    content: ''; 
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    border-bottom: none;
    border-radius: .5em .5em 0 0;
    background: #ccc linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
    box-shadow: 0 .15em white inset;
    transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
}
nav a.selected { z-index: 2;}
nav a.selected::before {
    background-color: #eee;
    margin-bottom: -.08em;
}
main {
    display: block;
    margin-bottom: 1em;
    background: #eee;
    padding: 1em;
    border-radius: .15em;
}
.male::before{

}
.female::before{
	transform-origin: bottom right; 

 
}
</style>