<template>
	<div class="wrape">

		<div class="aa">
			<header class="w-list-header j-fixed" id="j-list-header">
			    <router-link to="/home" tag="a" class="arrow-left"></router-link>
			   
			    <a class="cancel" id="j-cancel" href="javascript:;">取消</a>
			    <div class="search-wrap clearfix">
			      <form id="j-search-form" method="get" action="http://m.1c10.cn/list.html?u=1">
			        <input type="text" name="k" class="j-search-input" placeholder="请输入您想找的优惠" value="">
			        <i class="j-clear-input"></i>
			        <a class="submit" id="j-submit" href="javascript:;"></a>
			      </form>
			    </div>
			    <div class="j-search-suggestion search-suggestion"></div>
			</header>

			<div class="w-cate-main">
				<ul class="w-sort j-w-sort clearfix">
			        <li id="j-nav-category">全部分类</li>
			        <li id="j-nav-city">商圈</li>
			        <li id="j-nav-order">默认排序</li>
			     </ul>	
			</div>	
		</div>
		
		<!-- 列表		 -->
		<div id="j-hot-youhui">
			<ul>
				<div v-for='data in datalist' >
					<section class="w-goods">
						<a  class="clearfix">
							<div class="img-wrapper">
								<span class="tag-free-reservation"></span>
								<img class="lazy"  width="118" height="79" :src="data.image_240">
							</div>
							<ul>
								<li class="title">
									<span class="store">{{data.city_name}}</span>
									<span class="item-name">{{data.msg_name}}{{data.store_name}}</span>
								</li>
								<li class="info">{{data.subtitle}}</li>
								<li class="others">
									<ins>{{data.price}}</ins>
									<span class="slash">/</span>
									<del class="old-price">{{data.origin_price}}</del>
									<span class="bought">{{data.buy_num}}</span>
								</li>
							</ul>
						</a>
					</section>
				</div>
			</ul>
		</div>

		<!-- 列表		 -->	
		<!-- 分页 -->
			<div class="w-viewpage clearfix" id="j-showpage">
			    <a @click='prevPage' id="prev">上一页</a>
				<a @click='nextPage' id="next">下一页</a>
			</div>


		<!-- 分页 -->

		<!--脚部		 -->	
				<foot></foot>
		<!--脚部		 -->	
				
	</div>
</template>

<script>

import foot from '@/components/common/foot';
import axios from 'axios';
import { Indicator } from 'mint-ui';   //圈圈

export default {

  name: 'list',

  data () {
    return {
    	datalist:[],
    	currentpage:1,
    	countPage:0
    }
  },
  components:{
    foot:foot
  },
  methods:{
  	prevPage:function(){
  		var prev=document.getElementById("prev");
  		var next=document.getElementById("next");
  		if(this.currentpage<=1){
  			return
  		}
  		Indicator.open('Loading...');
  		this.currentpage--;
  		if(this.currentpage<=1){
  			prev.setAttribute('class','disabled');
  		}
  		console.log(this.currentpage)
  		axios.get(`/list.html?curpage=${this.currentpage}&ajax=1`).then(res=>{
  			//console.log(res.data);
  			this.datalist=res.data.data;
  			Indicator.close();
  			scrollTo(0,0);
  			
  		})
  		if(this.currentpage<this.countPage){
  			next.removeAttribute('class','disabled');
  		}
  		  			
  		  	
  			
  	},
  	nextPage:function(){
  		
  	
  		var prev=document.getElementById("prev");
  		var next=document.getElementById("next");
  		  
       
  		if(this.currentpage>=this.countPage){
  			next.setAttribute('class','disabled')
  			return 
  		}
  		Indicator.open('Loading...');
  		this.currentpage++;
		console.log(this.currentpage);

  		if(this.currentpage>=this.countPage){
  			next.setAttribute('class','disabled');
  		}
  		

  		axios.get(`/list.html?curpage=${this.currentpage}&ajax=1`).then(res=>{
  			//console.log(res.data);
  			this.datalist=res.data.data;
  			Indicator.close();
  			scrollTo(0,0);
  			
  		})
      
  		if(this.currentpage>1){
  			prev.removeAttribute('class','disabled')
  		}
  	}
  },
  mounted(){
  	if(this.currentpage=1){
  		var prev=document.getElementById("prev");
  		prev.setAttribute('class','disabled');
  	}
  	axios.get(`/list.html?curpage=${this.currentpage}&ajax=1`).then(res=>{
  		
  		//console.log(res.data,res.data.info.countPage);
  		this.datalist=res.data.data;
  		this.countPage=res.data.info.countPage;
  		
  	})

  }
}
</script>

