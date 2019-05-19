// JavaScript Document

    $(function(){
 		
	

		//menuを押下
		 $(".cl_btn_menu").on("click", function() {

             $("#id_modal").fadeIn('fast');
			$("#id_modal").removeClass("cl_none");
			
			 return false;
        });
		
		//閉じるを押下
		$(".cl_btn_menu_close").on("click", function() {

            
			$("#id_modal").fadeOut('fast');
			 
			$("#id_modal").addClass("cl_none");
			 
			  return false;
        });

		
		//カテゴリー変更を押下
		 $(".cl_btn_category_change").on("click", function() {

             $("#id_modal_category_change").fadeIn('fast');
			$("#id_modal_category_change").removeClass("cl_none");
			
			 return false;
        });
		
		//カテゴリー変更の閉じるを押下
		$(".cl_btn_category_change_close").on("click", function() {

            
			$("#id_modal_category_change").fadeOut('fast');
			 
			$("#id_modal_category_change").addClass("cl_none");
			 
			  return false;
        });
	
			
		//ログインを押下
		 $("#id_btn_login").on("click", function() {

			$("#id_modal_login").fadeIn('fast');
			$("#id_modal_login").removeClass("cl_none");
			
			return false;
        });
		
		//ログイン背景を押下
		$("#id_modal_bg").on("click", function() {

            
			$("#id_modal_login").fadeOut('fast');
			$("#id_modal_login").addClass("cl_none");
			 
			return false;
        });
 
		
    });

