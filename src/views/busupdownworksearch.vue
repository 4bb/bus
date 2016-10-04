<style scoped>
    @import '../styles/public.css';
</style>
<template>
    <!--<div class="top">
           <img class="top-close" src="../images/ico_back.png" />
           <div class="top-line"></div>
           <label>上下班车预定</label>
       </div>-->

   	<div class="updown-search" >
       	<div class="search-box">
           	<div class="search-box-line">
           		<img class="search-ico" src="../images/ico-search.png" /><input name=""  class="sear-inp" type="text" value="上车地点/小区名/线路名/ 办公楼">
               </div>
           </div>
       </div>

       <div class="title">
         <label>所有路线</label>
       </div>

       <div class="history">
           <ul>
           	<!--first line-->
               <li class="history-item">
                   <div class="hi-inner">
                       <div class="hi-title p_rel">
                       	<font class="fl_left">浦东软件园接驳线</font>
                           <div class="p_absl right size-12 line-detail-btn">线路详情</div>
                       </div>

                       <div class="hi-time">
                           <div class="hi-time-btn">发车时间</div>
                           <img src="../images/time1_03.png" />
                           <label>6:30</label>
                           <img src="../images/time2_03.png" />
                           <label>7:30</label>
                           <img src="../images/time3_03.png" />
                           <label>8:30</label>
                       </div>
                       <div class="hi-line">
                           <div class="hi-li">
                               <img src="../images/ss_03.png" />
                               <label>龙阳路</label>
                           </div>
                           <div class="hi-li">
                               <img src="../images/ss_18.png" />
                               <label>浦东软件园</label>
                           </div>
                           <div class="hi-lr">
                               <div class="hi-li-t">
                                   <span>￥</span>
                                   <label>20.00</label>
                               </div>
                               <label class="hi-li-i">票价</label>
                           </div>
                       </div>
                       <div class="hi-total">
                           <span style="margin-left: 5px">全程大约</span>
                           <label>25</label>
                           <span>公里...</span>
                       </div>
                   </div>
               </li>
               <!--second line-->
               <li class="history-item">
                   <div class="hi-inner">
                       <div class="hi-title p_rel">
                       	<font class="fl_left">迪斯尼专线</font>
                           <div class="p_absl right size-12 c_999 line-detail-btn">线路详情</div>
                       </div>
                       <div class="hi-time">
                           <div class="hi-time-btn">发车时间</div>
                           <img src="../images/time1_03.png" />
                           <label>6:30</label>
                           <img src="../images/time2_03.png" />
                           <label>7:30</label>
                           <img src="../images/time3_03.png" />
                           <label>8:30</label>
                       </div>
                       <div class="hi-line">
                           <div class="hi-li">
                               <img src="../images/ss_03.png" />
                               <label>康新公路</label>
                           </div>
                           <div class="hi-li">
                               <img src="../images/ss_18.png" />
                               <label>迪斯尼乐园</label>
                           </div>
                           <div class="hi-lr">
                               <div class="hi-li-t">
                                   <span>￥</span>
                                   <label>15.00</label>
                               </div>
                               <label class="hi-li-i">票价</label>
                           </div>
                       </div>
                       <div class="hi-total">
                           <span style="margin-left: 5px">全程大约</span>
                           <label>15</label>
                           <span>公里...</span>
                       </div>
                   </div>
               </li>
               <!--third line-->
               <li class="history-item">
                   <div class="hi-inner">
                       <div class="hi-title p_rel">
                       	<font class="fl_left">浦东11路</font>
                           <div class="p_absl right size-12 c_999 line-detail-btn">线路详情</div>
                       </div>
                       <div class="hi-time">
                           <div class="hi-time-btn">发车时间</div>
                           <img src="../images/time1_03.png" />
                           <label>6:30</label>
                           <img src="../images/time2_03.png" />
                           <label>7:30</label>
                           <img src="../images/time3_03.png" />
                           <label>8:30</label>
                       </div>
                       <div class="hi-line">
                           <div class="hi-li">
                               <img src="../images/ss_03.png" />
                               <label>芳华路</label>
                           </div>
                           <div class="hi-li">
                               <img src="../images/ss_18.png" />
                               <label>金科路</label>
                           </div>
                           <div class="hi-lr">
                               <div class="hi-li-t">
                                   <span>￥</span>
                                   <label>18.00</label>
                               </div>
                               <label class="hi-li-i">票价</label>
                           </div>
                       </div>
                       <div class="hi-total">
                           <span style="margin-left: 5px">全程大约</span>
                           <label>32</label>
                           <span>公里...</span>
                       </div>
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
