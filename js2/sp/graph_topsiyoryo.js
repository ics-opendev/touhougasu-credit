// JavaScript Document

jQuery( function() {
    jQuery . jqplot(
        'id_graph_topsiyoryo',
        [
            graph_data
        ],
        {
            animate: true,
            seriesDefaults: {
                renderer: jQuery . jqplot . BarRenderer,
                rendererOptions: {
                    barWidth: 30,
                    shadowOffset: 0,
                }
            },
            axes: {
                xaxis: {
                    renderer: jQuery . jqplot . CategoryAxisRenderer,
                    tickOptions: {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '18px',
                        textColor: '#939393',
                        showGridline: false,
                        markSize: 0,
                    },
                },
                yaxis: {
                    label: '円',
                    labelOptions: {
                        fontFamily:  'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                    },
                    min: 0,
                    tickInterval: 2500,
                    tickOptions: {
                        fontFamily:  'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                        markSize: 0,
                    },
                }
            },
            title: {
                show: true,
                text: 'ご請求',
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '16px',
                textAlign: 'center',
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
                fontFamily:  'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '14px',
                textColor: '#1b1b1b',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
            },
            grid: {
                shadow: false,
                drawBorder: false,
                background: '#ffffff',
            },
            axesDefaults:{
                rendererOptions: {
                    drawBaseline: false
                }
            },
            highlighter: {
                show: true,
                showMarker: false,
                tooltipLocation: 'n',
                tooltipOffset: 30,
                tooltipAxes: 'y',
                yvalues: 1,
                formatString: '<table class="jqplot-highlighter"><tr><td><div class="test_jqplot-highlighter-tooltip-table-legend-swatch"></div></td><td>%s</td><td>円</td></tr></table>',
            }
        }
    );
    
    
    // グラフを描画してから非表示にする
    document.getElementById("id_graph_area").style.display="none";
    
} );