//jQuery.noConflict();
var smarpflg = false;
var jqxhr;
$(document).ready(smarp());
$(document).bind("ajaxSend", function(){
    $(window).bind('beforeunload', function(){
        jqxhr.abort();
    })
});
function smarp() {
    if (smarpflg) return;
    smarpflg = true;
    jqxhr = $.ajax({
        type: "post",
        url: "/api/GetPoint.aspx",
        data: "",
        context: document.body,
        dataType: "json",
        success: function (json) {
            if (json.ApiReturnCode == "0") {
                $("#PossessionPoint").text(json.PossessionPoint);
                if(json.LosePoint == "0"){
                    $(".cl_top_inner_box3_point").hide();
                    $(".cl_top_inner_box4_point_yellow").hide();
                    $(".cl_top_inner_box4_point").hide();
                } else {
                    $("#LoseDeadline").text(json.LoseDeadline);
                    $("#LosePoint").text(json.LosePoint);
                }
            } else {
                showErrorMessage();
            }
        }
    });
    smarpflg = false;
    event.preventDefault();
}
function showErrorMessage() {
    $(".cl_smarp_err_msg").html('<div class="cl_box_err-msg"><span>ただいまポイント照会、交換などの操作はできません。</span></div>');
}
