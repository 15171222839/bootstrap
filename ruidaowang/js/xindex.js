/*
* @Author: name
* @Date:   2018-09-03 20:37:54
* @Last Modified by:   name
* @Last Modified time: 2018-09-06 17:54:04
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



/*
* @Author: name
* @Date:   2018-09-03 14:58:36
* @Last Modified by:   name
* @Last Modified time: 2018-09-03 14:58:36
*/
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  paginationBulletRender: function (swiper, index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  }
});
