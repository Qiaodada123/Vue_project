<template>
	<div >
		<publicHeader></publicHeader>

		<section class="title clearfix" id="j-title">
			<router-link  tag='div'  activeClass="qiaoactive" to='/login/accountLogin'>账号登录</router-link>
			<router-link  tag='div' to='/login/phoneLogin' activeClass="qiaoactive"> 手机短信登录 </router-link>
		</section>

		 <router-view></router-view>  <!-- 路由容器 -->
<!-- 以下账号登录 -->
		  <section class="p-login-footer">
		    <div class="title">——————&nbsp;&nbsp;&nbsp;使用下列账号登录&nbsp;&nbsp;&nbsp;——————</div>
		    <a class="other_login qq" href="http://group.1c10.cn/shop/index.php?act=oauth&amp;op=qq"><span></span>QQ帐号登录</a>
		    <!-- <a class="other_login sina" href=""><span></span>新浪帐号登录</a> -->
		  </section>
<!-- 以下账号登录 -->
	</div>
</template>

<script>
import publicHeader from '@/components/common/publicHeader'

export default {

  name: 'login',

  data () {
    return {

    }
  },
  components:{
  	 publicHeader
  },
  mounted(){
  	this.$store.commit('changeHeadTitle','登录')
  }
}
</script>

<style lang="scss" scoped>
	
	.clearfix:after{
		content:'';
		display:block;
		clear: both;
		height:0;
		overflow: hidden;
		visibility: hidden;
	}
	a {
	    text-decoration: none;
	    outline: 0;
	}
	.title{
		z-index: 99;
		position: relative;
		margin-top:44px;
	}
	.title div{
		float: left;
	    width: 50%;
	    height: 100%;
	    box-sizing: border-box;
	    text-align: center;
	    font-size: 15px;
	    color: #9b9b9b;
		background:#F5F5F5;
	    line-height: 40px;
	   	border: 1px solid #e0e0e0;
	}
	.title .qiaoactive {
	    border: 0;
	    color: #F64744;
	    background:#fff;
	    border: 0;
	    color: #F64744;
	   
	}
	.p-login-footer {
	    margin-top: 30px;
	}
	.p-login-footer .title {
	    text-align: center;
	    margin-top: 14px;
	    color: #9b9b9b;
	    font-size: 13px;
	}
	.p-login-footer .other_login.qq span {
	    background: url('http://m.1c10.cn/templates/default/images/qq_login.png');
	    background-size: cover;
	}
	.p-login-footer .other_login {
	    display: block;
	    border: 1px solid #e0e0e0;
	    background-color: #fff;
	    margin: 10px 10px 5px;
	    border-radius: 3px;
	    text-align: center;
	    color: #303030;
	    padding-top: 4px;
	    padding-bottom: 8px;
	}
	.p-login-footer .other_login span {
	    display: inline-block;
	    width: 22px;
	    height: 24px;
	    position: relative;
	    top: 2px;
	    right: 10px;
	    font-size: 12px;
	    vertical-align: text-bottom;
	}
</style>