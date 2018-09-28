/*
 * @Author: name
 * @Date:   2017-10-27 17:51:11
 * @Last Modified by:   name
 * @Last Modified time: 2018-09-06 14:42:46
 */
//封装函数  加样式
function tabs(obj, swiperObj, className) {
  var tabSwiper = new Swiper(swiperObj, {
    autoHeight: true,
    onSlideChangeStart: function() {
      $(obj + "." + className).removeClass(className);
      $(obj).eq(tabSwiper.activeIndex).addClass(className);
    }
  });
  $(obj).on('touchstart mousedown', function(e) {
    e.preventDefault();
    $(obj + "." + className).removeClass(className);
    $(this).addClass(className);
    tabSwiper.slideTo($(this).index());
  });
  $(obj).click(function(e) {
    e.preventDefault();
  });
}
//每一个swiper加点击样式
$(function() {
  var service = new Swiper('.service-c', {
    pagination: '.service-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
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
  $('.case-c >.hd > a').eq(0).addClass('on');
  tabs('.case-c >.hd > a', '.case-c', 'on');

  //头部 点击链接
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

  //wechat 小程序
  var we1_c = new Swiper('.we1-c', {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
      el: '.we1-pagination',
      clickable: true,
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })
  var we3_c = new Swiper('.we3-c', {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.we3-pagination',
      clickable: true,
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })

  //seo 网站优化
  var seo2_c = new Swiper('.seo2-c', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: '.seo2-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })
  var seo3_c = new Swiper('.seo3-c', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.seo3-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })
})
