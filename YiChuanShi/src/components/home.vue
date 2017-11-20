<template>
  <div class="wraper">
    <navbar></navbar>
		<section class="w-index-search">
			<div class="box-search">
				<a >
					<i class='iconfont icon-search'></i>
          <router-link to="/list" tag="span"  >输入商家名字/商品名称获取优惠</router-link>
					
				</a>
			</div>
		</section>
		<div class="lbo">
			<swipe class="my-swipe">
			  <swipe-item ><img src='../assets/img/b1.jpg'></swipe-item>
			  <swipe-item ><img src='../assets/img/b2.jpg'></swipe-item>
			  <swipe-item><img src='../assets/img/b3.jpg'></swipe-item>
			</swipe>
		</div>
		<!--菜单 -->
		<ul class=" widget-index-catg clearfix">
			<li v-for='data in datalist' class="wrap wrap8 clearfix">
				<a class="item item1">
					<div class="img cate-meishi">
						<img :src='data.icon_url'></i>
					</div>
					<span class="text">{{data.name}}</span>
				</a>
			</li>
		</ul>
		<!--菜单 -->
		<!--列表 -->
		<div id="j-hot-youhui">
			<section class="goods-list-title">本周推荐</section>
			<ul >
            <div v-for='data in datainfo' @click='handleClick(data.id)'>
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
		<!--列表 -->
		<!--加载更多-->
		<div class="w-viewmore clearfix">
        <router-link to="/list" tag="a" activeClass="qiaoactive" class="op-btn more">查看全部优惠</router-link>
				
				<a href="javascript:window.scrollTo(0, 0);" class="op-btn gotop">返回顶部</a>
		</div> 
		<!--加载更多-->

    <!--最底部--><foot></foot><!--最底部-->
	</div>
</template>

<script>
import navbar from '@/components/common/navbar';

import foot from '@/components/common/foot';
require('vue-swipe/dist/vue-swipe.css');  //导入css模块
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios';
import router from '@/router'
export default {

  name: 'home',

  data () {
    return {
    	datalist:[],
    	datainfo:[],

    }
  },
  methods:{
      handleClick(id){
        console.log(id);
        router.push(`/detail/${id}`)   //动态路由匹配，不同id跳转到不同的详情页面
      }
  },
  components:{
  	'swipe': Swipe,
   'swipe-item':SwipeItem,
    foot:foot,
    navbar
  },
  mounted(){
      axios.get('/index.php?act=index&op=index&ajax=1').then(res=>{
      	console.log(res.data,res.data.data);
      	this.datainfo=res.data.data;
      	for(var i=0;i<res.data.category.length;i++){
      		if(i%2==1){
      			this.datalist.push(res.data.category[i]);
      		}
      	}
      })


      
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
  *{
  	margin: 0;
  	padding: 0
  }
  li{
  	list-style:none
  }
  .clearfix:after{
  	content:'';
  	display:block;
  	clear: both;
  	height:0;
  	overflow: hidden;
  	visibility: hidden;
  }
  .wraper{
  	width: 100%;
  	margin-top:44px;
    // margin-bottom:100px;
  	.w-index-search {
  	    position: relative;
  	    padding: 10px;
  	    background: #fff;
  	    .box-search {
  	        border-radius: 3px;
  	        background: #FFF;
  	        height: 32px;
  	        line-height: 32px;
  	        position: relative;
  	        border: 1px solid #e0e0e0;
  	        a {
  	            display: block;
  	            color: inherit;
  	            height: 100%;
  	            color: #666;
  	            text-decoration: none;
  	            outline: 0;
  	            font-size: 14px;
  	            line-height:32px;
  	            i{
  	            	font-size: 18px;
  	            	font-weight: 500;
  	            	padding-left:8px;
  	            	color:#BEBEBE
  	            }
  	        }
  	    }
  	}
  	.lbo{
  		padding:0px 8px;
  		height:111px;
  		img{width:100%};
  		margin:10px 0

  	}
  	.widget-index-catg{
  		display:flex;
  		flex-wrap:wrap;
  		height:158px;
  		li{
  			width:25%;
  			border:1px solid #e0e0e0;
  			box-sizing:border-box;
  			font-size: 12px;
  			color: #303030;
  			background: #fff;
  			padding-left:30px;
  			a:{
  				display:block;
  			}
  			.img img{
  			    width: 40px;
  			    height: 40px;
  			    margin: 10px auto 0;
  			   
  			}
  		}
  	}
  	
  	
  	// 列表
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
  	//查看全部
  	.w-viewmore {
  		a{
  			text-decoration: none;
  		}
  	    padding: 10px;
  	    .more {
  	        float: left;
  	        width: 213px;
  	        cursor: pointer;
  	        color: #303030;
  	    }
  	    .gotop {
  	        float: right;
  	        width: 78px;
  	        cursor: pointer;
  	        color: #303030;
  	    }
  	    .op-btn {
  	        border: 1px solid #e0e0e0;
  	        border-radius: 3px;
  	        text-align: center;
  	        height: 29px;
  	        line-height: 29px;
  	        font-size: 13px;
  	        background-color: #fff;
  	    }
  	}
  	//查看全部
  	
  }
</style>

