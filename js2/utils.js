
// エラーを回避して掛け算。
function Multiply(x, y)
{
    x = x.toString().replace(',', '');
    y = y.toString().replace(',', '');

    if (!$.isNumeric(x) || !$.isNumeric(y)) {
        return 0;
    }

    return x * y;
}


// 初期費用、月額利用料の合計計算。
function SumPrices(formClass, isLabel)
{
    var initPrice = 0;
    var runningPrice = 0;
    $(formClass).each(function () {
        var accountingCode = $(this).data('accounting_code');
        if (accountingCode == '0') {
            runningPrice += Multiply($(this).data('price'), (isLabel ? $(this).data('amount') : $(this).val()));
        } else {
            initPrice += Multiply($(this).data('price'), (isLabel ? $(this).data('amount') : $(this).val()));
        }
    });
    return {
        init: initPrice,
        running: runningPrice,
    }
}

// data-init-price data-running-price を持っているタイプの要素で合計計算。
// accountingCode に構わず合計します。
function SumPrices2(formClass)
{
    var initPrice = 0;
    var runningPrice = 0;
    $(formClass).each(function () {

        var thisInitPrice = $(this).data('init_price');
        var thisRunningPrice = $(this).data('running_price');
        var campaignPrice = $(this).data('campaign_price');
        if (campaignPrice != undefined) {
            thisInitPrice = campaignPrice;
            thisRunningPrice = campaignPrice;
        }

        initPrice += Multiply(thisInitPrice, $(this).val());
        runningPrice += Multiply(thisRunningPrice, $(this).val());

    });
    return {
        init   : initPrice   ,
        running: runningPrice,
    }
}

// Array which holds yt video obj.
var ytPlayers = {};

// Add div.mask. Get a div.player to create video obj.
function onYouTubeIframeAPIReady() {
    $('.player-wrapper').append('<div class="mask"></div>');
    $('.slick-slide:not(.slick-cloned) .player').each(function (i, elem) {
        embedYoutube(i, elem);
    });
}

// Create yt video obj and add into array to reuse.
function embedYoutube(i, elem) {
    var videoId = $(elem).attr('videoid');
    var playerId = videoId + '_' + i;
    $(elem).attr('id', playerId);
    ytPlayers[playerId] = ytInit(playerId, videoId);
    hammerInit(playerId);
}

// Craete yt video obj.
function ytInit(playerId, videoId) {
    var ytPlayer = new YT.Player(
        playerId,
        {
            videoId: videoId,
            playerVars: {
                rel: 0,
                controls: 0,
                showinfo: 0,
                wmode: 'transparent'
            },
            events: {},
        }
    );
    return ytPlayer;
}

// Set actions when video is tapped.
// Use hammer cuz click event is fired when swiping as well.
function hammerInit(playerId) {
    var hammerObj = new Hammer($('#' + playerId + ' ~ .mask').get(0));
    hammerObj.on('tap', function (event) {
        ytPlayers[playerId].getPlayerState() == 1 ? ytPlayers[playerId].pauseVideo() : ytPlayers[playerId].playVideo();
    });
}
