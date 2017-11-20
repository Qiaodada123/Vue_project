<template>
	<div class="foot">
	   <!-- 底部一 -->
		<section class="login">
		<div class="login-wrap">
			<router-link to='/login' tag='a' class="btn login-btn">
				登录
			</router-link>
			<router-link to='/register' tag='a' class="btn ">注册</router-link>
		    
		</div>
		<div class="city-wrap">
			<a class="btn text" href="http://m.1c10.cn/city-index-ename-.html">
				<span>城市：</span>
			</a>
			<a href="http://m.1c10.cn/city-index-ename-.html" class="btn">
				<span>桐乡</span>
				<span></span>
			</a>
		</div>
		</section>
		<section class="links">
			<a href="/" class="link">首页</a>
			<a href="/" class="link">电脑版</a>
			<a href="http://m.1c10.cn/?v=app" class="link">客户端</a>
			<a href="/" class="link">关于我们</a>
			<a href="/" class="link">信息反馈</a>
			<a href="/" class="link">帮助</a>
		</section>
		<section class="copyright"><span>©1c10.cn 嘉兴壹传网络科技有限公司</span></section>
		<!-- 底部一 -->

        <!-- 底部二 -->
		<div class="w-banner-bottom">
			<a href="javascript:void(0)" class="link" target="_blank"></a>
		</div>
		<!-- 底部二 -->


	</div>
	
	
	
</template>

<script>
export default {

  name: 'foot',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.foot{
		width:100%;
		a {
		    text-decoration: none;
		    outline: 0;
		}
	}
	.foot .login {
	    background: #fff;
	    height: 31px;
	    padding: 10px;
	   border: 1px solid #e0e0e0;
	}
	.foot .login .btn {
	    width: 60px;
	    height: 31px;
	    line-height: 31px;
	    background: #FAFAFA;
	    color: #296da1;
	    font-size: 13px;
	    display: inline-block;
	    text-align: center;
	    border-radius:5px;
	    text-decoration: none;
	    border: 1px solid #e0e0e0;
	}
	.foot .login .login-wrap {
	    float: left;
	    
	}
	.foot .login .city-wrap {
	    float: right;
	    line-height: 31px;
	    .text {
	        border: 0;
	        background: 0 0;
	        color: #636363;
	        padding-right: 4px;
	    }
	    
	}

	.foot .links {
	    font-size: 12px;
	    margin: 15px auto 0;
	    height: 12px;
	    width: 100%;
	    line-height: 12px;
	    display: -webkit-box;
	    .link {
	        color: #296da1;
	        -webkit-box-flex: 1;
	        display: block;
	        text-align: center;
	        height: 12px;
	        padding: 0 8px;
	         box-sizing: border-box;
	        border-right: 1px solid #e0e0e0;
	    }
	}
	section.copyright{
		font-size: 12px;
		width:305px;
		color:#9E9E9E;
		padding-left:70px;
		margin:15px 0 30px
	}

	.w-banner-bottom {
	    position: fixed;
	    bottom: 0;
	    width: 100%;
	    padding-top: 14%;
	    z-index: 11;
	}
	.w-banner-bottom .link {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background-image: url('http://m.1c10.cn/templates/default/images/app_down.jpg?v=1');
	    background-repeat: no-repeat;
	    background-position: 0 0;
	    background-size: 100% 100%;
	}
	
	a {
	    text-decoration: none;
	    outline: 0;
	}

















</style>