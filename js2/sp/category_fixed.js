// JavaScript Document


$(function() {
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			 
			$(".cl_category_select_right").addClass('fixed');
			 
		} else {
			 
			$(".cl_category_select_right").removeClass('fixed');
			 
		}
	});
	
	
});

