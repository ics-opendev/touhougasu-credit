// JavaScript Document


$(function () {
    $("#cl_folder00").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //�A�R�[�f�B�I���I�[�v�����ɃO���t��replot���{
        checkOrientationSeikyu();
        document.getElementById("hidText").value = 0;
        return false;
    });
    $("#cl_folder01").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //�A�R�[�f�B�I���I�[�v�����ɃO���t��replot���{
        checkOrientationGas();
        document.getElementById("hidText").value = 1;
        return false;
    });
    $("#cl_folder02").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //�A�R�[�f�B�I���I�[�v�����ɃO���t��replot���{
        checkOrientationEle();
        document.getElementById("hidText").value = 2;
        return false;
    });
    $("#cl_folder03").on("click", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("cl_off");
        //�A�R�[�f�B�I���I�[�v�����ɃO���t��replot���{
        checkOrientationHeat1();
        checkOrientationHeat2();
        document.getElementById("hidText").value = 3;
        return false;
    });
});
