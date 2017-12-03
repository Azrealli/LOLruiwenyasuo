/**
 * Created by Administrator on 2017/8/29.
 */


$(function () {
    //导航栏固定
    var navTop = $("#top").height() + 2;
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        console.log(winTop);
        if (winTop >= navTop) {
            $("#top").css({
                position: "fixed",
                top: 0,
                zIndex: 8000000
            });
            $("#manh").css({
                marginTop: navTop + 30
            })
        }
    });

    //document.querySelectorAll("#vvv");
    //if(e.target.className=="son"){
    //}
    //导航栏鼠标移入移出事件
    var list = $("#top").children().children().children("li");
    list.hover(function () {
        $(this).css({
            textShadow: "0px 0px 30px  white"
        }).siblings().css({
            textShadow: ""
        });
    });
    //导航栏点击事件
    list.click(function () {

            $(this).children(".jhao").css({
                    opacity: 1
                }
            ).parent().siblings().children(".jhao").css({
                    opacity: 0
                })
        }
    );
    //点击跳转事件
    list.eq(0).on("click", function () {
        $("html,body").stop().animate({scrollTop: 0}, 1000);
    });
    list.eq(1).on("click", function () {
        $("html,body").stop().animate({scrollTop: 540}, 1000);
    });
    list.eq(2).on("click", function () {
        $("html,body").stop().animate({scrollTop: 2850}, 1000);
    });
    list.eq(3).on("click", function () {
        $("html,body").stop().animate({scrollTop: 5700}, 1000);
    });
    list.eq(4).on("click", function () {
        $("html,body").stop().animate({scrollTop: 8200}, 1000);
    });

    //导航结束
    //漫画开始
    $("#xstp").click(function () {
        $(this).parents("#manhua").css({
            display: "none",
            position: "static"
        })
            .siblings("#mh1").css({
            display:"block"
        });
    });
    $("#mh1").children("img").click(function () {
            $(this).parents("#mh1").css({
                display:"none"
            }) .siblings("#mh2").css({
                display:"block"
            })
        }
    );
    $("#mh2").children("img").click(function () {
            $(this).parents("#mh2").css({
                display:"none"
            }) .siblings("#mh3").css({
                display:"block"
            })
        }
    );
    $("#mh3").children("img").click(function () {
            $(this).parents("#mh3").css({
                display:"none"
            }) .siblings("#mh4").css({
                display:"block"
            })
        }
    );




    //大图
    //document.getElementById("#datu")
    //$("#datupian_zuo").children("img").hover(function () {
    //    $(this).parents("#datupian_zuo").addClass("wow bounceInLeft")
    //});
    //三个小框
    $("#sangehezi1").children("img").click(function () {
        $("#sgxk_tank1").css({
            display: " block"
        }).siblings("#xxx1").css({
            display: " block"
        });
    });
    $("#xxx1").children("img").click(function () {
        $("#xxx1").css({
            display: " none"
        }).siblings("#sgxk_tank1").css({
            display: "none"
        }).siblings("#sgxk_tank2").css({
            display: "none"
        });
    });

    $("#sangehezi2").children("img").click(function () {
        $("#sgxk_tank2").css({
            display: " block"
        }).siblings("#xxx1").css({
            display: " block"
        });
    });
    //锐雯多图框
    $("#rmz_mid3").mouseenter(function () {
        $("#rww1").css({
            display: "block"
        })
    });
    $("#rww1").mouseleave(function () {
            $("#rww1").css({
                display: "none"
            })
        }
    );
    $("#rmz_mid4").mouseenter(function () {
        $("#rww2").css({
            display: "block"
        })
    });
    $("#rww2").mouseleave(function () {
            $("#rww2").css({
                display: "none"
            })
        }
    );
    //亚索多框图
    $("#dt_left_mid3").mouseenter(function () {
        $("#yss1").css({
            display: "block"
        })
    });
    $("#yss1").mouseleave(function () {
            $("#yss1").css({
                display: "none"
            })
        }
    );
    $("#dt_left_mid4").mouseenter(function () {
        $("#yss2").css({
            display: "block"
        })
    });
    $("#yss2").mouseleave(function () {
            $("#yss2").css({
                display: "none"
            })
        }
    );
    //对决:218 锐雯403 亚索549 常见问题613
    //底部的特效
    $('#btn_db1').click(function () {
        $('#db_mid_m').slideToggle(700);
    });
    $('#btn_db2').click(function () {
        $('#db_btm_m').slideToggle(700);
    });


});
//哦吼
var wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null
    }
);
wow.init();

