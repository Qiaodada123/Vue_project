<template>
	<div class="clearfix" id='head'>
	    <header class="w-header j-fixed">
	        <a class="arrow-wrap" href="javascript:history.back()"><span class="arrow-left"></span></a>
	        <router-link to='/home' tag='a' class='home'></router-link>
	        <div class="j-header-title text">{{headTitle}}</div>
	     </header>
	</div>
</template>

<script>
export default {

  name: 'publicHeader',

  data () {
    return {

    }
  },
  computed:{
  	headTitle(){
  		return this.$store.state.headTitle
  	}
  }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    outline: 0;
}

.clearfix:after{
	content:'';
	display:block;
	clear: both;
	height:0;
	overflow: hidden;
	visibility: hidden;
}
	.j-fixed {
		position: fixed;
	    width: 100%;
	    top: 0;
	    height:44px;
	    z-index: 9;
	   
	   
	}
	.w-header {
	    height: 44px;
	    background: #F64744;
	}
	.w-header .arrow-wrap {
	    float: left;
	    height: 100%;
	    width: 15px;
	    padding: 0 20px;
	    .arrow-left {
	        display: block;
	        width: 13px;
	        height: 13px;
	        margin-top: 15px;
	        border: 2px solid #fff;
	        border-width: 2px 0 0 2px;
	        -webkit-box-sizing: border-box;
	        box-sizing: border-box;
	        -webkit-transform: rotate(-45deg);
	        transform: rotate(-45deg);
	    }
	}

	.w-header .home {
	    float: right;
	    width: 37px;
	    height: 100%;
	    background: url('http://m.1c10.cn/templates/default/images/home.png') no-repeat center;
	    background-size: 21px;
	}


	.w-header .text {
	    margin: 0 100px;
	    text-align: center;
	    line-height: 44px;
	    font-size: 18px;
	    color: #fff;
	}
</style>