var swiper = new Swiper('.swiper-container',{
  	loop:true,
 });
setInterval("swiper.slidePrev()", 2000);
$('.contact-us-style').hover(function(){
	$(this).css('background','red');
},function(){
	$(this).css('background','rgba(21,21,22,0.5)');
})