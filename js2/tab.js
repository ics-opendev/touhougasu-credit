// JavaScript Document


    $(function(){
        //クリックしたときのファンクションをまとめて指定
        $(".cl_tab_btn li").on("click", function () {

            //.index()を使いクリックされたタブが何番目かを調べ、
            //indexという変数に代入します。
            var index = $('.cl_tab_btn li').index(this);
            document.getElementById("hidText").value = index;

            //コンテンツを一度すべて非表示にし、
            $('#id_layout_tab li').css('display', 'none');
            //$('#id_layout_tab li').css('visibility','hidden' );

            //クリックされたタブと同じ順番のコンテンツを表示します。
            $('#id_layout_tab li').eq(index).css('display', 'block');
            //$('#id_layout_tab li').eq(index).css('visibility', 'visible');

            //一度タブについているクラスselectを消し、
            $('.cl_tab_btn li').removeClass('cl_select');

            //クリックされたタブのみにクラスselectをつけます。
            $(this).addClass('cl_select');

            return false;
        });

    });

