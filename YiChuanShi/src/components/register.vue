<template>
	<div>
		<publicHeader></publicHeader>

		<!-- 注册 -->
			<article class="p-reg p-login-common" id="j-reg">
			  <form class="content phone-content j-content active" id="j-form" action="http://m.1c10.cn/index.php?act=register&amp;op=doregister" method="post">
			    <input type="hidden" name="ajax" value="1">
			    <input type="hidden" name="formhash" value="19-2YLuSuGfFp1kloZIQBtDx7rb3dr1">    <input name="nchash" type="hidden" value="e6b0691b">
			    <div class="err-wrap j-err-wrap"></div>
			    <div class="code-area">
			      <a href="javascript:;" class="btn btn-s" id="j-getphonecode">获取验证码</a>
			      <div class="input-wrap">
			        <input type="text" placeholder="请输入11位手机号码" class="j-input j-mobile" id="j-mobile" name="mobile" maxlength="11" autocomplete="off" pattern="[0-9]*" value="">
			        <i class="j-clear-input"></i>
			      </div>
			    </div>
			    <div>
			      <input type="text" placeholder="请输入收到的短信验证码" class="j-input j-code" name="code" maxlength="6" autocomplete="off" pattern="[0-9]*">
			      <i class="j-clear-input"></i>
			    </div>
			    <div class="passwd">
			      <input type="password" placeholder="请输入您的密码，长度至少6位" class="j-input j-passwd" name="passwd" maxlength="32" autocomplete="off" value="">
			      <i class="j-clear-input"></i>
			      <a href="javascript:;" class="show-passwd j-showpasswd">显示</a>
			    </div>
			  </form>
			</article>
		<!-- 注册 -->
		<!-- footer -->
			<footer class="p-reg-footer">
			  <section class="btns clearfix">
			    <a href="javascript:;" class="btn" id="j-submit">完成注册</a>
			  </section>
			  <div class="xieyi">
			    <a href="javascript:;" class="checkbox j-checkbox checked"></a>
			    <span>我已阅读并同意</span>
			    <a href="http://m.1c10.cn/index.php?act=login&amp;op=agreement" class="link">《用户协议》</a>
			  </div>
			</footer>
		<!-- footer -->
	</div>
</template>

<script>
import publicHeader from '@/components/common/publicHeader'
export default {

  name: 'register',

  data () {
    return {

    }
  },
  components:{
  	publicHeader
  },
  mounted(){
  	this.$store.commit('changeHeadTitle','注册')
  }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    outline: 0;
}
	.p-reg {
	    background: #fff;
	    border-bottom: 1px solid #e0e0e0;
	    border-top: 1px solid #e0e0e0;
	    padding-bottom: 15px;
	    overflow: hidden;
	    margin-top: 55px;
	}
	.p-login-common .content.active {
	    display: block;
	}
	.p-login-common .content {
	    padding: 0 10px;
	    display: none;
	}
	.p-login-common .content input {
	    width: 100%;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 44px;
	    line-height: 44px;
	    border: 1px solid #e0e0e0;
	    padding-left: 10px;
	    border-radius: 3px;
	}
	.p-login-common .content .err-wrap {
	    background: url('http://m.1c10.cn/templates/default/images/error-tip.png') no-repeat left center;
	    background-size: 13px;
	    text-indent: 19px;
	    color: #ff5565;
	    line-height: 24px;
	}
	.p-login-common .content>div {
	    margin-top: 10px;
	    position: relative;
	}
	.p-login-common .phone-content .btn-s {
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
	.p-login-common .phone-content .code-area .input-wrap {
	    margin-right: 90px;
	}
	.p-login-common .phone-content .passwd input {
	    padding-right: 85px;
	}
	.p-login-common .phone-content .show-passwd {
	    position: absolute;
	    top: 6px;
	    right: 6px;
	    display: block;
	    width: 44px;
	    height: 30px;
	    line-height: 28px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    border: 1px solid #e0e0e0;
	    color: #9b9b9b;
	    text-align: center;
	}
	.clearfix::before, .clearfix::after {
	    display: table;
	    line-height: 0;
	    content: "";
	}
	// footer
		.p-reg-footer .btns {
		    padding: 0 10px;
		    height: 55px;
		    margin-top: 20px;
		}
		.p-reg-footer .btns .btn {
		    background: #F64744;
		    color: #fff;
		    border: 0;
		}
		.p-reg-footer .xieyi {
		    padding: 0 10px;
		    height: 30px;
		    line-height: 30px;
		    span {
		        float: left;
		        display: block;
		    }
		}
		.p-reg-footer .xieyi .checked {
		    background: #fddfe7 url('http://m.1c10.cn/templates/default/images/duigou.png') no-repeat center;
		    background-size: 10px;
		}
		.p-reg-footer .xieyi .checkbox {
		    display: block;
		    float: left;
		    width: 14px;
		    height: 14px;
		    box-sizing: border-box;
		    border: 1px solid #F64744;
		    // background: #FDDFE7;
		    margin-right: 10px;
		    margin-top: 8px;
		}
		.p-reg-footer .xieyi .link {
		    display: block;
		    float: left;
		    color: #296da1;
		}
	//footer
	
</style>