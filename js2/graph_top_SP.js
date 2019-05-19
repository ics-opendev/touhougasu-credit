// JavaScript Document

var timer = false;
$(window).resize(function () {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        checkOrientation();
    }, 200);
});
function checkOrientation() {
    var content00 = $('#accordion_00').css('display');
    var content01 = $('#accordion_01').css('display');
    var content02 = $('#accordion_02').css('display');
    var content03 = $('#accordion_03').css('display');

    //現在アコーディオンがオープン中の物のみ画面サイズ変更でreplot
    if (content00 == 'block') {
        checkOrientationSeikyu();
    }
    if (content01 == 'block') {
        checkOrientationGas();
    }
    if (content02 == 'block') {
        checkOrientationEle();
    }
    if (content03 == 'block') {
        checkOrientationHeat1();
        checkOrientationHeat2();
    }
}
function checkOrientationSeikyu() {
    var plot = jQuery.jqplot(
        'jqPlot-seikyu',
        [
            graph_seikyu_last_year,
            graph_seikyu_this_yaer
        ],
        {
            animate: true,
            title:
            {
                show: true,
                text: ' '
            },
            seriesDefaults:
            {
                renderer: jQuery.jqplot.BarRenderer,
                rendererOptions:
                {
                    barWidth: 7,
                    shadowOffset: 0,
                    barPadding: 0
                }
            },
            axes:
            {
                xaxis:
                {
                    renderer: jQuery.jqplot.CategoryAxisRenderer,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '10px',
                        textColor: '#1b1b1b',
                        showGridline: false,
                        markSize: 0
                    }
                },
                yaxis:
                {
                    min: 0,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '10px',
                        textColor: '#1b1b1b',
                        markSize: 0,
                        formatString: "%'g"
                    }
                }
            },
            series:
            [
                {
                    label: '前年度',
                    color: '#fae931'
                },
                {
                    label: '当年度',
                    color: '#f99e44'
                }
            ],
            grid:
            {
                shadow: false,
                drawBorder: false,
                background: '#ffffff'
            },
            axesDefaults:
            {
                rendererOptions:
                {
                    drawBaseline: false
                }
            },
            highlighter:
            {
                show: true,
                showMarker: false,
                tooltipLocation: 'nw',
                tooltipOffset: -10,
                tooltipAxes: 'y',
                yvalues: 3,
                formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_AmountThis">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_AmountLast">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                </table>'
            }
        }
    );
    plot.replot();
};
function checkOrientationGas() {
    //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    if (smalldatajudge1 == false) {
        jQuery.jqplot(
            'jqPlot-gas',
            [
                graph_gas_last_year,
                graph_gas_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#a0d5f4'
                    },
                    {
                        label: '当年度',
                        color: '#0a58c3'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
                }
            }
        ).replot();
    }
    else {
        jQuery.jqplot(
    'jqPlot-gas',
    [
        graph_gas_last_year,
        graph_gas_this_yaer
    ],
    {
        animate: true,
        title:
        {
            show: true,
            text: ' '
        },
        seriesDefaults:
        {
            renderer: jQuery.jqplot.BarRenderer,
            rendererOptions:
            {
                barWidth: 7,
                shadowOffset: 0,
                barPadding: 0
            }
        },
        axes:
        {
            xaxis:
            {
                renderer: jQuery.jqplot.CategoryAxisRenderer,
                tickOptions:
                {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '10px',
                    textColor: '#1b1b1b',
                    showGridline: false,
                    markSize: 0
                }
            },
            yaxis:
            {
                min: 0,
                tickOptions:
                {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '10px',
                    textColor: '#1b1b1b',
                    markSize: 0,
                    //formatString: "%'g"
                    formatString: "%.1f"
                }
            }
        },
        series:
        [
            {
                label: '前年度',
                color: '#a0d5f4'
            },
            {
                label: '当年度',
                color: '#0a58c3'
            }
        ],
        grid:
        {
            shadow: false,
            drawBorder: false,
            background: '#ffffff'
        },
        axesDefaults:
        {
            rendererOptions:
            {
                drawBaseline: false
            }
        },
        highlighter:
        {
            show: true,
            showMarker: false,
            tooltipLocation: 'nw',
            tooltipOffset: -10,
            tooltipAxes: 'y',
            yvalues: 3,
            formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
        }
    }
).replot();

    }
};
function checkOrientationEle() {

    //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    if (smalldatajudge1 == false) {
        jQuery.jqplot(
            'jqPlot-electry',
            [
                graph_electry_last_year,
                graph_electry_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#fbdb5b'
                    },
                    {
                        label: '当年度',
                        color: '#b24700'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>'
                }
            }
        ).replot();
    }
    else {
        jQuery.jqplot(
     'jqPlot-electry',
     [
         graph_electry_last_year,
         graph_electry_this_yaer
     ],
     {
         animate: true,
         title:
         {
             show: true,
             text: ' '
         },
         seriesDefaults:
         {
             renderer: jQuery.jqplot.BarRenderer,
             rendererOptions:
             {
                 barWidth: 7,
                 shadowOffset: 0,
                 barPadding: 0
             }
         },
         axes:
         {
             xaxis:
             {
                 renderer: jQuery.jqplot.CategoryAxisRenderer,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     showGridline: false,
                     markSize: 0
                 }
             },
             yaxis:
             {
                 min: 0,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     markSize: 0,
                     //formatString: "%'g"
                     formatString: "%.1f"
                 }
             }
         },
         series:
         [
             {
                 label: '前年度',
                 color: '#fbdb5b'
             },
             {
                 label: '当年度',
                 color: '#b24700'
             }
         ],
         grid:
         {
             shadow: false,
             drawBorder: false,
             background: '#ffffff'
         },
         axesDefaults:
         {
             rendererOptions:
             {
                 drawBaseline: false
             }
         },
         highlighter:
         {
             show: true,
             showMarker: false,
             tooltipLocation: 'nw',
             tooltipOffset: -10,
             tooltipAxes: 'y',
             yvalues: 3,
             formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>'
         }
     }
 ).replot();

    }
};
function checkOrientationHeat1() {
    //データが全て0の場合Y軸固定のグラフを表示
    if (noDataCheckHeat1) {
        jQuery.jqplot(
            'jqPlot-heat1',
            [
                graph_heat1_last_year,
                graph_heat1_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#f3acf9'
                    },
                    {
                        label: '当年度',
                        color: '#b127c1'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
                }
            }
        ).replot();
    }
        //全ての値が3以下(smalldatajudge1==false)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    else if (smalldatajudge1 == false) {
        jQuery.jqplot(
       'jqPlot-heat1',
       [
           graph_heat1_last_year,
           graph_heat1_this_yaer
       ],
       {
           animate: true,
           title:
           {
               show: true,
               text: ' '
           },
           seriesDefaults:
           {
               renderer: jQuery.jqplot.BarRenderer,
               rendererOptions:
               {
                   barWidth: 7,
                   shadowOffset: 0,
                   barPadding: 0
               }
           },
           axes:
           {
               xaxis:
               {
                   renderer: jQuery.jqplot.CategoryAxisRenderer,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       showGridline: false,
                       markSize: 0
                   }
               },
               yaxis:
               {
                   min: 0,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       markSize: 0,
                       formatString: "%'g"
                   }
               }
           },
           series:
           [
               {
                   label: '前年度',
                   color: '#f3acf9'
               },
               {
                   label: '当年度',
                   color: '#b127c1'
               }
           ],
           grid:
           {
               shadow: false,
               drawBorder: false,
               background: '#ffffff'
           },
           axesDefaults:
           {
               rendererOptions:
               {
                   drawBaseline: false
               }
           },
           highlighter:
           {
               show: true,
               showMarker: false,
               tooltipLocation: 'nw',
               tooltipOffset: -10,
               tooltipAxes: 'y',
               yvalues: 3,
               formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
           }
       }
   ).replot();
    }
    else {
        jQuery.jqplot(
'jqPlot-heat1',
[
    graph_heat1_last_year,
    graph_heat1_this_yaer
],
{
    animate: true,
    title:
    {
        show: true,
        text: ' '
    },
    seriesDefaults:
    {
        renderer: jQuery.jqplot.BarRenderer,
        rendererOptions:
        {
            barWidth: 7,
            shadowOffset: 0,
            barPadding: 0
        }
    },
    axes:
    {
        xaxis:
        {
            renderer: jQuery.jqplot.CategoryAxisRenderer,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                showGridline: false,
                markSize: 0
            }
        },
        yaxis:
        {
            min: 0,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                markSize: 0,
                //formatString: "%'g"
                formatString: "%.1f"
            }
        }
    },
    series:
    [
        {
            label: '前年度',
            color: '#f3acf9'
        },
        {
            label: '当年度',
            color: '#b127c1'
        }
    ],
    grid:
    {
        shadow: false,
        drawBorder: false,
        background: '#ffffff'
    },
    axesDefaults:
    {
        rendererOptions:
        {
            drawBaseline: false
        }
    },
    highlighter:
    {
        show: true,
        showMarker: false,
        tooltipLocation: 'nw',
        tooltipOffset: -10,
        tooltipAxes: 'y',
        yvalues: 3,
        formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
    }
}
).replot();
    }
};
function checkOrientationHeat2() {
    //noDataCheckHeat2がtrueの場合はY軸固定で表示(データ全て0の場合)
    if (noDataCheckHeat2) {
        jQuery.jqplot(
            'jqPlot-heat2',
            [
                graph_heat2_last_year,
                graph_heat2_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#f79582'
                    },
                    {
                        label: '当年度',
                        color: '#e7573b'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
                }
            }
        ).replot();
        //全ての値が3以下(smalldatajudge2==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    } else if (smalldatajudge2 == false) {
        jQuery.jqplot(
     'jqPlot-heat2',
     [
         graph_heat2_last_year,
         graph_heat2_this_yaer
     ],
     {
         animate: true,
         title:
         {
             show: true,
             text: ' '
         },
         seriesDefaults:
         {
             renderer: jQuery.jqplot.BarRenderer,
             rendererOptions:
             {
                 barWidth: 7,
                 shadowOffset: 0,
                 barPadding: 0
             }
         },
         axes:
         {
             xaxis:
             {
                 renderer: jQuery.jqplot.CategoryAxisRenderer,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     showGridline: false,
                     markSize: 0
                 }
             },
             yaxis:
             {
                 min: 0,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     markSize: 0,
                     formatString: "%'g"
                 }
             }
         },
         series:
         [
             {
                 label: '前年度',
                 color: '#f79582'
             },
             {
                 label: '当年度',
                 color: '#e7573b'
             }
         ],
         grid:
         {
             shadow: false,
             drawBorder: false,
             background: '#ffffff'
         },
         axesDefaults:
         {
             rendererOptions:
             {
                 drawBaseline: false
             }
         },
         highlighter:
         {
             show: true,
             showMarker: false,
             tooltipLocation: 'nw',
             tooltipOffset: -10,
             tooltipAxes: 'y',
             yvalues: 3,
             formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
         }
     }
 ).replot();
    }
    else {
        jQuery.jqplot(
'jqPlot-heat2',
[
 graph_heat2_last_year,
 graph_heat2_this_yaer
],
{
    animate: true,
    title:
    {
        show: true,
        text: ' '
    },
    seriesDefaults:
    {
        renderer: jQuery.jqplot.BarRenderer,
        rendererOptions:
        {
            barWidth: 7,
            shadowOffset: 0,
            barPadding: 0
        }
    },
    axes:
    {
        xaxis:
        {
            renderer: jQuery.jqplot.CategoryAxisRenderer,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                showGridline: false,
                markSize: 0
            }
        },
        yaxis:
        {
            min: 0,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                markSize: 0,
                //formatString: "%'g"
                formatString: "%.1f"
            }
        }
    },
    series:
    [
        {
            label: '前年度',
            color: '#f79582'
        },
        {
            label: '当年度',
            color: '#e7573b'
        }
    ],
    grid:
    {
        shadow: false,
        drawBorder: false,
        background: '#ffffff'
    },
    axesDefaults:
    {
        rendererOptions:
        {
            drawBaseline: false
        }
    },
    highlighter:
    {
        show: true,
        showMarker: false,
        tooltipLocation: 'nw',
        tooltipOffset: -10,
        tooltipAxes: 'y',
        yvalues: 3,
        formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
    }
}
).replot();
    }
};

