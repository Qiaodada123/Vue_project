<template>
	<div class="wrape">
		<div>
			<!-- <p class="left">桐乡</p> -->
			<router-link tag='p' to='/location' class='left'>桐乡</router-link>
			<!-- <a class="left">桐乡</a> -->
			<span class="title">{{title}}</span>
			<div class="right">
				<i class='iconfont icon-account'></i>
				<router-link to='/login' tag='span'>我的</router-link>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'navbar',
  data () {
    return {
    	title:'一传十传百'
    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
*{
	margin:0;
	padding:0;
}

.wrape{
	z-index:9;
	position:relative;
	width:100%;
	height:44px;
	line-height:44px;
	background-color: rgb(246, 71, 68);
	position:fixed;
	top:0;
	left:0;
	// margin-bottom:44px;
	div{
		color:#fff;
		// width:100%;
		padding:0 7px;
		font-size: 14px;
		.left{
			float: left;
			display: block;
			margin-right:85px;
		}
		.right{
			float:right
		}
		.title{
			font-size: 23px;
			width:155px;
			font-family: '微软雅黑'
			
		}

	}
	
	
}

</style>