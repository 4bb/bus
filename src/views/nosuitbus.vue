<style scoped>
            @import '../styles/public.css';

</style>
<template>
<!--<div class="top">
       <img class="top-close" src="../images/ico_back.png" />
       <div class="top-line"></div>
       <label>上下班车预定</label>
   </div>-->

   <!--title-->
   <div class="his-bg-yellow">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                    <div class="hi-title p_rel">
                       <img class="fl_left mt-9" src="../images/tips-yellow.png" width="15" height="15"><font class="fl_left ml-5 size-14 c_333">很抱歉，没有查询到贵公司的班车</font>
                       <!--<div class="p_absl right size-14 mr-15 c_000"><strong>-100.00元</strong></div>-->
                   </div>
               </div>
               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <div class="title">
     <label>原因1</label>
   </div>

   <!--because 1-->
   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <div class=" mtb-20">
                       <font class="size-14 c_000">您的企业尚未与我们签订合作协议</font>
                       <div class="size-10 mt-5 mr-15 c_999">请联系贵公司人力资源部与我们协商</div>
                   </div>
                   <div class="clear"></div>
                   <div class="bor-bot-dash-e9"></div>
                   <div class="hi-title p_rel">
                       <font class="fl_left size-14 c_000"><strong>联系电话</strong></font>
                       <div class="p_absl right c_s_green size-14 mr-15 c_000">021-98833434</div>
                   </div>
                   <div class="clear"></div>
               </div>

               <div class="clear"></div>
           </li>
           <li class="clear"></li>
       </ul>
   </div>

   <!--because 2-->

   <div class="title">
     <label>原因2</label>
   </div>

   <div class="history mt-5">
       <ul>
           <li class="history-item">
               <div class="hi-inner-nobot">
                   <div class=" mtb-20">
                       <font class="size-14 c_000">您的企业尚未与我们签订合作协议</font>
                       <div class="size-10 mt-5 mr-15 c_999">请联系贵公司人力资源部与我们协商</div>
                   </div>
                   <div class="clear"></div>
                   <div class="bor-bot-dash-e9"></div>
                   <input class="size-14 rechange-inp per-90" name="" type="text" value="输入真实姓名">
                   <div class="bor-bot-e9"></div>
                   <input class="size-14 rechange-inp per-90" name="" type="text" value="手机号">
                   <div class="bor-bot-e9"></div>
                   <input class="size-14 rechange-inp per-60" name="" type="text" value="验证码"><span class=" c_999"> ｜</span> <input name="" type="button" class="size-14 c_999" style="border:0 none; background:transparent;" value="发送验证码">
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
               <div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="立即激活"></div>
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