jQuery(function () {
    jQuery.jqplot(
        'jqPlot-seikyu',
        [
            graph_seikyu_last_year,
            graph_seikyu_this_yaer
        ],
        {
            animate: true,
            title:
            {
                show: true,
                text: ' '
            },
            seriesDefaults:
            {
                renderer: jQuery.jqplot.BarRenderer,
                rendererOptions:
                {
                    barWidth: 7,
                    shadowOffset: 0,
                    barPadding: 0
                }
            },
            axes:
            {
                xaxis:
                {
                    renderer: jQuery.jqplot.CategoryAxisRenderer,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '10px',
                        textColor: '#1b1b1b',
                        showGridline: false,
                        markSize: 0
                    }
                },
                yaxis:
                {
                    min: 0,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '10px',
                        textColor: '#1b1b1b',
                        markSize: 0,
                        formatString: "%'g"
                    }
                }
            },
            series:
            [
                {
                    label: '前年度',
                    color: '#fae931'
                },
                {
                    label: '当年度',
                    color: '#f99e44'
                }
            ],
            grid:
            {
                shadow: false,
                drawBorder: false,
                background: '#ffffff'
            },
            axesDefaults:
            {
                rendererOptions:
                {
                    drawBaseline: false
                }
            },
            highlighter:
            {
                show: true,
                showMarker: false,
                tooltipLocation: 'nw',
                tooltipOffset: -10,
                tooltipAxes: 'y',
                yvalues: 3,
                formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_AmountThis">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_AmountLast">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                </table>'
            }
        }
    );

    //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    if (smalldatajudge1 == false) {
        jQuery.jqplot(
            'jqPlot-gas',
            [
                graph_gas_last_year,
                graph_gas_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#a0d5f4'
                    },
                    {
                        label: '当年度',
                        color: '#0a58c3'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
                }
            }
        );
    } else {
        jQuery.jqplot(
     'jqPlot-gas',
     [
         graph_gas_last_year,
         graph_gas_this_yaer
     ],
     {
         animate: true,
         title:
         {
             show: true,
             text: ' '
         },
         seriesDefaults:
         {
             renderer: jQuery.jqplot.BarRenderer,
             rendererOptions:
             {
                 barWidth: 7,
                 shadowOffset: 0,
                 barPadding: 0
             }
         },
         axes:
         {
             xaxis:
             {
                 renderer: jQuery.jqplot.CategoryAxisRenderer,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     showGridline: false,
                     markSize: 0
                 }
             },
             yaxis:
             {
                 min: 0,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     markSize: 0,
                     //formatString: "%'g"
                     formatString: "%.1f"
                 }
             }
         },
         series:
         [
             {
                 label: '前年度',
                 color: '#a0d5f4'
             },
             {
                 label: '当年度',
                 color: '#0a58c3'
             }
         ],
         grid:
         {
             shadow: false,
             drawBorder: false,
             background: '#ffffff'
         },
         axesDefaults:
         {
             rendererOptions:
             {
                 drawBaseline: false
             }
         },
         highlighter:
         {
             show: true,
             showMarker: false,
             tooltipLocation: 'nw',
             tooltipOffset: -10,
             tooltipAxes: 'y',
             yvalues: 3,
             formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
         }
     }
    );
    }

    //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    if (smalldatajudge1 == false) {
        jQuery.jqplot(
            'jqPlot-electry',
            [
                graph_electry_last_year,
                graph_electry_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#fbdb5b'
                    },
                    {
                        label: '当年度',
                        color: '#b24700'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>'
                }
            }
        );
    }
    else {
        jQuery.jqplot(
       'jqPlot-electry',
       [
           graph_electry_last_year,
           graph_electry_this_yaer
       ],
       {
           animate: true,
           title:
           {
               show: true,
               text: ' '
           },
           seriesDefaults:
           {
               renderer: jQuery.jqplot.BarRenderer,
               rendererOptions:
               {
                   barWidth: 7,
                   shadowOffset: 0,
                   barPadding: 0
               }
           },
           axes:
           {
               xaxis:
               {
                   renderer: jQuery.jqplot.CategoryAxisRenderer,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       showGridline: false,
                       markSize: 0
                   }
               },
               yaxis:
               {
                   min: 0,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       markSize: 0,
                       //formatString: "%'g"
                       formatString: "%.1f"
                   }
               }
           },
           series:
           [
               {
                   label: '前年度',
                   color: '#fbdb5b'
               },
               {
                   label: '当年度',
                   color: '#b24700'
               }
           ],
           grid:
           {
               shadow: false,
               drawBorder: false,
               background: '#ffffff'
           },
           axesDefaults:
           {
               rendererOptions:
               {
                   drawBaseline: false
               }
           },
           highlighter:
           {
               show: true,
               showMarker: false,
               tooltipLocation: 'nw',
               tooltipOffset: -10,
               tooltipAxes: 'y',
               yvalues: 3,
               formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>'
           }
       }
   );
    }

    //noDataCheckHeat1がtrueの場合はY軸固定で表示(データ全て0の場合)
    if (noDataCheckHeat1) {
        jQuery.jqplot(
            'jqPlot-heat1',
            [
                graph_heat1_last_year,
                graph_heat1_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#f3acf9'
                    },
                    {
                        label: '当年度',
                        color: '#b127c1'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
                }
            }
        );
    }
        //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    else if (smalldatajudge1 == false) {
        jQuery.jqplot(
     'jqPlot-heat1',
     [
         graph_heat1_last_year,
         graph_heat1_this_yaer
     ],
     {
         animate: true,
         title:
         {
             show: true,
             text: ' '
         },
         seriesDefaults:
         {
             renderer: jQuery.jqplot.BarRenderer,
             rendererOptions:
             {
                 barWidth: 7,
                 shadowOffset: 0,
                 barPadding: 0
             }
         },
         axes:
         {
             xaxis:
             {
                 renderer: jQuery.jqplot.CategoryAxisRenderer,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     showGridline: false,
                     markSize: 0
                 }
             },
             yaxis:
             {
                 min: 0,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '10px',
                     textColor: '#1b1b1b',
                     markSize: 0,
                     formatString: "%'g"
                 }
             }
         },
         series:
         [
             {
                 label: '前年度',
                 color: '#f3acf9'
             },
             {
                 label: '当年度',
                 color: '#b127c1'
             }
         ],
         grid:
         {
             shadow: false,
             drawBorder: false,
             background: '#ffffff'
         },
         axesDefaults:
         {
             rendererOptions:
             {
                 drawBaseline: false
             }
         },
         highlighter:
         {
             show: true,
             showMarker: false,
             tooltipLocation: 'nw',
             tooltipOffset: -10,
             tooltipAxes: 'y',
             yvalues: 3,
             formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
         }
     }
 );
    }
    else {
        jQuery.jqplot(
'jqPlot-heat1',
[
 graph_heat1_last_year,
 graph_heat1_this_yaer
],
{
    animate: true,
    title:
    {
        show: true,
        text: ' '
    },
    seriesDefaults:
    {
        renderer: jQuery.jqplot.BarRenderer,
        rendererOptions:
        {
            barWidth: 7,
            shadowOffset: 0,
            barPadding: 0
        }
    },
    axes:
    {
        xaxis:
        {
            renderer: jQuery.jqplot.CategoryAxisRenderer,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                showGridline: false,
                markSize: 0
            }
        },
        yaxis:
        {
            min: 0,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '10px',
                textColor: '#1b1b1b',
                markSize: 0,
                //formatString: "%'g"
                formatString: "%.1f"
            }
        }
    },
    series:
    [
        {
            label: '前年度',
            color: '#f3acf9'
        },
        {
            label: '当年度',
            color: '#b127c1'
        }
    ],
    grid:
    {
        shadow: false,
        drawBorder: false,
        background: '#ffffff'
    },
    axesDefaults:
    {
        rendererOptions:
        {
            drawBaseline: false
        }
    },
    highlighter:
    {
        show: true,
        showMarker: false,
        tooltipLocation: 'nw',
        tooltipOffset: -10,
        tooltipAxes: 'y',
        yvalues: 3,
        formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>'
    }
}
);
    }


    //noDataCheckHeat2がtrueの場合はY軸固定で表示(データ全て0の場合)
    if (noDataCheckHeat2) {
        jQuery.jqplot(
            'jqPlot-heat2',
            [
                graph_heat2_last_year,
                graph_heat2_this_yaer
            ],
            {
                animate: true,
                title:
                {
                    show: true,
                    text: ' '
                },
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 7,
                        shadowOffset: 0,
                        barPadding: 0
                    }
                },
                axes:
                {
                    xaxis:
                    {
                        renderer: jQuery.jqplot.CategoryAxisRenderer,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0
                        }
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '10px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g"
                        }
                    }
                },
                series:
                [
                    {
                        label: '前年度',
                        color: '#f79582'
                    },
                    {
                        label: '当年度',
                        color: '#e7573b'
                    }
                ],
                grid:
                {
                    shadow: false,
                    drawBorder: false,
                    background: '#ffffff'
                },
                axesDefaults:
                {
                    rendererOptions:
                    {
                        drawBaseline: false
                    }
                },
                highlighter:
                {
                    show: true,
                    showMarker: false,
                    tooltipLocation: 'nw',
                    tooltipOffset: -10,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
                }
            }
        );
    }
        //全ての値が3以下(smalldatajudge2==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    else if (smalldatajudge2 == false) {
        jQuery.jqplot(
       'jqPlot-heat2',
       [
           graph_heat2_last_year,
           graph_heat2_this_yaer
       ],
       {
           animate: true,
           title:
           {
               show: true,
               text: ' '
           },
           seriesDefaults:
           {
               renderer: jQuery.jqplot.BarRenderer,
               rendererOptions:
               {
                   barWidth: 7,
                   shadowOffset: 0,
                   barPadding: 0
               }
           },
           axes:
           {
               xaxis:
               {
                   renderer: jQuery.jqplot.CategoryAxisRenderer,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       showGridline: false,
                       markSize: 0
                   }
               },
               yaxis:
               {
                   min: 0,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '10px',
                       textColor: '#1b1b1b',
                       markSize: 0,
                       formatString: "%'g"
                   }
               }
           },
           series:
           [
               {
                   label: '前年度',
                   color: '#f79582'
               },
               {
                   label: '当年度',
                   color: '#e7573b'
               }
           ],
           grid:
           {
               shadow: false,
               drawBorder: false,
               background: '#ffffff'
           },
           axesDefaults:
           {
               rendererOptions:
               {
                   drawBaseline: false
               }
           },
           highlighter:
           {
               show: true,
               showMarker: false,
               tooltipLocation: 'nw',
               tooltipOffset: -10,
               tooltipAxes: 'y',
               yvalues: 3,
               formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
           }
       }
   );
    } else {
        {
            jQuery.jqplot(
           'jqPlot-heat2',
           [
               graph_heat2_last_year,
               graph_heat2_this_yaer
           ],
           {
               animate: true,
               title:
               {
                   show: true,
                   text: ' '
               },
               seriesDefaults:
               {
                   renderer: jQuery.jqplot.BarRenderer,
                   rendererOptions:
                   {
                       barWidth: 7,
                       shadowOffset: 0,
                       barPadding: 0
                   }
               },
               axes:
               {
                   xaxis:
                   {
                       renderer: jQuery.jqplot.CategoryAxisRenderer,
                       tickOptions:
                       {
                           fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                           fontSize: '10px',
                           textColor: '#1b1b1b',
                           showGridline: false,
                           markSize: 0
                       }
                   },
                   yaxis:
                   {
                       min: 0,
                       tickOptions:
                       {
                           fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                           fontSize: '10px',
                           textColor: '#1b1b1b',
                           markSize: 0,
                           //formatString: "%'g"
                           formatString: "%.1f"
                       }
                   }
               },
               series:
               [
                   {
                       label: '前年度',
                       color: '#f79582'
                   },
                   {
                       label: '当年度',
                       color: '#e7573b'
                   }
               ],
               grid:
               {
                   shadow: false,
                   drawBorder: false,
                   background: '#ffffff'
               },
               axesDefaults:
               {
                   rendererOptions:
                   {
                       drawBaseline: false
                   }
               },
               highlighter:
               {
                   show: true,
                   showMarker: false,
                   tooltipLocation: 'nw',
                   tooltipOffset: -10,
                   tooltipAxes: 'y',
                   yvalues: 3,
                   formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>'
               }
           }
       );
        }
    }

});

