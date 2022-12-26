$(function() {
  $('.header-line-wrap').on('click',function () 
  {
    $('.header-navigation-wrap').toggleClass('header-navigation-wrap-open');
    $('.header-line-top').toggleClass('header-line-top-open');
    $('.header-line-middle').toggleClass('header-line-middle-open');
    $('.header-line-bottom').toggleClass('header-line-bottom-open');
  })
});