<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
	}
	li{
		list-style: none;
	}
	.aa{
		margin-bottom:82px;
	}
	.clearfix::before, .clearfix::after {
	    display: table;
	    line-height: 0;
	    content: "";
	}
	.clearfix::after {
	    clear: both;
	}
	#j-list-header{
		position:fixed;
		top: 0;
	    left:0;
	}
	.j-fixed {
	   position:fixed;
	    width: 100%;
	    // z-index: 99999;
	}
	.w-list-header {
		a {
		    text-decoration: none;
		    outline: 0;
		}
	    height: 44px;
	    background: #F64744;
	    position: relative;
	    z-index: 99999;
	    .arrow-left {
	        float: left;
	        width: 13px;
	        height: 13px;
	        margin-left: 13px;
	        margin-top: 15px;
	        border: 2px solid #fff;
	        border-width: 2px 0 0 2px;
	        -webkit-box-sizing: border-box;
	        box-sizing: border-box;
	        -webkit-transform: rotate(-45deg);
	        transform: rotate(-45deg);
	    }
	     .cancel {
	        display: none;
	        float: left;
	        font-size: 14px;
	        color: #fff;
	        width: 55px;
	        height: 100%;
	        text-align: center;
	        line-height: 44px;
	        overflow: hidden;
	    }
	    form {
	        display: block;
	        margin-top: 0em;
	    }
	    .search-wrap {
	        margin: 0 10px 0 55px;
	        position: relative;
	        height: 100%;
	    }
	    .search-wrap input {
	        text-align: left;
	        height: 30px;
	        border: 0;
	        width: 100%;
	        margin-top: 7px;
	        background: #fff url('http://m.1c10.cn/templates/default/images/search.png') no-repeat 5px;
	        background-size: 17px auto;
	        padding-left: 25px;
	        -webkit-box-sizing: border-box;
	        box-sizing: border-box;
	    }
	}
	.w-cate-main {
	    position: fixed;
	    top: 44px;
	    width: 100%;
	    background: #FFF;
	    z-index: 99;
	    box-shadow: #ccc 0px 0px 5px;
	}
	.w-sort {
	    position: relative;
	    z-index: 9999;
	    height: 38px;
	    width: 100%;
	    background-color: #fff;
	    li {
	        width: 33.333333333333336%;
	        -webkit-box-sizing: border-box;
	        box-sizing: border-box;
	        float: left;
	        height: 38px;
	        font-size: 13px;
	        line-height: 38px;
	        color: #717171;
	        background-color: #fff;
	        text-align: center;
	        padding: 0 10px;
	        overflow-x: hidden;
	        white-space: nowrap;
	        text-overflow: ellipsis;
	    }
	}
	.w-sort li::after {
	    content: "";
	    display: inline-block;
	    vertical-align: -4px;
	    margin: 0 0 0 4px;
	    border-width: 5px 4px;
	    border-style: solid;
	    border-color: #fff;
	    border-top-color: #717171;
	}

	//列表
	  	#j-hot-youhui{
	  		width:100%;
	  		.goods-list-title{
	  			height: 39px;
			    line-height: 39px;
			    color: #303030;
			    font-size: 14px;
			    text-indent: 10px;
			    border-top: 1px solid #e0e0e0;
			    border-bottom: 1px solid #e0e0e0;
			    -webkit-box-sizing: border-box;
			    box-sizing: border-box;
			    background: #fff;
			    margin-top: 10px;

	  		}
	  		.w-goods {
			    background: #fff;
			    border-bottom: 1px solid #e0e0e0;
			    a {
			        display: block;
			        padding: 10px 8px;
			        text-decoration: none;
			        position: relative;
			        text-decoration: none;
			        outline: 0;
			        .img-wrapper {
			            float: left;
			            position: relative;
			            margin-right: 8px;
			            border: 1px solid #e0e0e0;
			            img {
			                display: block;
			            }
			            .tag-free-reservation {
			                position: absolute;
			                left: -2px;
			                top: -2px;
			                width: 44px;
			                height: 44px;
			                // background: url(/static/common/widget/goods/img/free-reservation-pink_247848a.png) no-repeat 0 0 transparent;
			                background-size: 44px 44px;
			            }
			        }
			        ul {
	        		    overflow: hidden;
	        		    li.title {
	        		        line-height: 16px;
	        		        position: relative;
	        		        .store {
	        		            float: right;
	        		            color: #9b9b9b;
	        		            font-size: 12px;
	        		            position: relative;
	        		            bottom: -3px;
	        		        }
	        		        .item-name {
	        		            white-space: nowrap;
	        		            overflow: hidden;
	        		            text-overflow: ellipsis;
	        		            display: block;
	        		            padding-bottom: 5px;
	        		            font-size: 16px;
	        		            color: #1a1a1a;
	        		        }
	        		    }
	        		    li.info {
	        		        font-size: 12px;
	        		        height: 32px;
	        		        line-height: 16px;
	        		        max-height: 40px;
	        		        color: #636363;
	        		        word-break: break-all;
	        		        margin-top: -1px;
	        		    }
	        		    li.others {
	        		        padding-top: 15px;
	        		        font-size: 12px;
	        		        line-height: 12px;
	        		        color: #9b9b9b;
	        		        ins {
	        		            font-size: 21px;
	        		            font-weight: 700;
	        		            color: #ff3c6e;
	        		            line-height: 5px;
	        		            text-decoration: none;
	        		        }
	        		        ins:before {
	        		            content: "￥";
	        		            font-size: 14px;
	        		        }
	        		        .slash {
	        		            margin-left: 4px;
	        		        }
	        		        .old-price {
	        		            font-size: 12px;
	        		            margin-left: 4px;
	        		            line-height: 5px;
	        		        }
	        		        .bought {
	        		            float: right;
	        		            padding-left: 12px;
	        		            background: url('http://m.1c10.cn/templates/default/images/person.png') no-repeat left center;
	        		            background-size: 8px auto;
	        		        }
	        		    }
	        		}
			    }
			}

	  	}
	//列表
	.w-viewpage {
	    padding: 10px;
	    text-align: center;
	    color: #AAA;
	    font-size: 12px;
	}
	.w-viewpage a {
		text-decoration: none;
		outline: 0;
	    display: inline-block;
	    height: 27px;
	    line-height: 27px;
	    padding: 0 11px;
	    border: 1px solid #CACACA;
	    margin: 0 6px;
	    color: #000;
	    font-size: 14px;
	    background-color: #fff;
	}
	.w-viewpage a.disabled {
	    color: #CCC;
	    border: 1px solid #CACACA;
	}

	
</style>