$(document).ready(function () {
    var stars = 800;
    var $stars = $(".stars");
    var r = 800;
    for (var i = 0; i < stars; i++) {
        var $star = $("<div/>").addClass("star");
        $stars.append($star);
    }
    $(".star").each(function () {
        var cur = $(this);
        var s = 0.2 + (Math.random() * 1);
        var curR = r + (Math.random() * 300);
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

        })
    })
})
// section1 title
$(function(){
    $('#section1 .titlebox').css("transform","translateX(0px)").css("opacity", "1");
    
    $('.stickybox li').eq(0).click(function(){
        $('#section1 .titlebox').css("transform","translateX(0px)").css("opacity", "1");
    });

    $(".stickybox").hide();

    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let slider= $('#slider').offset().top;
        // console.log(ws)

        if(ws>0 && ws<=400){     
            $('#section1 .titlebox').css("transform","translateX(0px)").css("opacity", "1");                  
        }
        if(ws>400){
            $('#section1 .titlebox').css("transform","translateX(-400px)").css("opacity", "0");
        }

        if(ws>slider-50){
            $(".stickybox").fadeIn("slow");
        }else{
            $(".stickybox").fadeOut();
        }
    });
});

// // section1 title about me
// $(function(){
//     $('#aboutme').css("transform","translateX(0px)").css("opacity", "1");

//     if(ws>0 && ws<=400){     
//         $('#aboutme').css("transform","translateX(0px)").css("opacity", "1");                  
//     }
//     if(ws>400){
//         $('#section1 .titlebox').css("transform","translateX(-400px)").css("opacity", "0");
//     }

//     if(ws>slider-50){
//         $(".stickybox").fadeIn("slow");
//     }else{
//         $(".stickybox").fadeOut();
//     }
// });
// sticky side menu scroll
$(function(){
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let aboutmenu= $('#aboutme').offset().top;
        let project= $('#project').offset().top;
        let contact=$('#contact').offset().top;


        if(ws>=aboutmenu && ws < project){    
            $('.stickybox li a').removeClass('active'); 
            $('.aboutmenu').addClass('active');                 
        }
        else if(ws>=project && ws < contact){
            $('.stickybox li a').removeClass('active'); 
            $('.projectmenu').addClass('active');
        }
        else if(ws>=contact && ws < contact){
            $('.stickybox li a').removeClass('active'); 
            $('.contactmenu').addClass('active');
        }
    });
});



// 스크롤이벤트
const scrollSection = document.querySelector('.horizontal-scroll__section');
const scrollContent = document.querySelector('.horizontal-scroll__content');

const scrollHeight = scrollSection.clientHeight;
const contentWidth = scrollContent.clientWidth;

document.addEventListener('scroll', e => {
  const scrolled = window.pageYOffset;
  const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
  const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

  if (scrollSection.offsetTop <= scrolled && notReachedBottom) {

    gsap.to(scrollContent, {
      x: -sectionOffset });

  }
});



const heroTween = background => {
  const tl = gsap.timeline();

  tl.to(background, {
    height: '100%',
    ease: 'power3.easeOut' });



  return tl;
};

const controller = new ScrollMagic.Controller();

const heroScene = new ScrollMagic.Scene({
  triggerElement: '.hero',
  triggerHook: 0,
  duration: '40%' }).

setTween(heroTween('.hero__background')).
addIndicators({ name: "1" });
//.addTo(controller);