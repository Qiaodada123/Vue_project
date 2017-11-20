<template>
   <div class='head'>
   		<publicHeader ></publicHeader>
   		<!-- 中间 -->
   			<article class="p-detail" id="j-deal">
          <div class="w-product-image">
   			    <div class="wrapper">
   			      <div class="label"></div>
   			      <img :src='youhui_info.image_1280' width="320" height="200">
   			    </div>
   			  </div>

   			  <div class="w-product-desc">
   			    <div class="segment buy-segment">
   			      <span class="current-price">
   			        <em class="price-value">{{youhui_info.price}}</em>
   			      </span>
   			      <span class="original-price">
   			        <del>{{youhui_info.origin_price}}</del>
   			      </span>
   			      <div class="buy-wrapper">
   			        <div class="w-buy-btn-normal w-buy-btn-normal-small" id="j-buy-ctn">
   			          <a href="javascript:void(0);" class="buy-btn j-buy" :data-id="youhui_info.id">立即抢购</a>
   			        </div>
   			      </div>
   			    </div>
   			    <div class="segment summary-segment">
   			    <div class="title">{{youhui_info.store_name}}{{youhui_info.msg_name}}</div>
   			      <div class="description">{{youhui_info.title}}</div>
   			    </div>
   			    <div class="segment desc-segment">
   			      <div class="block">
   			        <span class="bought-num"><i class="icon boughtNum"></i>{{youhui_info.buy_num}}人已购买</span>
   			      </div>
   			    </div>
   			  </div>

   			  
   			    <a class="w-ugc-preview clearfix w-ugc-preview-no-rating" href="javascript:;">
   			      <div class="ugc-rate">
   			        <div class="w-rate-star">
   			          <div class="rate-star-gray rate-star-gray16">
   			            <div class="rate-star-real j-rate-star-real" style="width:-7px;"></div>
   			          </div>
   			        </div>
   			        <div class="rate-score">暂无评价</div>
   			      </div>
   			      <!-- <div class="ugc-total ugc-total-arrow-right">0条评论</div> -->
   			    </a>
   			  

   			  <div class="product-shop-block">
   			    <section id="j-product-shop" class="w-product-shop">
   			      <div class="shop-info">
   			        <section class="w-shop-poi">
   			          <a href="http://m.1c10.cn/index.php?act=store&amp;op=index&amp;id=120" class="poi">
   			            <p class="shop-title">{{store.name}}</p>
   			            <p class="shop-address">{{store.address}}</p>
   			            
   			          </a>
   			          <a href="javascript:void(0);" class="tel j-tel" data-tel="[{&quot;tel&quot;:&quot;0573-88079887&quot;,&quot;tag&quot;:&quot;&quot;},{&quot;tel&quot;:&quot;795661&quot;,&quot;tag&quot;:&quot;市府网&quot;},{&quot;tel&quot;:&quot;15888351988&quot;,&quot;tag&quot;:&quot;&quot;}]"></a>
   			        </section>
   			      </div>
   			      
   			    </section>
   			  </div>

   			  
   			    <section class="w-rich-text" v-if='table_list[0]'>
   			      <div class="rich-wrapper deal-detail">
   			        
   			          <div class="rich-content">
   			     <dt class="rich-title">{{table_list[0].name}}<span class="fr">¥{{youhui_info.origin_price}}<del>¥{{youhui_info.price}}</del></span></dt>
   			            
   			              
   			              <dd>
   			                <dl>
   			                  
   			                    <dd class="detail-group">
   			                      <span class="left">{{table_list[0].data[0].list[0].name}}</span>
   			                      <span class="middle">{{table_list[0].data[0].list[0].amount}}</span>
   			                      <span class="right">元</span>
   			                    </dd>
   			                  
   			                </dl>
   			              </dd>
   			            
   			            
   			          </div>
   			        
   			        <a class="rich-look-lottery" href="http://m.1c10.cn/index.php?act=deal&amp;op=detail&amp;id=6206"><span class="right-arrow">查看图文详情</span></a>
   			      </div>
   			    </section>
   			  

   			  <section class="w-rich-text">
   			    <div class="rich-title j-block-title">消费提示</div>
   			    <div class="rich-content rich-wrapper" >
   			     <div v-for='data in buyinfo_list'>   <!-- 循环遍历 -->
   			        <div class="title">{{data.title}}</div>
   			        <ol class="list">
   			            <li>-{{data.info[0]}}</li>
   			        </ol>
   			      </div>
   			    </div>
   			  </section>

   			  <div class="w-buy-btn-normal w-buy-btn-normal-large" id="j-buy-ctn">
   			    <a href="javascript:void(0);" class="buy-btn j-buy" data-id="6206">免费下载</a>
   			  </div>

   			  
   			  <section class="tg-list rich-text">
           <div v-for='data in youhui_other'>  <!-- 循环遍历 -->
   			    <div class="title rich-title">本商家其他优惠</div>
   			    <div class="tg-content">
   			     <!--  <div v-for='data in youhui_other'> -->
   			        <a href="http://m.1c10.cn/index.php?act=deal&amp;op=index&amp;id=6205" class="tg-item">
   			          <div class="price">
   			            <span class="mark">¥</span>{{data.price}}
   			          </div>
   			          <div class="tg-name" id='can'>{{data.subtitle}}</div>
   			        </a>
   			      </div>
   			    </div>
   			  </section>
   			  </article>
   		<!-- 中间 -->
   		<!-- footer -->
   		<foot></foot>
   		<!-- footer -->
   </div>
