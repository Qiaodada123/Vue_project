<template>
	<div class="wrap">
		<form class="content j-content active" id="j-login-username" method="post" action="http://m.1c10.cn/index.php?act=login&amp;op=index">
		    <div class="err-wrap j-err-wrap"></div>
		    <input type="hidden" name="ajax" value="1">
		    <input type="hidden" name="ref_url" value="http%3A%2F%2Fm.1c10.cn%2Findex.php%3Fact%3Dindex%26op%3Dindex">
		    <div>
		      <input type="text" placeholder="手机号/邮箱/用户名" id="j-name" name="name" value="" autocomplete="off" maxlength="50">
		      <i class="j-clear-input"></i>
		    </div>
		    <div>
		      <input type="password" placeholder="密码" id="j-passwd" name="passwd" value="" autocomplete="off" maxlength="32">
		      <i class="j-clear-input"></i>
		    </div>
		    <section class="btns clearfix">
		      <input type="submit" class="btn j-login-btn" value="登录">
			  <router-link  tag='a'  activeClass="qiaoactive"  to="/register" class="reg">
					免费注册
			  </router-link>
		     <!--  <a href="http://m.1c10.cn/index.php?act=register&amp;op=index" class="reg">免费注册</a> -->
		      <a href="http://m.1c10.cn/index.php?act=login&amp;op=resetpass" class="reset-passwd">忘记密码？</a>
		    </section>
		  </form>
	</div>
</template>

<script>
export default {

  name: 'accountLogin',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
    .wrap{
    	width:100%;
    }
    a {
        text-decoration: none;
        outline: 0;
    }
	.content {
	    padding: 0 10px;
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
	.btns {
	    height: 90px;
	    border-bottom: 1px solid #e0e0e0;
	    margin-top: 10px;

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
	    -webkit-box-sizing: border-box;
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