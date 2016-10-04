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
          <li class="ticket-padline-top-bluebg"><span class="size-16 ticket-padline-top-blue">司机师傅  调度中…</span></li>
          <li class="history-item">
              <div class="hi-inner-nobot">
                      <div class="upb-dates mtb-10  pb-10" style=" border-bottom:1px dashed #ccc;">
                          <div class="ub-d">
                              <ul>
                                  <li class="p_rel fl_left size-16 c_999 e-code-date">
                                          发车日期
                                  </li>
                                  <li class="p_rel fl_left ml-5">
                                      <div class="upbus-date p_rel">
                                          <div class="date-ye p_absl center"><span class="date-ye-cen">2016</span></div>
                                          <div class="clear"></div>
                                          <div class="p_absl" >
                                              <div class="date-mon fl_left">08</div>
                                              <div class="date-mon fl_left">29</div>
                                          </div>
                                      </div>
                                  </li>
                                  <li class="p_rel fl_left ml-5 size-16 c_s_green e-code-date" >
                                          8:30
                                  </li>
                              </ul>
                          </div>
                       </div>
                  <div class="busline-tit mt-9 p_rel" ><label class=" fl_left c_333 size-16">迪斯尼一号线</label><img class=" fl_left mt-9 ml-20" src="../images/ico-map-red.png" width="19" height="20">
                      <div class="p_absl right size-14 c_999 mr-10 fl_left" style="background:url(../images/ico-upbus-bg.png) no-repeat 0 0.5em / 7.2em 1.8em; width:7.6em; height:2.6em;"><span class="ml-5">上车点 </span>  <span class="c_s_green ml-5">龙阳路</span></div>
                  </div>
                  <div class=" p_rel pb-10">
                      <div class="hi-li">
                          <img src="../images/ss_03_gray.png" />
                          <label>龙阳路</label>
                      </div>
                      <div class="hi-li busline-box-nobot pb-10">
                          <img src="../images/ss_18_gray.png" />
                          <label>浦东软件园</label>
                      </div>
                      <div class="hi-lr ">
                          <div class="hi-li-t">
                              <font class="c_000">￥</font>
                              <font class="size-18 c_000">20.00</font>
                          </div>
                          <label class="hi-li-i">票价</label>
                      </div>
              </div>
                  <div class="clear"></div>
              </div>
          </li>
          <li class="clear"></li>
          <li class="ticket-padline-bot"></li>
      </ul>
  </div>

  <div class="title mtb-8">
      <div class="hi-inner-nobot">
          <span>券码</span><label class="ml-8">e745bfcb-51e7-471a-a221-ec4199b19dbd</label>
      </div>
  </div>
  <br>
  <div class="e-code-img mtb-20"><img src="../images/ico-e-code.png" width="176" height="176"></div>

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
