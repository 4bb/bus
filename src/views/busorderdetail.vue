<style scoped>
    @import '../styles/public.css';
</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->

   <div class="ud-detail-tit ">
       <p>订单详情</p>
   </div>

   <div class="history mt-5">
       <ul>
           <!--date-->
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title"><img class=" fl_left mt-9" src="../images/ico-time-mid.png" width="16" height="17"><font class="ml-8">乘车日期</font></div>

                   <div class="upb-dates mtb-10">
                       <div class="ub-d">
                           <ul>
                               <li class="p_rel">
                                   <div class="upbus-date p_rel">
                                       <div class="date-ye p_absl"><span class="date-ye-cen">2016</span></div>
                                       <div class="clear"></div>
                                       <div class="p_absl" >
                                           <div class="date-mon fl_left">08</div>
                                           <div class="date-mon fl_left">28</div>
                                       </div>
                                   </div>
                               </li>
                               <li class="p_rel">
                                   <div class="upbus-date p_rel">
                                       <div class="date-ye p_absl"><span class="date-ye-cen">2016</span></div>
                                       <div class="clear"></div>
                                       <div class="p_absl" >
                                           <div class="date-mon fl_left">08</div>
                                           <div class="date-mon fl_left">29</div>
                                       </div>
                                   </div>
                               </li>
                               <li class="p_rel">
                                   <div class="upbus-date p_rel">
                                       <div class="date-ye p_absl"><span class="date-ye-cen">2016</span></div>
                                       <div class="clear"></div>
                                       <div class="p_absl" >
                                           <div class="date-mon fl_left">09</div>
                                           <div class="date-mon fl_left">22</div>
                                       </div>
                                   </div>
                               </li>
                               <li class="p_rel">
                                   <div class="upbus-date p_rel">
                                       <div class="date-ye p_absl"><span class="date-ye-cen">2016</span></div>
                                       <div class="clear"></div>
                                       <div class="p_absl" >
                                           <div class="date-mon fl_left">09</div>
                                           <div class="date-mon fl_left">22</div>
                                       </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
               </div>
           </li>
       </ul>
   </div>
   <!--bus mess-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title p_rel fl_left"><img class=" fl_left mt-9" src="../images/ico-s-car.png" width="16" height="17"><font class="ml-8">车次信息</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10">上车时间 ｜  <span class="c_s_green">8:30</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit" >
                         <label class="mt-9 c_333">迪斯尼一号线</label>
                   </div>
                   <div class="  busline-box">
                       <img class="fl_left mt-5" src="../images/ss_03_gray.png" width="14" height="15"><span class="fl_left ml-8 ">龙阳路</span><img class="fl_left ml-10 mt-9" src="../images/ico-long-arrow.png" width="36" height="8"><img class="fl_left ml-10 mt-5" src="../images/ss_18_gray.png" width="14" height="15"><span class="fl_left ml-8">浦东软件园</span>
                       <div class="clear"></div>
                   </div>
                   <div class="hi-title size-14 p_rel fl_left"><font class="c_999 ">上车地点</font></div>
                   <div class="p_absl size-14 right mtb-10 c_999 mr-10"><span class="c_s_green  ">龙阳路</span></div>
               </div>
           </li>
       </ul>
   </div>

   <!--bus detail-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title p_rel fl_left"><font class="c_96 size-12">订单金额</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">￥220.<span class="size-10">00</span></font></div>
                   <div class="clear"></div>
                   <div class="hi-title p_rel fl_left"><font class="c_96 size-12">优惠金额</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><img class="ml-5 fl_right mt-3"  src="../images/ico-more.png" width="8" height="12"><font class="c_333 size-12 fl_right">￥20.<span class="size-10">00</span> 已使用优惠券6张</font></div>
                   <div class="clear"></div>
                   <div class="hi-title p_rel fl_left"><font class="c_96 size-12">订单流水号</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">00</span> A122016072100001</font></div>
                   <div class="clear"></div>
                   <div class="hi-title p_rel fl_left"><font class="c_96 size-12">创建日期</font></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12"> 2016年07月21日</font></div>
                   <div class="clear"></div>
                   <div class="hi-title p_rel fl_left"></div>
                   <div class="p_absl right size-12 mtb-10 c_999 mr-10"><strong class="c_333 size-14 ">共计1张票   实际支付：<span class="c_red">￥200.00</span></strong></div>
               </div>

           </li>
       </ul>
   </div>

   <!--tip -->
   <div class="title">
     <dd class=" size-12 c_79 fl_left ml-10"><span class="c_red">*</span>订单生成后20分钟内完成支付，否则<font class="c_red">自动取消订单</font></dd>
     <div class="clear"></div>
   </div>

   <!--btn -->
   <div class=" clear">
       <ul>
           <li class="per-50 fl_left ">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="微信支付"></div>
           </li>
           <li class="per-50 fl_left">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenline" value="余额支付"></div>
           </li>
           <div class="clear"> </div>
           <li class="center mtb-20"><a  class="size-12" href="">稍后支付（我的订单内支付）</a></li>
       </ul>
   </div>
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
