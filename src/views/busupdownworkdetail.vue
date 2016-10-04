<style scoped>
            @import '../styles/public.css';

</style>
<template>
<!--<div class="top">
      <img class="top-close" src="../images/ico_back.png" />
      <div class="top-line"></div>
      <label>上下班车预定</label>
  </div>-->

  <!--<div class="updown-search">
      <div class="search-box">
          <div class="search-box-line">
              <img class="search-ico" src="../images/ico-search.png" /><input name=""  class="sear-inp" type="text" value="上车地点/小区名/线路名/ 办公楼">
          </div>
      </div>
  </div>-->

  <div class="ud-detail-tit ">
      <p>迪斯尼一号线</p> <!--<img class="ico-map" src="../images/ico-map-map.png">-->
      <div class="p_absl right size-12 c_fff check-green-btn">查阅线路图</div>
  </div>

  <div class="hi-line bg_fff">
      <div class="hi-li ml-10">
          <img src="../images/ss_03.png" />
          <label>龙阳路</label>
      </div>
      <div class="hi-li ml-10">
          <img src="../images/ss_18.png" />
          <label>浦东软件园</label>
      </div>
      <div class="hi-lr mtb-10">
          <div class="hi-li-t " style="color:#ea0303;">
              <span>￥</span>
              <label >20.00</label>
          </div>
          <label class="hi-li-i">票价</label>
      </div>
  </div>

  <div class="title">
    <label>发车时间</label>
  </div>

  <div class="history">
      <ul>
          <!--first line-->
          <li class="history-item">
              <div class="hi-inner bg_fff ptb-15">
                  <div class="per-23 fl_left thr-box thr-box-sel" >
                      <div class="se-bus-time">
                          <img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left ml-8 c_333">6:30</p>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box">
                      <div class="se-bus-time">
                          <img class="fl_left" src="../images/ico-time-mid.png" width="14" height="15">
                          <p class="fl_left ml-8 c_333">7:00</p>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box">
                      <div class="se-bus-time">
                          <img class="fl_left" src="../images/ico-time-mid.png" width="14" height="15">
                          <p class="fl_left ml-8 c_333">7:30</p>
                      </div>
                  </div>
                  <div class="clear mtb-10" ></div>

                  <div class="per-23 fl_left thr-box">
                      <div class="se-bus-time">
                          <img class="fl_left" src="../images/ico-time-mid.png" width="14" height="15">
                          <p class="fl_left ml-8 c_333">8:00</p>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box">
                      <div class="se-bus-time">
                          <img class="fl_left" src="../images/ico-time-last.png" width="14" height="15">
                          <p class="fl_left ml-8 c_333">8:30</p>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
  </div>
  <!--address-->
  <div class="title">
    <label>上车地点</label>
  </div>

  <div class="history">
      <ul>
          <!--first line-->
          <li class="history-item">
              <div class="hi-inner bg_fff ptb-15">
                  <div class="per-23 fl_left thr-box thr-box-sel" >
                      <div class="se-bus-time">
                          <p class="ml-10 size-14 c_333">城市酒家</p>
                          <font class="se-bus-time-sel">酒家东门</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box" >
                      <div class="se-bus-time">
                          <p class="ml-10 size-14 c_333">迪斯尼...</p>
                          <font>迪斯尼小...</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box" >
                      <div class="se-bus-time">
                          <p class="ml-10 size-14 c_333">康新地...</p>
                          <font>1号口</font>
                      </div>
                  </div>

                  <div class="clear mtb-10" ></div>
                  <div class="per-23 fl_left thr-box" >
                      <div class="se-bus-time">
                          <p class="ml-10 size-14 c_333">迪斯尼...</p>
                          <font>迪斯尼小...</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box" >
                      <div class="se-bus-time">
                          <p class="ml-10 size-14 c_333">康新地...</p>
                          <font>1号口</font>
                      </div>
                  </div>


              </div>
          </li>
      </ul>
  </div>

  <!--xiake adress -->
  <div class="title">
    <label>下客地点</label>
    <tt class="size-12 c_lasttxt ml-10"><span class="c_red">*</span>各站点均可下车  无需选择</tt>
  </div>

  <div class="history">
      <ul>
          <!--first line-->
          <li class="history-item">
              <div class="hi-inner bg_fff ptb-15">
                  <div class="per-23 fl_left thr-box-none" >
                      <div class="se-bus-time">
                          <!--<img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left">6:30</p>-->
                          <p class="ml-10 size-14">城市酒家</p>
                          <font>酒家东门</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box-none" >
                      <div class="se-bus-time">
                          <!--<img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left">6:30</p>-->
                          <p class="ml-10 size-14">迪斯尼...</p>
                          <font>迪斯尼小...</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box-none" >
                      <div class="se-bus-time">
                          <!--<img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left">6:30</p>-->
                          <p class="ml-10 size-14">康新地...</p>
                          <font>1号口</font>
                      </div>
                  </div>

                  <div class="clear mtb-10" ></div>
                  <div class="per-23 fl_left thr-box-none" >
                      <div class="se-bus-time">
                          <!--<img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left">6:30</p>-->
                          <p class="ml-10 size-14">迪斯尼...</p>
                          <font>迪斯尼小...</font>
                      </div>
                  </div>
                  <div class="per-23 fl_left thr-box-none" >
                      <div class="se-bus-time ">
                          <!--<img class="fl_left" src="../images/ico-time-first.png" width="14" height="15">
                          <p class="fl_left">6:30</p>-->
                          <p class="ml-10 size-14">康新地...</p>
                          <font>1号口</font>
                      </div>
                  </div>


              </div>
          </li>
      </ul>
  </div>

  <!--calander -->
  <div class="title">
    <label>选择日期</label>
    <tt class="size-12 c_lasttxt ml-10"><span class="c_red">*</span>可多选</tt>
  </div>

  <div class="history">
      <ul>
          <!--first line-->
          <li class="history-item">
              <div class="bg_fff ">
                  日历控件
              </div>
          </li>
      </ul>
  </div>

  <!--rule -->
  <div class="title">
    <input name="" class="ml-10 fl_left sel-inp" type="checkbox" value=""><span class=" size-12 c_79 fl_left ml-3">请先阅读并确认</span><a  class="size-12" href="">购票规则/退票规则</a>
    <div class="clear"></div>
  </div>

  <div class="bot_hei"></div><br><br>

  <div  class="confirmation-booking">
      <div class="hi-title-bot ml-10 mt-9">
          <font class="c_666 fl_left">应付金额</font>
          <dd class="p_absl payable-accout"><strong class="payable-num">￥205.00</strong><dl class="payable-yuan">元</dl></dd>
          <div class="p_absl right payable-booking" >确认<dl>预订</dl></div>
      </div>
  </div>

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
