<style scoped>
    @import '../styles/public.css';
</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->

   <div class="payfor-success p_rel">
       <img class="p_absl" style="margin:5px 0 0 -45px;" src="../images/payforsyccess-ico_06.jpg" width="34" height="34">
       <p class="size-18">支付成功</p>
       <dt class="size-14">微信支付</dt>
   </div>
   <div class="history">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_999 size-12">爱客巴士</font></div>
                   <div class="hi-title-hei p_rel fl_left">
                       <div class="p_absl right size-20 c_000 mr-10">￥200.<span class="size-12">00</span></div>
                 </div>
             </div>
           </li>
       </ul>
   </div>

   <!--bus detail-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title-dash p_rel fl_left"><font class="c_96 size-12">商品</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">爱客巴士订单支付</font></div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-12">交易单号</font></div>
                   <div class="p_absl right size-12 mtb-10 c_96 mr-10">A122016072100001</div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-12">支付方式</font></div>
                   <div class="p_absl right size-12 mtb-10 c_96 mr-10">零钱</font></div>
                   <div class="clear"></div>
                   <div class="hi-title p_rel fl_left"><font class="c_96 size-12">交易时间</font></div>
                   <div class="p_absl right size-12 mtb-10 c_96 mr-10"> 2016年07月21日</div>
                   <div class="clear"></div>
                   <!--<div class="hi-title p_rel fl_left"><font class="c_000 size-14">爱客巴士</div>
                    <div class="p_absl right mt-5 c_999 mr-10"><font class=" size-14 "><input name="" class="ml-10 fl_left attention_inp" type="checkbox" value=""><span class="ml-3 c_000">关注</span></font></div>  -->
               </div>

           </li>
       </ul>
   </div>

   <!--tip -->
   <!--<div class="title">
     <dd class=" size-12 c_79 fl_left ml-10"><span class="c_red">*</span>订单生成后20分钟内完成支付，否则<font class="c_red">自动取消订单</font></dd>
     <div class="clear"></div>
   </div>-->

   <!--btn -->
   <div class="clear  mtb-10">
       <ul>
           <li class="per-50 fl_left ">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="继续购票"></div>
           </li>
           <li class="per-50 fl_left">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenline" value="查看清单"></div>
           </li>
           <div class="clear"> </div>
           <!--<li class="center mtb-20"><a  class="size-12" href="">稍后支付（我的订单内支付）</a></li>-->
       </ul>
   </div>
   <div class="clear"></div>

   <div class="bot_hei"></div>
   <div class="footer">
       <div class="footer-check-back"></div>
       <div class="footer-check">
           <img src="../images/check.png" />
         <label>检票</label>
       </div>

       <div class="footer-left">
           <img src="../images/home_03.png" />
         <label>爱客</label>
       </div>
       <div class="footer-right">
           <img src="../images/user.png" />
         <label>我的</label>
       </div>
   </div>
   <div class="footer-back"></div>
</template>
<script>
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';

    export default {
        filters: {
            NumberSeparator
        },
        directives: {
            time: Time
        },
        data () {
            return {

            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