</template>

<script>
import publicHeader from '@/components/common/publicHeader';
import foot from '@/components/common/foot';
import {mapGetters} from 'vuex';

export default {

  name: 'detail',

  data () {
    return {

    }
  },
  mounted(){
  	this.$store.commit('changeHeadTitle','优惠详情');
  	console.log(this.$route.params.qiaoid,123)
  	var id=this.$route.params.qiaoid;
  	// 通过dispatch发送消息，在actions中做数据请求
  	this.$store.dispatch('getDetailById',`/index.php?act=deal&op=index&id=${id}&ajax=1`);
  	
  },
  components:{
  		publicHeader,
  		foot
  },
  computed:{
    ...mapGetters(['buyinfo_list','store','table_list','youhui_info','youhui_other'])
  }
}
</script>

<style lang="scss" scoped>
.head{
  width:375px;
}
a{
  text-decoration:none;
}
   // 大图
   .w-product-image {
       text-align: center;
       margin: 0 auto;
       max-width: 320px;
       position: relative;
       margin-top:44px;
       // border-bottom: 1px solid #e0e0e0;
       .wrapper {
           position: relative;
           // padding-bottom: 60%;
           overflow: hidden;
       }
   }
 // 大图
 // 立即抢购
 .w-product-desc .buy-segment .current-price:before {
    content: "￥";
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -4px;
}
.w-product-desc .buy-segment .original-price:before {
    content: "/";
    line-height: 1;
    position: relative;
    top: -2px;
}
 .w-product-desc {
     background-color: #fff;
 }
 .w-product-desc .segment:first-of-type {
     padding: 0 10px;
     margin: 0;
     border-bottom: 1px solid #e0e0e0;
 }
 .w-product-desc .buy-segment {
     height: 56px;
     line-height: 56px;
     position: relative;
     .original-price {
         color: #9b9b9b;
         font-size: 15px;
         position: relative;
         left: -3px;
     }
     del {
         text-decoration: line-through;
     }
 }
 .w-product-desc .buy-segment .current-price {
     color: #F64744;
     font-weight: 700;
    .price-value {
         font-size: 35px;
         font-style:normal;
     }
 }
 .w-product-desc .buy-segment .buy-wrapper {
     position: absolute;
     right: 10px;
     top: 8px;
 }
 .w-buy-btn-normal-small {
     width: 100px;
     height: 40px;
 }
 .w-buy-btn-normal .buy-btn {
     display: block;
     height: 40px;
     line-height: 40px;
     border-radius: 4px;
     background: #F64744;
     text-align: center;
     color: #fff;
     font-size: 18px;
 }
 // 立即抢购
 .w-product-desc .summary-segment {
     color: #303030;
 }

 .w-product-desc .segment {
     padding: 12px 0;
     margin: 0 10px;
     border-bottom: 1px solid #e0e0e0;
 }
 .w-product-desc .desc-segment .block {
     height: 25px;
     line-height: 25px;
     font-size: 12px;
     color: #636363;
 }
 .w-product-desc .summary-segment .title {
     font-size: 18px;
     font-weight: 700;
 }

 .w-product-desc .summary-segment .description {
     font-size: 14px;
 }
 .w-product-desc .desc-segment .block .bought-num, .w-product-desc .desc-segment .block .remaining-days {
     float: left;
     width: 50%;
 }
 .w-product-desc .desc-segment .block {
     height: 25px;
     line-height: 25px;
     font-size: 12px;
     color: #636363;
 }
 .w-product-desc .desc-segment .icon.boughtNum {
     background: url('http://m.1c10.cn/templates/default/images/boughtNum.png') no-repeat;
     background-size: 16px 16px;
 }

 .w-product-desc .desc-segment .block .icon {
     width: 16px;
     height: 16px;
     position: relative;
     top: 3px;
     display: inline-block;
     margin-right: 5px;
 }
 .w-ugc-preview {
     display: block;
     width: 100%;
     padding: 10px;
         padding-bottom: 35px;
     border-bottom: 1px solid #e0e0e0;
     background: #fff;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
 }
 .w-ugc-preview .ugc-rate {
     float: left;
     height: 24px;
     line-height: 24px;
 }
 .w-rate-star {
     float: left;
     height: 24px;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     padding-top: 1px;
 }
 .w-rate-star .rate-star-gray16 {
     width: 111px;
     height: 16px;
 }

 .w-rate-star .rate-star-gray {
     display: inline-block;
     background: url('http://m.1c10.cn/templates/default/images/rate_star_gray.png') no-repeat;
     background-size: auto 100%;
 }
 .w-ugc-preview-no-rating .ugc-rate .rate-score {
     color: #9b9b9b;
     font-size: 14px;
 }
 

 .w-ugc-preview .ugc-rate .rate-score {
     float: left;
     // color: #ffac43;
     font-size: 14px;
     margin-left: 9px;
 }
 .w-ugc-preview-no-rating .ugc-total {
     // display: none;
 }
 .w-ugc-preview .ugc-total-arrow-right {
     background: url('http://m.1c10.cn/templates/default/images/arrow-right.png') no-repeat right center;
     background-size: 5px auto;
     padding-right: 10px;
 }

 .w-ugc-preview .ugc-total {
     float: right;
     height: 24px;
     font-size: 14px;
     line-height: 24px;
     color: #303030;
 }


 .p-detail .product-shop-block {
     margin-top: 10px;
 }
 .w-product-shop {
     border-top: 1px solid #e0e0e0;
     border-bottom: 1px solid #e0e0e0;
     background-color: #fff;
 }

 .w-shop-poi:last-child {
     border-bottom: 0;
 }

 .w-shop-poi {
     padding: 13px 67px 12px 10px;
     position: relative;
     border-bottom: 1px solid #e0e0e0;
     background-color: #fff;
 }
 .w-shop-poi .poi {
     position: relative;
     display: block;
     border-right: 1px solid #e0e0e0;
 }

 .w-shop-poi a {
     color: #000;
 }
 .w-shop-poi .poi .shop-title {
     padding-left: 15px;
     font-size: 15px;
     font-weight: 700;
     background: url('http://m.1c10.cn/templates/default/images/icon-path.png') no-repeat;
     background-size: 12px 17px;
     margin-bottom: 4px;
 }
 .w-shop-poi .poi .shop-address {
     font-size: 15px;
     line-height: 19px;
     min-height: 38px;
     padding-right: 4px;
     color: #878787;
 }
 // wu----------------------------------------
 .w-shop-poi .tel {
     display: block;
     width: 57px;
     position: absolute;
     top: 12px;
     bottom: 12px;
     right: 10px;
     background: url('http://m.1c10.cn/templates/default/images/icon-tel.png') no-repeat center center;
     background-size: 22px 23px;
 }



 .w-rich-text {
     margin-top: 10px;
     border-top: 1px solid #e0e0e0;
     background-color: #fff;
 }
 .deal-detail .rich-content {
     padding: 0;
 }

 .w-rich-text .rich-content {
     // padding: 10px;
     border-bottom: 1px solid #e0e0e0;
     font-size: 14px;
     color: #9b9b9b;
     line-height: 1.5;
     word-break: break-all;
 }
 .deal-detail .rich-title {
     color: #333;
     font-size: 14px;
     width:100%;
     background-color: #F8F9FA;
 }

 .p-detail .rich-title {
     height: 33px;
     line-height: 33px;
     padding-left: 10px;
     padding-right: 10px;
     box-sizing:border-box;
     border-bottom: 1px solid #e0e0e0;
 }
 .deal-detail .rich-title span {
     float:right;
     padding-right:20px;
     box-sizing:border-box;
     font-size: 14px;
     color: #F64744;
 }
 .deal-detail .rich-title del {
     font-size: 12px;
 }

 .w-rich-text .rich-content * {
     font-size: 14px;
     color: #888;
 }
 .deal-detail .rich-content dl {
     padding-left: 10px;
 }

 .deal-detail .rich-content .detail-group:last-child {
     border-bottom: 0;
 }
 
 .deal-detail .rich-content .detail-group {
     font-size: 12px;
     display: -webkit-box;
     display: -ms-flexbox;
     border-bottom: 1px solid #ddd8ce;
 }
 .deal-detail .rich-content .detail-group .left {
     -webkit-box-flex: 1;
     display: block;
     padding: 5px 0;
     padding-right: 10px;
 }
 .deal-detail .rich-content .detail-group .middle {
     display: -webkit-box;
     -webkit-box-align: center;
     width: 80px;
     
     padding: 5px 10px;
     border-left: 1px solid #ccc;
 }
 .right {
     display: -webkit-box;
     display: -ms-flexbox;
     -webkit-box-align: center;
     -ms-box-align: center;
     width: 65px;
     padding: 5px 10px;
     border-left: 1px solid #ccc;
 }
 .w-rich-text .rich-look-lottery {
     display: block;
     height: 40px;
     line-height: 40px;
     text-align: center;
     border-bottom: 1px solid #e0e0e0;
     color: #303030;
     .right-arrow {
         display: inline-block;
         position: relative;
         padding-right: 10px;
         background: url('http://m.1c10.cn/templates/default/images/arrow-right.png') no-repeat right center;
         background-size: 5px 9px;
     }
 }
 .w-rich-text {
     margin-top: 10px;
     border-top: 1px solid #e0e0e0;
     background-color: #fff;
 }
 .p-detail .rich-title {
     height: 33px;
     line-height: 33px;
     padding-left: 10px;
     padding-right: 10px;
     border-bottom: 1px solid #e0e0e0;
 }
 .w-rich-text .rich-content .title {
     height: 20px;
     padding-left:10px;
     line-height: 20px;
     color: #333;
     box-sizing:border-box;
 }
 .w-rich-text .rich-content ol.list li {
     padding: 5px 10px  5px 20px ;
     box-sizing:border-box;

 }

 .w-buy-btn-normal-large {
     padding: 10px;
 }



 .p-detail .tg-list {
     margin-bottom: 10px;
     background-color: #fff;
     border-top: 1px solid #e0e0e0;
     border-bottom: 1px solid #e0e0e0;
     margin-bottom:10px;
 }



 .p-detail .tg-list .tg-content {
     padding-left: 10px;
     padding-right: 10px;
 }
 .p-detail .tg-list .tg-item {
     display: block;
     height: 43px;
     line-height: 43px;
     width:100%;
     // border-bottom: 1px solid #e0e0e0;
     font-size: 13px;
     color: #333;
     clear: both;
 }
 .p-detail .tg-list .price {
     position: relative;
     float: right;
     padding-right: 10px;
     margin-left: 10px;
     color: #F64744;
     font-size: 18px;
     background: url('http://m.1c10.cn/templates/default/images/arrow-right.png') no-repeat right center;
     background-size: 5px 9px;
      .mark {
         font-size: 10px;
     }
 }
 .p-detail .tg-list .tg-item .tg-name {
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
 }
#can{
     border-bottom: 1px solid #e0e0e0;
}
</style>