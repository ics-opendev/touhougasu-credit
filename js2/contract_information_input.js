// JavaScript Document
// �_����o�^���͉��_016-2B
// �V�K����o�^�_����ǉ����_PC004-2-1B
// [���x�����@]�I�����ς�鎞�̉�ʐ���

    $(function(){


        //#account_transfe�i���x�����@�������U�ւ̕��j��cl_disabled�̏ꍇ�A�����N���N���b�N���ł��A�������Ȃ��B
		$("#account_transfer a").on("click", function(){   
			 if($("#account_transfer").hasClass("cl_disabled") == true)
			 {
				return false;
			 }
        });
        //���x�����@���Q��I�����鎞�̂݁A�g�p��
        $("#payment_method").change(function(){
        
	        var checkIndex=$("#payment_method").get(0).selectedIndex;
	        var disable = 2!=checkIndex;

			$("#account_transfer").toggleClass("cl_disabled",disable);
			$("#account_transfer input").attr("disabled", disable); 
			$("#account_transfer input ").val("");
        }); 


    });

