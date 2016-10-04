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
               <div class="hi-inner-nobot">
                    <input class="size-18 rechange-inp  per-90" name="" type="text" value="请输入充值金额（元）">
                    <dl class="hi-title-dash" style=" margin-top:-1em;"><span class="c_red size-10">*</span>充值金额必须大于1分</dl>
               </div>
               <div class="clear"></div>
               <div class="price-card-box">
                   <ul>
                       <li class="per-28 fl_left price-card-sel">
                           <div class="size-17">1元<div/>
                           <div class="size-12">售价1元</div>
                       </li>
                       <li class="per-28 fl_left price-card">
                           <div class="size-17">100元<div/>
                           <div class="size-12">售价100元</div>
                       </li>
                       <li class="per-28 fl_left price-card">
                           <div class="size-17">200元<div/>
                           <div class="size-12">售价200元</div>
                       </li>
                   </ul>
                   <ul>
                       <li class="per-28 fl_left price-card">
                           <div class="size-17">300元<div/>
                           <div class="size-12">售价300元</div>
                       </li>
                       <li class="per-28 fl_left price-card">
                           <div class="size-17">400元<div/>
                           <div class="size-12">售价400元</div>
                       </li>
                       <li class="per-28 fl_left price-card">
                           <div class="size-17">500元<div/>
                           <div class="size-12">售价500元</div>
                       </li>
                   </ul>
               </div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--btn -->
   <div class="clear  mtb-10">
       <ul>
           <li class="per-100 fl_left ">
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="立即充值"></div>
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
