// JavaScript Document
// 契約情報登録入力画面_016-2B
// 新規会員登録契約情報追加画面_PC004-2-1B
// [お支払方法]選択が変わる時の画面制御

    $(function(){


        //#account_transfe（お支払方法が口座振替の方）がcl_disabledの場合、リンクをクリックしでも、反応しない。
		$("#account_transfer a").on("click", function(){   
			 if($("#account_transfer").hasClass("cl_disabled") == true)
			 {
				return false;
			 }
        });
        //お支払方法が２を選択する時のみ、使用可
        $("#payment_method").change(function(){
        
	        var checkIndex=$("#payment_method").get(0).selectedIndex;
	        var disable = 2!=checkIndex;

			$("#account_transfer").toggleClass("cl_disabled",disable);
			$("#account_transfer input").attr("disabled", disable); 
			$("#account_transfer input ").val("");
        }); 


    });

