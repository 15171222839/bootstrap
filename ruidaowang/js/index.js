/*
* @Author: name
* @Date:   2018-09-04 15:15:00
* @Last Modified by:   name
* @Last Modified time: 2018-09-05 21:13:30
*/

'use strict';
$(function(){
  var serviceDomain = new Swiper('#service-box',{

    slidesPerView  : 'auto',
    pagination :{
      el : '.service-page',
      clickable :true,
      bulletElement : 'span',
    },
  });

  var success = new Swiper('#success',{

     });
  $('.success-client .service-nav>li').click(function(){
    console.log(this)
    $(this).addClass('active').siblings().removeClass('active');
    success.slideTo($(this).index());
  });

  var advantageSwiper = new Swiper('.for-more',{
    slidesPerView : 'auto',
    pagination :{
      el : '.advantage-page',
      clickable : true,
      bulletElement : 'span',
    },
  });
  var marketSwiper = new Swiper('#analyze',{
    initialSlide :5,
    autoHeight : true,
    pagination: {
      el: '.analyze-page',
      type : 'progressbar',
      progressbarOpposite: false,
    },
    on: {
      slideChange:function(){
        $('.statistic>ul>li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
      }
    }
  });
  $('.statistic>ul>li').click(function(){
    marketSwiper.slideTo($(this).index())
  });
  var YiSwiper = new Swiper('.Yi-swiper',{
    slidesPerView : 'auto',
    pagination :{
      el : '.Yi-page',
      clickable : true,
      // bulletElement : 'span',
    },
  });
});