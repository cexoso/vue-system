<template>
	<div class="topexit">
		<div class="topexit-main">
			<router-link to="/">这里是名字</router-link> |
			<router-link to="/login">退出</router-link>
		</div>
	</div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang='scss'>
.topexit{
	background-color: #324157;
	height: 30px;
	line-height: 30px;
    overflow: hidden;
	.topexit-main{
		float: right;
        margin-right: 15px;
		color: #9ba7b5;
		a{
			color: #9ba7b5;
			padding-right: 10px;
			margin-left: 10px;
		}
	}
}
</style>
