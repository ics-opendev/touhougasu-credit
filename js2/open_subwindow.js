// JavaScript Document

    $(function(){
 		
		// 承認ボタンを押下
        $("#wcc-icon_approval").on("click", function() {

            $(".wcc-panel01").fadeIn('fast')
			$(".wcc-panel01").addClass("on");
			$(".wcc-panel02").fadeOut('fast');
			$(".wcc-panel03").fadeOut('fast');
			$(".wcc-panel02").removeClass("on");
			$(".wcc-panel03").removeClass("on");
			 return false;
        });
		
		//検索ボタンを押下
		 $("#wcc-icon_search").on("click", function() {

            $(".wcc-panel02").fadeIn('fast')
			$(".wcc-panel02").addClass("on");
			$(".wcc-panel01").fadeOut('fast');
			$(".wcc-panel03").fadeOut('fast');
			$(".wcc-panel01").removeClass("on");
			$(".wcc-panel03").removeClass("on");
			 return false;
        });

		//フォルダ検索ボタンを押下
		 $("#wcc-icon_folder").on("click", function() {

            $(".wcc-panel03").fadeIn('fast')
			$(".wcc-panel03").addClass("on");
			$(".wcc-panel02").fadeOut('fast');
			$(".wcc-panel01").fadeOut('fast');
			$(".wcc-panel02").removeClass("on");
			$(".wcc-panel01").removeClass("on");
			 return false;
        });
		
		//閉じるボタンを押下
		$(".wcc-btn-close").on("click", function() {

            
			$(".wcc-panel01").fadeOut('fast');
			$(".wcc-panel02").fadeOut('fast');
			$(".wcc-panel03").fadeOut('fast');
			$(".wcc-panel01").removeClass("on");
			$(".wcc-panel02").removeClass("on");
			$(".wcc-panel03").removeClass("on");
			  return false;
        });

		
	
			
 
		
    });

