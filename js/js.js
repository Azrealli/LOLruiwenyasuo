/**
 * Created by Administrator on 2017/8/29.
 */


$(function () {
    //�������̶�
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
    //��������������Ƴ��¼�
    var list = $("#top").children().children().children("li");
    list.hover(function () {
        $(this).css({
            textShadow: "0px 0px 30px  white"
        }).siblings().css({
            textShadow: ""
        });
    });
    //����������¼�
    list.click(function () {

            $(this).children(".jhao").css({
                    opacity: 1
                }
            ).parent().siblings().children(".jhao").css({
                    opacity: 0
                })
        }
    );
    //�����ת�¼�
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

    //��������
    //������ʼ
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




    //��ͼ
    //document.getElementById("#datu")
    //$("#datupian_zuo").children("img").hover(function () {
    //    $(this).parents("#datupian_zuo").addClass("wow bounceInLeft")
    //});
    //����С��
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
    //������ͼ��
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
    //�������ͼ
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
    //�Ծ�:218 ����403 ����549 ��������613
    //�ײ�����Ч
    $('#btn_db1').click(function () {
        $('#db_mid_m').slideToggle(700);
    });
    $('#btn_db2').click(function () {
        $('#db_btm_m').slideToggle(700);
    });


});
//Ŷ��
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

