<style scoped>
    @import '../styles/public.css';
</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->

   <!--creat head 1-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <div class="mtb-5 layout-close">
                       <div class="fl_left creat-head"><img src="../images/head-01.jpg" width="32" height="32"></div>
                       <font class="size-14 fl_left c_000 mt-5 ml-10">静水流深</font>
                       <div class="size-10 p_absl right mt-9 mr-15 c_999">发起众酬</div>
                   </div>
                   <div class="clear"></div>
               </div>

               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--updown add-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot p_rel">
                   <img class=" fl_left" style=" margin-top:0.8em;" src="../images/ss_03.png" width="12" height="14">
                   <input class=" fl_left size-14 rechange-inp per-90 ml-5" name="" type="text" value="上车位置">
                   <div class="clear"></div>
                   <div class="bor-bot-e9"></div>
                   <img class=" fl_left" style=" margin-top:0.8em;" src="../images/ss_03_red.png" width="12" height="14">
                   <input class=" fl_left size-14 rechange-inp per-90 ml-5" name="" type="text" value="输入终点">
                   <div class="clear"></div>
                   <div class="p_absl right creat-shift-arrow"></div>
               </div>
               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--start time-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <img class=" fl_left" style=" margin-top:0.8em;" src="../images/ss_clock.png" width="12" height="14">
                   <input class=" fl_left size-14 rechange-inp per-90 ml-5" name="" type="text" value="发车时间">
                   <div class="clear"></div>
               </div>

               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--other-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <img class=" fl_left" style=" margin-top:0.8em;" src="../images/ss_edit.png" width="12" height="14">
                   <input class=" fl_left size-14 rechange-inp per-90 ml-5" name="" type="text" value="备注 （出发地/目的地、期望最晚开通时间)">
                   <div class="clear"></div>
               </div>

               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--btn -->
   <div class="clear  mtb-10">
       <ul>
           <li class="per-100 fl_left ">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="提交审核"></div>
           </li>
       </ul>
   </div>

   <div class="clear"></div><br><br>
   <div class="p_rel tips-wx">
       <div class="tips-wx-line"></div>
       <div class="tips-wx-txt">温馨提示</div>
   </div>
   <div class="title">
     <font class=" mlr-10 c_79 size-14 c_96 " style=" display:block; line-height:1.3em;">我们会根据您的线路描述来规划线路新的线路，发车点/到达地点/发车时间以我们实际线路为准</font>
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
