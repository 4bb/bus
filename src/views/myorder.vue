<style scoped>
    @import '../styles/public.css';
</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->
   <!--state check box-->
   <div class="st-checkbox-cen">
       <div class="st-checkbox">
           <ul>
               <li class="per-33 st-cb-select-left">有效</li>
               <span class="st-cb-line"></span>
               <li class="per-33">已使用</li>
               <span class="st-cb-line"></span>
               <li class="per-33">过期</li>
           </ul>
       </div>
   </div>
   <div class=" clear"></div>

   <!--buy ticket date-->
   <div class="st-checkbox-cen">
       <div class="btd-check">
           <ul>
               <div class="fl_left per-28 c_blue">购票日期：</div>
               <li class="btd-check-select">近3天</li>
               <li>近1月</li>
               <li>近3月</li>
           </ul>
       </div>
   </div>

   <!--zhongc 1-->
   <div class="history mt-5">
       <ul>
           <li class="ticket-padline-top"></li>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <div class="hi-title p_rel fl_left"><font class=" size-14">您已完成购买</font><font class="c_999 size-14 ml-8">16-09-21 8:30</font><!--<strong class="ml-20 c_s_green size-16">检票</strong><img class="ml-5 mt-3"  src="../images/ico-more-green.png" width="8" height="12">--></div>
                   <div class="p_absl right mtb-10 c_fff mr-10 state-tips-effective " ><span class="size-10">已付款</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit mt-9 p_rel" ><label class=" fl_left c_333 size-16">迪斯尼一号线</label><img class=" fl_left mt-9 ml-20" src="../images/ico-map-red.png" width="19" height="20">
                       <div class="p_absl right size-14 c_999 mr-15 fl_left">班次 ｜  <span class="c_s_green">8:30</span></div>
                   </div>
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
                           </ul>
                       </div>
                    </div>
                   <div class="hi-title-dash p_rel mt-5 fl_left">
                       <font class="c_333 size-14">合计：2张</font>
                   </div>
                   <div class="p_absl right size-14  mt-9 c_333 mr-10">
                       <font class="c_333 size-14 mr-5 fl_left">订单金额：40元</font>
                   </div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_96 size-14">订单号</font></div>
                   <div class="p_absl right size-14 mt-9 c_96 mr-10">A122016072100001</div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-14">上车地点</font></div>
                   <div class="p_absl right size-14 mt-5 c_96 mr-10">罗山路</font></div>
                   <div class="clear"></div>
                   <div class="busline-box-nobot p_rel mtb-10">
                       <div class="p_absl right per-70 mr-15 t_right" ><input class="btn-edits" name="" type="button" value="详情"><input class="btn-edits" name="" type="button" value="删除"></div>
                   </div>
                   <div class="clear"></div>
               </div>
           </li>
           <li class="clear"></li>
           <li class="ticket-padline-bot"></li>
       </ul>
   </div>

   <div class="title mtb-8">
     <label>如您需要退票，请进入 <a class="c_333" href="">个人中心/我的电子票</a> </label>
   </div>

   <!--zhongc 2-->
   <div class="his-bg-gray  mt-3">
       <ul>
           <li class="ticket-padline-top"></li>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <div class="hi-title p_rel fl_left"><font class=" size-14">未完成购买</font><font class="c_999 size-14 ml-8">16-09-21 8:30</font><!--<strong class="ml-20 c_s_green size-16">检票</strong><img class="ml-5 mt-3"  src="../images/ico-more-green.png" width="8" height="12">--></div>
                   <div class="p_absl right mtb-10 c_fff mr-10 state-tips-gray" ><span class="size-10">未成功</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit mt-9 p_rel" ><label class=" fl_left c_333 size-16">迪斯尼一号线</label><img class=" fl_left mt-9 ml-20" src="../images/ico-map-red.png" width="19" height="20">
                       <div class="p_absl right size-14 c_999 mr-15 fl_left">班次 ｜  <span class="c_s_green">8:30</span></div>
                   </div>
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
                           </ul>
                       </div>
                    </div>
                   <div class="hi-title-dash p_rel mt-5 fl_left">
                       <font class="c_333 size-14">合计：2张</font>
                   </div>
                   <div class="p_absl right size-14  mt-9 c_333 mr-10">
                       <font class="c_333 size-14 mr-5 fl_left">订单金额：40元</font>
                   </div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_96 size-14">订单号</font></div>
                   <div class="p_absl right size-14 mt-9 c_96 mr-10">A122016072100001</div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-14">上车地点</font></div>
                   <div class="p_absl right size-14 mt-5 c_96 mr-10">罗山路</font></div>
                   <div class="clear"></div>
                   <div class="busline-box-nobot p_rel mtb-10">
                       <div class="p_absl right per-70 mr-15 t_right" ><input class="btn-edits" name="" type="button" value="详情"><input class="btn-edits" name="" type="button" value="删除"></div>
                   </div>
                   <div class="clear"></div>
               </div>
           </li>
           <li class="clear"></li>
           <li class="ticket-padline-bot"></li>
       </ul>
   </div>

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
