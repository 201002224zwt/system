<template>
  <div class="site-footer">

    <div class="footer-related">
      <div class="footer-links w1100">
        <p>友情链接：</p>
        <div class="clearfix">
          <!-- 友情链接循环开始 -->

          <a href="#">站点列表</a>

          <a href="#"><a target="_blank" href="http://www.ydrenhe.com/">江西药都仁和制药有限公司</a></a>

          <a href="#"><a target="_blank" href="http://www.shuangfeiren.com/">双飞人制药股份有限公司</a></a>

          <a href="#"><a target="_blank" href="http://www.tqtyy.com/AboutUs/">江西樟树天齐堂中药饮片有限公司</a></a>

          <a href="#"><a target="_blank" href="http://www.zhangshu.gov.cn/">樟树市人民政府</a></a>



          <!-- 友情链接循环结束 -->
        </div>
      </div>

      <div class="footer-info w1100">
        <div class="info-text w1100">
          <p class="copyright">
            北京林业大学(http://www.bjfu.edu.cn/index.html) 版权所有 <em></em>
            <a href="#" >京ICP备xxxxxxxx号</a>
          </p>
          <p class="company-info">北京市海淀区清华东路35号北京林业大学</p>
          <p class="qualified">

          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped>
  .w1100 {width: 1100px;margin: 0 auto;}
  .fl {float: left;}
  a{text-decoration: none;}
  ul{list-style: none;}
  .site-footer { font-size: 14px; line-height: 1.8; color: #a8aaba; background: #32333b;}
  .site-footer a { color: #a8aaba;}
  .site-footer a:hover { color: #f44 !important;}
  .site-footer .footer-article { padding: 30px 0 20px; overflow: hidden;}
  .site-footer .contact { float: left; width: 280px;}
  .site-footer .contact dt { width: 90px;}
  .site-footer .contact .iconfont { width: 66px;height: 66px; display: block;float: left;background: url(../assets/kefu.png) center center no-repeat;background-size: 55px;}
  .site-footer .contact .text { font-size: 14px; line-height: 30px; color: #fff;}
  .site-footer .contact .tel { padding: 3px 0 15px; font-size: 20px; color: #fff;}
  .site-footer .contact a { display: block; width: 90px; font-size: 14px; line-height: 30px; color: #9b9ea0; text-align: center; border: 1px solid #9b9ea0; border-radius: 4px;}
  .site-footer .contact a:hover { color: #fff !important;}
  .site-footer .col-article { float: left; width: 171px;}
  .site-footer .col-article dt { margin-bottom: 15px; font-size: 16px; font-weight: normal; color: #d7d8d9;}
  .site-footer .col-article dd { margin-bottom: 8px; overflow: hidden;}
  .site-footer .col-article dd a { font-size: 12px; color: #9b9ea0; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
  .site-footer .wx { float: left; width: 135px; margin-right: 0;}
  .site-footer .wx dt { margin-bottom: 15px; font-size: 16px; font-weight: normal; color: #d7d8d9;}
  .site-footer .wx dd { margin-bottom: 15px;}
  .site-footer .wx dd img { display: block; width: 110px; height: 110px; margin: 5px 0; border-radius: 2px;}
  .site-footer .wx dd.other { margin-bottom: 0; line-height: 18px;}
  .site-footer .wx dd.other span { display: block; font-size: 12px;}
  .site-footer .wx dd.other a { display: inline-block; margin-right: 5px; font-size: 12px; line-height: 18px; vertical-align: top;}
  .footer-links { padding: 10px 0; border-top: 1px solid #41424c; border-bottom: 1px solid #41424c;}
  .footer-links p { font-size: 14px; color: #a8aaba;}
  .footer-links a { margin-right: 20px; font-size: 12px; color: #a8aaba;}
  .footer-info .info-text { padding: 20px 0; font-size: 12px; text-align: center;}
  .footer-info .info-text .nav-bottom { padding: 20px 0 5px; font-size: 14px; color: #ccc; text-align: center;}
  .footer-info .info-text .nav-bottom a { padding: 0 8px; color: #9b9ea0;}
  .footer-info .info-text .copyright { padding-top: 5px;}
  .footer-info .info-text em { padding: 0 8px;}
</style>
