<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
  name: 'App',
  components:{
    Home 
  }
}
</script>

<style>

body {
		/*background-color: #324057;*/
		margin: 0px;
		padding: 0px;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		/*font-weight: 400;*/
		font-size:14px !important;
		width: 100%;
		height: 100%;
		background: url(assets/bg.jpg) cover;
		-webkit-font-smoothing: antialiased;

    background: url('assets/bg.jpg');
    repeat: no-repeat;
    background-attachment:fixed;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/bg.jpg', sizingMethod='scale');
    -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/bg.jpg', sizingMethod='scale');
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
		
	}
#app{
  height: 100%;
}
</style>
