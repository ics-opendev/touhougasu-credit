// JavaScript Document

// JavaScript Document
$(function() {
	var topBtn = $('p.cl_pagetop a');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
