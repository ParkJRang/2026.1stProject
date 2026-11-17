// 헤더 서브메뉴 script
//변수선언//
const hb_nav = document.querySelectorAll('.hb_nav>.hb_menu>li');
    const hb = document.getElementById('hb');
//마우스 호버시 hb 높이 변경, 서브메뉴 드랍다운//
hb_nav.forEach(function(i){
  i.addEventListener('mouseenter', function(){
    hb.style.height="460px";
  });
});
//마우스 호버 종료시 hb 높이 롤백, 서브메뉴 드랍업되면서 숨기기//
hb_nav.forEach(function(i){
  i.addEventListener('mouseleave', function(){
    hb.style.height="76px";
  });
});

// 메인배너 swiper 슬라이드 script
var mainBannerSwiper = new Swiper('.main_banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:{
      delay:3800,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// 카테고리섹션 카드디자인 슬라이드 script 
var categorySwiper = new Swiper('.category_swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:{
      delay:4300,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// 신규레시피 카드디자인 슬라이드 script
var newContSwiper = new Swiper ('.new_cont', {
  slidesPerView: 'auto',
  spaceBetween: 224,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay:4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
