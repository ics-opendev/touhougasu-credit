// JavaScript Document


$(function () {
    $("#cl_folder00").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //アコーディオンオープン時にグラフのreplot実施
        checkOrientationSeikyu();
        document.getElementById("hidText").value = 0;
        return false;
    });
    $("#cl_folder01").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //アコーディオンオープン時にグラフのreplot実施
        checkOrientationGas();
        document.getElementById("hidText").value = 1;
        return false;
    });
    $("#cl_folder02").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //アコーディオンオープン時にグラフのreplot実施
        checkOrientationEle();
        document.getElementById("hidText").value = 2;
        return false;
    });
    $("#cl_folder03").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //アコーディオンオープン時にグラフのreplot実施
        checkOrientationHeat1();
        checkOrientationHeat2();
        document.getElementById("hidText").value = 3;
        return false;
    });
});
