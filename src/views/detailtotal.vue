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

    <div class="title">
      <label>2016</label>
    </div>

    <!--chongzhi 1-->
    <div class="history mt-5">
        <ul>
            <li class="history-item">
                <div class="hi-inner-nobot">
                     <div class="hi-title p_rel">
                        <font class="fl_left size-14 c_000"><strong>累计充值</strong></font>
                        <div class="p_absl right size-14 mr-15 c_000"><strong>-100.00元</strong></div>
                    </div>
                </div>
                <div class="clear"></div>
            </li>
            <li class="clear"></li>
        </ul>
    </div>

    <!--chongzhi 2-->
    <div class="history mt-5">
        <ul>
            <li class="history-item">
                <div class="hi-inner-nobot">
                     <div class="hi-title-dash p_rel">
                        <font class="fl_left size-14 c_000"><strong>累计支出</strong></font>
                        <div class="p_absl right size-14 mr-15 c_000"><strong>-50.00元</strong></div>
                    </div>
                    <div class="clear"></div>
                    <div class="mt-9 layout-close">
                    	<div class="per-49 fl_left p_rel">
                        	<span class="hi-title-nobot"><font class="c_96 size-12">微信支付</font></span>
                        	<span class=" p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">-10.00元</font></span>
                        </div>
                        <div class="per-45 fl_left p_rel ml-10 mr-5">
                        	<div class="per-90 fl_left mt-13 payfor-plot p_rel"></div>
                            <div class="per-23 fl_left mt-13 payfor-plot-upper p_absl"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="pb-10 layout-close">
                        <div class="per-49 fl_left p_rel">
                        	<span class="hi-title-nobot"><font class="c_96 size-12">余额支付</font></span>
                        	<span class=" p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">-40.00元</font></span>
                        </div>
                        <div class="per-45 fl_left p_rel ml-10 mr-5">
                        	<div class="per-90 fl_left mt-13 payfor-plot p_rel"></div>
                            <div class="per-75 fl_left mt-13 payfor-plot-upper p_absl"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

                <div class="clear"></div>
            </li>
            <li class="clear"></li>
        </ul>
    </div>

    <!--chongzhi 3-->
    <div class="history mt-5">
        <ul>
            <li class="history-item">
                <div class="hi-inner-nobot">
                     <div class="hi-title-dash p_rel">
                        <font class="fl_left size-14 c_000"><strong>累计退票</strong></font>
                        <div class="p_absl right size-14 mr-15 c_000"><strong>-40.00元</strong></div>
                    </div>
                    <div class="clear"></div>
                    <div class="mt-9 layout-close">
                    	<div class="per-49 fl_left p_rel">
                        	<span class="hi-title-nobot"><font class="c_96 size-12">退至微信</font></span>
                        	<span class=" p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">-10.00元</font></span>
                        </div>
                        <div class="per-45 fl_left p_rel ml-10 mr-5">
                        	<div class="per-90 fl_left mt-13 payfor-plot p_rel"></div>
                            <div class="per-23 fl_left mt-13 payfor-plot-upper p_absl"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="pb-10 layout-close">
                        <div class="per-49 fl_left p_rel">
                        	<span class="hi-title-nobot"><font class="c_96 size-12">退至钱包</font></span>
                        	<span class=" p_absl right size-12 mtb-10 c_999 mr-10"><font class="c_333 size-12">-30.00元</font></span>
                        </div>
                        <div class="per-45 fl_left p_rel ml-10 mr-5">
                        	<div class="per-90 fl_left mt-13 payfor-plot p_rel"></div>
                            <div class="per-75 fl_left mt-13 payfor-plot-upper p_absl"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
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
    			<div class="mlr-10"><input name="" type="button"  class="btn-half-greenbg" value="交易明细"></div>
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
