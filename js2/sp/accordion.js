// JavaScript Document



var clcflg = true;
$(function () {
    //通常の開閉ボタン用
    $(".cl_folder > a").on("click", function () {

        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        return false;
    });

    //ボタンの上側が開く用
    $(".cl_folderupper > a").on("click", function () {
        $(this).parent().prev(".cl_answer").slideToggle();
        $(this).toggleClass("cl_off");
        return false;
    });

    //請求実績グラフの開閉ボタン用
    $(".cl_grapholder > a").on("click", function () {
        if (clcflg)
        {
            clcflg = false;
            if ($(this).filter(".cl_off").length > 0) {
                $(this).next("ul").hide();
                $(this).next("ul").css("position", "");
                $(this).next("ul").css("top", "");
                $(this).next("ul").css("left", "");
            }
            $(this).next("ul").slideToggle("nomal", function (e) {
                if ($(this).filter(":hidden").length > 0) {
                    $(this).show();
                    $(this).css("position", "absolute");
                    $(this).css("top", "0");
                    $(this).css("left", "0");
                    
                }
                clcflg = true;
            });
            $(this).toggleClass("cl_off");
            
        }
        return false;
    });
});

