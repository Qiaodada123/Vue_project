<template>
	<div>
	
		<publicHeader></publicHeader>

		<!-- 下面 -->
			<article class="p-city" id="j-p-city">
			    <!--
			    <section class="search">
			      <form class="search-input-wrap" action="/city?returnUrl=%2F" method="post">
			        <input type="text" name="kw" class="j-search-input" autocomplete=off placeholder="请输入您想找的城市" id="SearchInput" maxlength="10" />
			        <i id="j-clear-input"></i>
			        <button type="submit" class="j-search-submit" id="Submit">搜索</button>
			      </form>
			    </section>
			    -->
			    <section class="locate">
			      <div class="title">定位城市</div>
			      <div class="cities clearfix" id="j-locate-wrap">
			        <div class="locating" id="j-locating" style="display: none;">
			          <div class="city-wrap" style="display:none">
			            <a href="javascirpt:void(0);" class="J-change-city" data-city="null">载入中</a>
			          </div>
			          <i class="loadinggif"></i>
			          <div>正在定位中...</div>
			        </div>
			        <div class="locate-fail" id="j-locate-fail">定位失败</div>
			      </div>
			    </section>

			    <section class="hot">
			      <div class="title">热门城市</div>
			      <div class="cities clearfix">
			      </div>
			    </section>

			    <section class="more" id="j-more">
			      <div class="title">全部城市</div>
			      <div class="letters clearfix" id="j-all-city">
			    <div class="letter">J</div>
			    <div class="letter-detail clearfix" id="LetterDetail_J" style="display:none;">
			      <div class="arrow-top"></div>
			      <div class="letter-title">J</div>
			      <div class="letter-cities">
			        
			          <a href="javascript:void(0);" class="J-change-city" data-city="jiaxing">嘉兴</a>
			        
			      </div>
			    </div>
			  
			    <div class="letter">T</div>
			    <div class="letter-detail clearfix" id="LetterDetail_T" style="display:none;">
			      <div class="arrow-top"></div>
			      <div class="letter-title">T</div>
			      <div class="letter-cities">
			        
			          <a href="javascript:void(0);" class="J-change-city" data-city="tongxiang">桐乡</a>
			        
			      </div>
			    </div>
			  </div>
			    </section>
			</article>
		<!-- 下面 -->
	</div>
</template>

<script>
import publicHeader from '@/components/common/publicHeader'
export default {

  name: 'location',

  data () {
    return {

    }
  },
  components:{
  	publicHeader
  },
  mounted(){
  	this.$store.commit('changeHeadTitle','桐乡');

  }
}
</script>

<style lang="scss" scoped>
	.clearfix::before, .clearfix::after {
	    display: table;
	    line-height: 0;
	    content: "";
	}
	#j-p-city{
		margin-top:44px;

	}
	a {
	    text-decoration: none;
	    outline: 0;
	}
	.p-city section .title {
	    height: 23px;
	    background: #F2F2F2;
	    font-size: 12px;
	    color: #303030;
	    text-indent: 10px;
	    line-height: 23px;
	}
	.p-city section .cities {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    padding: 8px;
	    background: #fff;
	    min-height: 52px;
	}
	.p-city section .cities .locating {
	    text-align: center;
	    color: #636363;
	    font-size: 12px;
	}
	.p-city section .cities .city-wrap {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 25%;
	    height: 36px;
	    float: left;
	    padding: 2px;
	    a {
	        -webkit-box-sizing: border-box;
	        box-sizing: border-box;
	        display: block;
	        width: 100%;
	        border: 1px solid #e0e0e0;
	        text-align: center;
	        height: 32px;
	        line-height: 32px;
	        color: #333;
	        font-size: 13px;
	        white-space: nowrap;
	        overflow: hidden;
	        text-overflow: ellipsis;
	    }
	}
	.p-city section .cities .locate-fail {
	    text-align: center;
	    color: #636363;
	    font-size: 12px;
	    line-height: 36px;
	}
	.p-city section .title {
	    height: 23px;
	    background: #F2F2F2;
	    font-size: 12px;
	    color: #303030;
	    text-indent: 10px;
	    line-height: 23px;
	}
	.p-city section .cities {
	     box-sizing: border-box;
	    padding: 8px;
	    background: #fff;
	    min-height: 52px;
	}
	.p-city .more {
	    margin-bottom: 20px;
	}
	.p-city .more .letters {
	    padding: 0 10px;
	    height:50px;
	    position: relative;
	    background: #fff;
	}
	.p-city .more .letters .letter {
	    width: 16.666666666666668%;
	    text-align: center;
	    float: left;
	    margin: 5px 0;
	    padding: 10px 0 5px;
	    color: #296da1;
	    font-size: 13px;
	}

</style>