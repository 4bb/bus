<style scoped>
    @import '../styles/public.css';
</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->

   <div class="ud-detail-tit">
       <div class="ud-img-add fl_left"><img src="../images/add_03.png" width="16" height="16"></div>
       <font class="fl_left ml-3">发起我的众酬</font>
   </div>
   <div class="clear"></div>

   <div class="title">
     <label>所有众酬</label>
   </div>

   <!--zhongc 1-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title p_rel fl_left"><img class=" fl_left mt-9" src="../images/ico-s-car.png" width="16" height="17"><font class=" size-16 ml-8">班车已到位</font></div>
                   <div class="p_absl right mtb-10 c_fff mr-10 state-tips-ongoing" ><span class="size-10">进行中</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit mt-9">
                       <span class="fl_left size-16">龙阳路</span><span class="size-10 fl_left ml-5 c_999">上车</span><span class="fl_left ml-20 size-16">浦东软件园</span><span class="size-10 fl_left ml-5 c_999">下车</span>
                   </div>
                   <div class=" size-14 busline-box-nobot">
                       <img class="fl_left mt-5" src="../images/ss_03_gray.png" width="14" height="15">
                       <span class="fl_left ml-8 ">龙阳路</span>
                       <img class="fl_left ml-10 mt-9" src="../images/ico-long-arrow.png" width="36" height="8">
                       <img class="fl_left ml-10 mt-5" src="../images/ss_18_gray.png" width="14" height="15"><span class="fl_left ml-8">浦东软件园</span>
                       <div class="clear"></div>
                   </div>
                   <div class="hi-title-dash p_rel mt-5 fl_left">
                       <font class="c_96 size-14">已参与<span class="c_s_green">1</span>人</font>
                   </div>
                   <div class="p_absl right size-14  mt-9 c_999 mr-10">
                       <font class="c_999 size-14 mr-5 fl_left">还有6天结束 </font>
                       <span class="size-10 fl_left">｜</span>
                       <img src="../images/ico-compment-flower.png" class=" fl_left mt-3 ml-8" width="14" height="16">
                       <span class="fl_left ml-8"> 0</span>
                   </div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_96 size-14">发车时刻</font></div>
                   <div class="p_absl right size-14 mt-9 c_96 mr-10"><span class="c_s_green">8：30</span></div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-14">发车日期</font></div>
                   <div class="p_absl right size-14 mt-5 c_96 mr-10">2016-09-20</font></div>
                   <div class="clear"></div>
               </div>
           </li>
       </ul>
   </div>

   <!--zhongc 2-->
   <div class="his-bg-gray  mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title p_rel fl_left"><img class=" fl_left mt-9" src="../images/ico-s-car-gray.png" width="16" height="17"><font class=" size-16 ml-8">班车已到位</font></div>
                   <div class="p_absl right mtb-10 c_fff mr-10 state-tips-gray" ><span class="size-10">已结束</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit mt-9">
                       <span class="fl_left size-16">龙阳路</span><span class="size-10 fl_left ml-5 c_999">上车</span><span class="fl_left ml-20 size-16">浦东软件园</span><span class="size-10 fl_left ml-5 c_999">下车</span>
                   </div>
                   <div class=" size-14 busline-box-nobot">
                       <img class="fl_left mt-5" src="../images/ss_03_gray.png" width="14" height="15">
                       <span class="fl_left ml-8 ">龙阳路</span>
                       <img class="fl_left ml-10 mt-9" src="../images/ico-long-arrow.png" width="36" height="8">
                       <img class="fl_left ml-10 mt-5" src="../images/ss_18_gray.png" width="14" height="15"><span class="fl_left ml-8">浦东软件园</span>
                       <div class="clear"></div>
                   </div>
                   <div class="hi-title-dash p_rel mt-5 fl_left">
                       <font class="c_96 size-14">已参与<span class="c_s_green">1</span>人</font>
                   </div>
                   <div class="p_absl right size-14  mt-9 c_999 mr-10">
                       <font class="c_999 size-14 mr-5 fl_left">评论已超期 </font>
                       <span class="size-10 fl_left">｜</span>
                       <img src="../images/ico-compment-flower.png" class=" fl_left mt-3 ml-8" width="14" height="16">
                       <span class="fl_left ml-8"> 0</span>
                   </div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_96 size-14">发车时刻</font></div>
                   <div class="p_absl right size-14 mt-9 c_96 mr-10"><span class="c_s_green">8：30</span></div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-14">发车日期</font></div>
                   <div class="p_absl right size-14 mt-5 c_96 mr-10">2016-09-20</font></div>
                   <div class="clear"></div>
               </div>
           </li>
       </ul>
   </div>

   <!--zhongc 3-->
   <div class="his-bg-gray  mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner">
                   <div class="hi-title p_rel fl_left"><img class=" fl_left mt-9" src="../images/ico-s-car-gray.png" width="16" height="17"><font class=" size-16 ml-8">班车已到位</font></div>
                   <div class="p_absl right mtb-10 c_fff mr-10 state-tips-gray" ><span class="size-10">已结束</span></div>
                   <div class="clear"></div>
                   <div class="busline-tit mt-9">
                       <span class="fl_left size-16">龙阳路</span><span class="size-10 fl_left ml-5 c_999">上车</span><span class="fl_left ml-20 size-16">浦东软件园</span><span class="size-10 fl_left ml-5 c_999">下车</span>
                   </div>
                   <div class=" size-14 busline-box-nobot">
                       <img class="fl_left mt-5" src="../images/ss_03_gray.png" width="14" height="15">
                       <span class="fl_left ml-8 ">龙阳路</span>
                       <img class="fl_left ml-10 mt-9" src="../images/ico-long-arrow.png" width="36" height="8">
                       <img class="fl_left ml-10 mt-5" src="../images/ss_18_gray.png" width="14" height="15"><span class="fl_left ml-8">浦东软件园</span>
                       <div class="clear"></div>
                   </div>
                   <div class="hi-title-dash p_rel mt-5 fl_left">
                       <font class="c_96 size-14">已参与<span class="c_s_green">1</span>人</font>
                   </div>
                   <div class="p_absl right size-14  mt-9 c_999 mr-10">
                       <font class="c_999 size-14 mr-5 fl_left">评论已超期 </font>
                       <span class="size-10 fl_left">｜</span>
                       <img src="../images/ico-compment-flower.png" class=" fl_left mt-3 ml-8" width="14" height="16">
                       <span class="fl_left ml-8"> 0</span>
                   </div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left mt-5"><font class="c_96 size-14">发车时刻</font></div>
                   <div class="p_absl right size-14 mt-9 c_96 mr-10"><span class="c_s_green">8：30</span></div>
                   <div class="clear"></div>
                   <div class="hi-title-nobot p_rel fl_left"><font class="c_96 size-14">发车日期</font></div>
                   <div class="p_absl right size-14 mt-5 c_96 mr-10">2016-09-20</font></div>
                   <div class="clear"></div>
               </div>
           </li>
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
