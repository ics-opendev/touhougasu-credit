// JavaScript Document




//<!-- スライダ―表示設定 -->

$(document).ready(function () {


    //<!-- メインスライダー  -->

    var sliderImg = $('.cl_slider li').length;//スライダー内のLIの数を取得

    if (sliderImg > 1) {
        //LIの個数が１より多い場合は下記のプロパティで実行する。

        $('.cl_slider').slick({

            slidesToShow: 1, //スライドが見える数
            // slidesToScroll: 1, //スライドがスクロールする数
            infinite: true, //無限スクロール
            draggable: true, //マウスドラッグでのスクロール
            variableWidth: true, //幅違い要素あり
            // variableWidth: false, //幅違い要素あり
            centerMode: true,//選択スライドを中心に表示する
            //asNavFor: '.slider-nav' ,//サムネイルの画像と連動するためのクラスの指定
            centerPadding: '0px', //両サイドの見えている部分のサイズ
            autoplay: true,//自動再生
            autoplaySpeed: 3000,//再生速度 スライドの待機時間 1秒＝1000;
            focusOnSelect: true,//フォーカスしたら選択する
            dots: true,//dotの表示
            dotsClass: 'cl_dot',//dotのクラス名
            arrows: true,// 左右の次へ、前へボタンを表示 
            //lazyLoad:'ondemand',//画像の遅延表示
            adaptiveHeight: false,
            swipeToSlide: true,


        });
    }
    else {
        //LIの個数が１の場合は下記のプロパティで実行する。

        $('.cl_slider').slick({

            slidesToShow: 0, //スライドが見える数
            slidesToScroll: 1, //スライドがスクロールする数
            infinite: true, //無限スクロール
            draggable: true, //マウスドラッグでのスクロール
            variableWidth: true, //幅違い要素あり
            // variableWidth: false, //幅違い要素あり
            centerMode: true,//選択スライドを中心に表示する
            //asNavFor: '.slider-nav' ,//サムネイルの画像と連動するためのクラスの指定
            centerPadding: '0px', //両サイドの見えている部分のサイズ
            autoplay: true,//自動再生
            autoplaySpeed: 3000,//再生速度 スライドの待機時間 1秒＝1000;
            focusOnSelect: true,//フォーカスしたら選択する
            dots: true,//dotの表示
            dotsClass: 'cl_dot',//dotのクラス名
            arrows: true,// 左右の次へ、前へボタンを表示 
            //lazyLoad:'ondemand',//画像の遅延表示
            adaptiveHeight: false,
            swipeToSlide: true,

        });

    }

    //<!-- コンテンツ用のスライダー  -->
    $('.cl_c_slider').slick({


        slidesToShow: 1, //スライドが見える数  
        slidesToScroll: 1, //スライドがスクロールする数
        infinite: true, //無限スクロール
        draggable: true, //マウスドラッグでのスクロール
        variableWidth: true, //幅違い要素あり
        centerMode: true,//選択スライドを中心に表示する

        centerPadding: '0px', //両サイドの見えている部分のサイズ
        autoplay: false,//自動再生

        focusOnSelect: true,//フォーカスしたら選択する
        dots: false,//dotの表示

        arrows: true,// 左右の次へ、前へボタンを表示 
        //lazyLoad:'ondemand',画像の遅延表示
        swipeToSlide: true,

    });

    //<!-- バナー用のスライダー  -->
    $('.cl_b_slider').slick({


        slidesToShow: 1, //スライドが見える数  
        slidesToScroll: 1, //スライドがスクロールする数
        infinite: true, //無限スクロール
        draggable: true, //マウスドラッグでのスクロール
        variableWidth: true, //幅違い要素あり
        autoplay: true,//自動再生
        autoplaySpeed: 2000,//再生速度 スライドの待機時間 1秒＝1000;
        dots: false,//dotの表示
        centerMode: true,//選択スライドを中心に表示する
        arrows: true,// 左右の次へ、前へボタンを表示 
        //lazyLoad:'ondemand',画像の遅延表示
        swipeToSlide: true,
        pauseOnFocus: false,
    });



});

//1行のお知らせ 設定 -- bxslider config --

$(document).ready(function () {
    var bxsliderLen = $('.bxslider li').length;//スライダー内のLIの数を取得
    var bxslide = $('.cl_headline .bxslider').bxSlider({
        infiniteLoop: true,// スライドを無限ループにする
        adaptiveHeight: true, //行数による高さの変化表示
        mode: 'vertical', //スライドの方向・方法
        auto: true, //自動再生開始
        speed: 500, //スライドの移動速度
        pause: 4000, //スライドの待機時間 1秒＝1000;
        pager: false, //ページ個数表示
        autoHover: true, //hover時に停止する
        autoDelay: 500, //自動再生開始までの時間
        minSlides: 1,//表示するスライドの最低値
        maxSlides: 1,//表示するスライドの最大値
        controls: false,
        onSlideAfter: function () { //スライドから離れたイベント
            if (bxsliderLen > 1)
                bxslide.startAuto(); //自動再生 再開
        }

    });
});

$(document).ready(function () {
    var bxslide = $('.bxslider2').bxSlider({
        infiniteLoop: true,// スライドを無限ループにする
        adaptiveHeight: true, //行数による高さの変化表示
        mode: 'horizontal', //スライドの方向・方法
        auto: true, //自動再生開始
        speed: 500, //スライドの移動速度
        pause: 6000, //スライドの待機時間 1秒＝1000;
        pager: true, //ページ個数表示
        autoHover: true, //hover時に停止する
        autoDelay: 500, //自動再生開始までの時間
        minSlides: 1,//表示するスライドの最低値
        maxSlides: 1,//表示するスライドの最大値
        controls: true,
        onSlideAfter: function () { //スライドから離れたイベント
            bxslide.startAuto(); //自動再生 再開
        }
    });
    $(".bxslider2").click(function () {   //スライドをクリックイベント       
        bxslide.startAuto();  //自動再生 再開
    });
});
