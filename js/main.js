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
        let about= $('#aboutme').offset().top;
        console.log(ws)

        if(ws>0 && ws<=400){     
            $('#section1 .titlebox').css("transform","translateX(0px)").css("opacity", "1");                  
        }
        if(ws>400){
            $('#section1 .titlebox').css("transform","translateX(-400px)").css("opacity", "0");
        }

        if(ws>about-50){
            $(".stickybox").fadeIn("slow");
        }else{
            $(".stickybox").fadeOut();
        }
    });
});

