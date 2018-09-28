/*
* @Author: name
* @Date:   2018-09-04 09:03:25
* @Last Modified by:   name
* @Last Modified time: 2018-09-06 18:03:44
*/

$(function(){
    $('.logo-nav ul li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.bread').click(function(){
        $('.menu').toggle();
    });
  $('.city>div').click(function(){
    //点击城市时，将本城市的电话显示
    $(this).find('div').show();
    //点击城市时，将另外城市的电话隐藏
    $(this).siblings().find('div').hide();
  });
  $(window).resize(function(event) {
    var winWidth = $(window).width();
    if(winWidth>=768){
        $('header .menu').attr('style','');
    }
  });

})
/****新闻域名实名认证通知******/
  var swiper = new Swiper('.n-hot', {
    spaceBetween: 30,
    pagination: {
      el: '.hot-pagination',
      clickable: true,
    },
  });
/******网站建设轮播*****/
    var swiper = new Swiper('.web1_c', {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,       //不贴合
        pagination: {         //分页器
          el: '.service-pagination',
          clickable: true,     //按键导航
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
    })