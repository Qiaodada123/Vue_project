<template>
	<div class="wrap">
		<form class="content phone-content j-content active" id="j-login-mobile" action="http://m.1c10.cn/index.php?act=login&amp;op=index" method="post">
		    <div class="err-wrap j-err-wrap"></div>
		    <input type="hidden" name="ajax" value="2">
		    <input type="hidden" name="ref_url" value="http%3A%2F%2Fm.1c10.cn%2Findex.php%3Fact%3Dindex%26op%3Dindex">
		    <div class="code-area">
		      <a href="javascript:;" class="btn btn-s" id="j-getphonecode">获取验证码</a>
		      <div class="input-wrap">
		        <input type="tel" placeholder="请输入11位手机号码" id="j-mobile" name="mobile" maxlength="11" value="" autocomplete="off">
		        <i class="j-clear-input"></i>
		      </div>
		    </div>
		    <div>
		      <input type="tel" placeholder="请输入收到的短信验证码" id="j-code" name="code" maxlength="6" value="" autocomplete="off">
		      <i class="j-clear-input"></i>
		    </div>
		    <section class="btns clearfix">
		      <input type="submit" class="btn j-login-btn" value="登录">
		        <router-link  tag='a'  activeClass="qiaoactive"  to="/register" class="reg">
		      		免费注册
		        </router-link>
		     <!--  <a href="http://m.1c10.cn/index.php?act=register&amp;op=index" class="reg">免费注册</a> -->
		      <a href="javascript:void(0)" class="reset-passwd">忘记密码？</a>
		    </section>
		  </form>
	</div>
</template>

<script>
export default {

  name: 'phoneLogin',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.content.active {
	    display: block;
	}
	.content {
	    padding: 0 10px;
	}
	a {
	    text-decoration: none;
	    outline: 0;
	}
	.content .err-wrap {
	    background: url('http://m.1c10.cn/templates/default/images/error-tip.png') no-repeat left center;
	    background-size: 13px;
	    text-indent: 19px;
	    color: #ff5565;
	    line-height: 24px;
	}
	.content>div {
	    margin-top: 10px;
	    position: relative;
	}
	.content input {
	    width: 100%;
	    box-sizing: border-box;
	    height: 44px;
	    line-height: 44px;
	    border: 1px solid #e0e0e0;
	    padding-left: 10px;
	    border-radius: 3px;
	}
	.phone-content .btn-s {
	    float: right;
	    width: 80px;
	    height: 42px;
	    font-size: 12px;
	    line-height: 42px;
	    border: 1px solid #e0e0e0;
	    color: #F64744;
	    background: #fff;
	}
	.btn {
	    display: inline-block;
	    width: 100%;
	    height: 36px;
	    line-height: 34px;
	    border-radius: 4px;
	    border: 1px solid #e0e0e0;
	    font-size: 16px;
	    color: #fff;
	    background-color: #F64744;
	    box-sizing: border-box;
	    appearance: none;
	    -moz-appearance: none;
	    -ms-appearance: none;
	    text-align: center;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    font-family: inherit;
	    cursor: pointer;
	}
	.phone-content .code-area .input-wrap {
	    margin-right: 90px;
	}
	.btns {
	    height: 90px;
	    border-bottom: 1px solid #e0e0e0;
	    margin-top: 10px;
	}
	.clearfix::before, .clearfix::after {
	    display: table;
	    line-height: 0;
	    content: "";
	}
	.btns .reg {
	    float: left;
	}
	.btns .reg, .btns .reset-passwd {
	    color: #296da1;
	    height: 20px;
	    margin-top: 10px;
	    font-size: 12px;
	}
	.btns .reset-passwd {
	    float: right;
	}
	
	 .btns .reg,.btns .reset-passwd {
	    color: #296da1;
	    height: 20px;
	    margin-top: 10px;
	    font-size: 12px;
	}
</style>