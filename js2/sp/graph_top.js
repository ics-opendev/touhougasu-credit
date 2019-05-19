/*-----------------------------------*/
/* SP版　*/
/*-----------------------------------*/
// JavaScript Document

// グラフ描画関数（drawGraph）に渡すグラフデータの作成処理
function refresh_graph(resData) {
    drawGraphInit(resData, true);
    $(window).resize(function () {
        drawGraphInit(resData, false);
    });
}

function drawGraphInit(resData, animation) {
    var graph_data = new Array();
    var resData2 = new Array();
    var data_flag = false;

    // resData.length = 3（固定）※最新3請求分
    for (i = 0; i < resData.length ; i++) {
        var vl = new Array(2);
        vl[0] = resData[i]["SikyDk"];  // 請求月
        vl[1] = resData[i]["Kngk"];    // 請求金額
        if (vl[1] > 0) {
            data_flag = true;
        }
        resData2.push(vl);
    }
    graph_data[0] = resData2;

    drawGraph(graph_data, data_flag, animation);
}

// jqplot描画関数
function drawGraph(graph_data, data_flag, animation) {
    // グラフ描画オプション定義
    var options = {
        animate: false,
        seriesDefaults: {
            renderer: jQuery.jqplot.BarRenderer,
            rendererOptions: {
                barWidth: 30,
                shadowOffset: 0,
            }
        },
        axes: {
            xaxis: {
                renderer: jQuery.jqplot.CategoryAxisRenderer,
                tickOptions: {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '18px',
                    textColor: '#666',
                    showGridline: false,
                    markSize: 0,
                },
            },
            yaxis: {
                label: '円',
                labelOptions: {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '14px',
                    textColor: '#1b1b1b',
                },
                min: 0,
                tickOptions: {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '14px',
                    textColor: '#1b1b1b',
                    markSize: 0,
                    formatString: "%'d"
                },
            }
        },
        title: {
            show: true,
            text: 'ご請求',
            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
            fontSize: '16px',
            textAlign: 'left',
            textColor: '#1b1b1b',
        },
        series: [
            {
                label: 'ご請求金額',
                color: '#ed8e31'
            }
        ],
        legend: {
            show: true,
            placement: 'outside',
            location: 'n',
            border: 'none',
            background: 'none',
            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
            fontSize: '14px',
            textColor: '#1b1b1b',
            renderer: jQuery.jqplot.EnhancedLegendRenderer,
            rendererOptions: {
                seriesToggle: false
            }
        },
        grid: {
            shadow: false,
            drawBorder: false,
            background: 'rgba(255,255,255,0)',
            gridLineColor: '#999',
        },
        axesDefaults: {
            rendererOptions: {
                drawBaseline: false
            }
        },
        highlighter: {
            show: true,
            showMarker: false,
            tooltipLocation: 'n',
            tooltipOffset: 10,
            // X軸とY軸、両方の値を表示
            tooltipAxes: 'xy',
            yvalues: 1,
            // X軸（請求月）とY軸（請求金額）の表示
            formatString: '<table class="jqplot-highlighter"><tr><td rowspan="2"><div class="jqplot-highlighter-tooltip-table-legend-swatch"></div></td><td>%s</td></tr><tr><td>%s</td><td>円</td></tr></table>',
        }
    }

    if (data_flag) {
        if (animation) {
            options.animate = true;
        }
    } else {
        options.axes.yaxis.tickInterval = 1000;
        options.axes.yaxis.numberTicks = 5;
    }

    // グラフ描画
    $("#id_graph_top").html("");
    jQuery.jqplot('id_graph_top', graph_data, options);
}
