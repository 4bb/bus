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

   <!--zhongc 1-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-title">
                   <div class="size-14">
                       <ul>
                           <li class="per-49 fl_left center b-detail-sel">充值明细</li>
                           <li class="per-49 fl_left center">支出明细</li>
                       </ul>
                   </div>
               </div>
               <div class="clear"></div>
               <div class="hi-inner-nobot">
                   <div class=" ptb-15 bor-bot-e9">
                       <div class="fl_left per-23">
                           <p class="c_999 size-16 pb-3 mt-3">07-22</p>
                           <dt class="size-14 c_999"><span class="b-detail-date" >08:30 </span></dt>
                       </div>
                       <div class="fl_left per-75">
                           <p class="size-18">37.7</p>
                           <dt class="c_999"><span class="mr-5 size-12">订单号</span> 4003502001206083127185...</dt><!-- 400350200120608312718596925-->
                       </div>
                       <div class="clear"></div>
                   </div>

                   <div class="ptb-15 bor-bot-e9">
                       <div class="fl_left per-23">
                           <p class="c_999 size-16 pb-3 mt-3">07-22</p>
                           <dt class="size-14 c_999"><span class="b-detail-date" >08:30 </span></dt>
                       </div>
                       <div class="fl_left per-75">
                           <p class="size-18">62.6</p>
                           <dt class="c_999"><span class="mr-5 size-12">订单号</span> 4003502001206083127185...</dt><!-- 400350200120608312718596925-->
                       </div>
                       <div class="clear"></div>
                   </div>
                </div>
           </li>
           <li class="clear"></li>
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
