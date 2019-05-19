// JavaScript Document

// JavaScript Document
$(function() {
	var topBtn = $('p.cl_pagetop a');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			topBtn.fadeIn();
			$("#id_header").addClass('fixed');
			$("p.cl_pagetop").addClass('on');
		} else {
			topBtn.fadeOut();
			$("#id_header").removeClass('fixed');
			$("p.cl_pagetop").removeClass('on');
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

//ページ内リンク遷移 ログイン用
$(function() {
	var target_top =0;
 $(".cl_scroll").click(function(event){
event.preventDefault();
           
var url = this.href;

var parts = url.split("#");
var target = parts[1];
     
 var target_offset = $("#"+target).offset();
var target_top = target_offset.top   ;
    
$('html, body').animate({scrollTop:target_top}, 1000);
 });
 });

$(function() {
	
	
	//<!-- drawer 開始設定 -->
 $(document).ready(function() {
      $('.drawer').drawer({
	
	iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: false,
    preventDefault: false,
	
	scrollbars: 'custom',
	scrollbars:false, /* スクロールバーを表示 */
    fadeScrollbars: false, /* スクロールバーをスクロール時にフェードイン・フェードアウト */
    interactiveScrollbars:false, /* スクロールバーをドラッグできるようにする */
    shrinkScrollbars: 'scale' /* スクロールバーを伸縮 */

	
	
  },

  showOverlay: true

	  });

	 
    });
});




	