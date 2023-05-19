$(document).ready(function() {
    var swiper1 = new Swiper(".swiper1", {
      autoplay: {
        delay: 400000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange: function () {
          var idx = swiper1.activeIndex;
          if(idx==2){
            slideShow();
          }else{
            slideShow2();
          }
        }
       }
      
    });
    function slideShow() {
    $('.photo ul li').hide();
    $('.photo ul li:first').show().addClass('active');
    $('.main .photo ul li a').removeClass('active');
    $('.main .photo ul li:first a').addClass('active');
    $('.btns ul li:first').addClass('active');
    $('.btns ul li').click(function() {
      let idx = $(this).index();
      $('.btns ul li').removeClass('active');
      $(this).addClass('active');
      $('.photo ul li').hide().removeClass('active');
      $('.photo ul li').eq(idx).fadeIn().addClass('active');
      $('.photo ul li a').removeClass('active');
      $('.photo ul li').eq(idx).find('a').addClass('active');
      });
    }

    function slideShow2() {
      $('.btns ul li').removeClass('active');
      $('.main .photo ul li a').removeClass('active');
    }

    // 슬라이드 영역에 마우스 오버하면 슬라이드 멈추고, 슬라이드 영역에서 마우스 아웃하면 다시 슬라이드 자동 실행
    $('.swiper1').mouseenter(function() {
      swiper1.autoplay.stop();
    });
    $('.swiper1').mouseleave(function() {
      swiper1.autoplay.start();
    });

    // news Slide
    var swiper2 = new Swiper(".swiper2", {
      slidesPerView: 2.5,
      spaceBetween: 50,
      freeMode: true
    });

    gsap.timeline({
      scrollTrigger:{
      trigger:'.section3',
      pin: '.section3',
      start:"top top",
      end:"bottom top",
      scrub:1,
      }
    }).to('.section3 .banner_img1', {duration:3,opacity:0})

    gsap.timeline({
      scrollTrigger:{
      trigger:'.section3',
      // pin:true,
      start:"top top",
      // end:"bottom top",
      scrub:1,
      }
    }).to('.section3 .banner_img2', {duration:3,opacity:1})
    
    // gsap.timeline({
    //   scrollTrigger:{
    //   trigger:'.section4',
    //   pin:'.section4',
    //   start:"top top",
    //   end:"bottom top",
    //   scrub:1,
    //   }
    // }).to('.section4 .banner_img1', {duration:3, opacity:0})

    gsap.timeline({
      scrollTrigger:{
      trigger:'.section4',
      pin:'.section4',
      start:"top top",
      end:"+=3000",
      scrub:1,
      }
    })
      .to('.section4 .banner_img1', {duration:5})
      .to('.section4 .banner_img2', {duration:10, opacity:1})
      .to('.section4 .banner_img1', {duration:5, opacity:0})
      .to('.section4 .banner_img2', {duration:10, scale:0})
      .to('.section4 .banner_img3', {duration:5, top:'10%'})
      .to('.section4 .banner_img3', {duration:5, top:'-10vh'})
      .to('.section4 .banner_img4', {duration:5, top:'22%'})
      .to('.section4 .banner_img4', {duration:10})

    gsap.timeline({
      scrollTrigger:{
      trigger:'.section5',
      pin:true,
      start:"center center",
      end:"+=1000",
      scrub:1
      }
    })
    .to('.section5 .banner_img2', {duration:0, scale:1.2}) // 초기값
    .to('.section5 .banner_img2', {duration:5, scale:1})
    .to('.section5 .ani_img', {duration:30, top:"-140%"})

    gsap.timeline({
      scrollTrigger:{
      trigger:'.section5',
      start:"center center",
      end:"+=3000",
      scrub:1
      }
    })
    .to('.section5 .banner_img2', {duration:70, top:"150%", delay:15})

    $('.insta .section6 .section6_right ul li').click(function(e) {
      e.preventDefault();
      var click=$(this).index()+1;
      $('.container').empty();
      $('.container').append('<img src="img/section6_image'+click+'.jpg">');
      $('.popup').fadeIn();
    });

    $(document).mouseup(function (e){
      var LayerPopup = $(".popup");
      if(LayerPopup.has(e.target) || 
      LayerPopup.has(e.target).length === 0){
        $('.popup').fadeOut();
      }
    });

    let sw=false;
    $('.ham_menu').click(function() {
      if(sw==false) {
        sw=true;
        $(this).addClass('active');
        $('.menu_area').animate({right:0});
      } else {
        sw=false;
        $(this).removeClass('active');
        $('.menu_area').animate({right:'-100vw'});
      }
    });
});