<style scoped>
            @import '../styles/index.css';

</style>
<template>
<!--mask -->
    <div class="maskdiv" style="display:none;">
    	<div class="p_absl right popupbox-ind" >
        	<img class="p_absl m_img_sj" src="../images/ico-sanjiao.png" width="10" height="5">
            <div class="m-ind-div">
                <ul>
                	<li>充值</li>
                    <li>优惠券</li>
                    <li>有效车票</li>
                    <li>电子票</li>
                </ul>
            </div>
      </div>
    </div>

    <!--<div class="top">
        <img class="top-close" src="../images/close_03.png" />
        <div class="top-line"></div>
        <label>爱客巴士</label>
    </div>-->

    <div class="order">
        <div class="order-title">
            <img src="../images/order_03.png" />
            <label>我的订单</label>
        </div>
        <img class="order-add" src="../images/add_03.png" />

        <div class="order-item">
            <img src="../images/xl_03.png" style="width: 28px" />
            <div>我的线路</div>
        </div>
        <div class="order-line"></div>
        <div class="order-item">
            <img src="../images/order_13.png" style="width: 35px" />
            <div>我的车票</div>
        </div>
    </div>
    <div class="order-tip">
        <label>235</label>
        <span>人正在找寻自己的最优线路...</span>
        <div class="ot-btn">推荐线路</div>
    </div>

    <div class="type">
        <ul>
            <li>
                <img src="../images/banche01_03.png" style="width: 25px; margin-top: 20px" />
                <div>定点班车</div>
            </li>
            <li>
                <img src="../images/banche02_03.png" style="width: 26px; margin-top: 25px" />
                <div>上下班车</div>
            </li>
            <li>
                <img src="../images/banche03_03.png" style="width: 20px; margin-top: 23px" />
                <div>市内包车</div>
            </li>
            <li>
                <img src="../images/banche03_04.png" style="width: 20px; margin-top: 23px" />
                <div>企业班车</div>
            </li>
        </ul>
    </div>

    <div class="zhongc">
        <img class="zc-img" src="../images/zc_03.png" />
        <label>发起最新线路众筹</label>
        <img class="zc-right" src="../images/right_03.png" />
    </div>

    <div class="ad">
    	<div class="img_dot">
        	<div class="i_dot_green"></div>
            <div class="i_dot_gray"></div>
        </div>
        <div class="ad_img"></div><!--<img src="../images/pic_02.png" />-->
    </div>

    <div class="title">
      <label>最近使用路线</label>
    </div>

    <div class="history">
        <ul>
        	<!--first line-->
            <li class="history-item">
                <div class="hi-inner">
                    <div class="hi-title">浦东软件园接驳线</div>
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
                        <label>339</label>
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
