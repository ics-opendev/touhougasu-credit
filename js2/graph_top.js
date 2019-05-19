// JavaScript Document

jQuery(function () {
    jQuery.jqplot(
        'jqPlot-seikyu',
        [
            graph_seikyu_last_year,
            graph_seikyu_this_yaer
        ],
        {
            animate: true,
            seriesDefaults:
            {
                renderer: jQuery.jqplot.BarRenderer,
                rendererOptions:
                {
                    barWidth: 25,
                    shadowOffset: 0,
                    barPadding: 0,
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
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                        showGridline: false,
                        markSize: 0,
                    },
                },
                yaxis:
                {
                    //label: '円',
                    //labelOptions:
                    //{
                    //    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    //    fontSize: '14px',
                    //    textColor: '#1b1b1b',
                    //},
                    min: 0,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                        markSize: 0,
                        formatString: "%'g",

                    },
                },
            },
            title:
            {
                show: true,
                text: ' ',
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '16px',
                textAlign: 'center',
                textColor: '#1b1b1b',
            },
            series:
            [
                {
                    label: '前年度',
                    color: '#fae931',
                },
                {
                    label: '当年度',
                    color: '#f99e44',
                }
            ],
            //legend:
            //{
            //    show: true,
            //    placement: 'outside',
            //    location: 'n',
            //    border: 'none',
            //    background: 'none',
            //    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
            //    fontSize: '14px',
            //    textColor: '#1b1b1b',
            //    renderer: jQuery.jqplot.EnhancedLegendRenderer
            //},
            grid:
            {
                shadow: false,
                drawBorder: false,
                background: '#ffffff',
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
                tooltipLocation: 'n',
                tooltipOffset: 30,
                tooltipAxes: 'y',
                yvalues: 3,
                formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class=""><td><span class="cl_AmountThis">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                    <tr class=""><td><span class="cl_AmountLast">■</span></td><td style="text-align: right">%s</td><td>円</td></tr>\
                </table>',
            }
        }
    );

    //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    if (smalldatajudge1==false) {
        jQuery.jqplot(
            'jqPlot-gas',
            [
                graph_gas_last_year,
                graph_gas_this_yaer
            ],
            {
                animate: true,
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 25,
                        shadowOffset: 0,
                        barPadding: 0,
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
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0,
                        },
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g",
                            //formatString: "%.1f",
                        },
                    }
                },
                title:
                {
                    show: true,
                    text: ' ',
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '16px',
                    textAlign: 'center',
                    textColor: '#1b1b1b',
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
                    background: '#ffffff',
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
                    tooltipLocation: 'n',
                    tooltipOffset: 30,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class=""><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class=""><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>',
                }
            }
        );
    } else
    {
        jQuery.jqplot(
     'jqPlot-gas',
     [
         graph_gas_last_year,
         graph_gas_this_yaer
     ],
     {
         animate: true,
         seriesDefaults:
         {
             renderer: jQuery.jqplot.BarRenderer,
             rendererOptions:
             {
                 barWidth: 25,
                 shadowOffset: 0,
                 barPadding: 0,
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
                     fontSize: '14px',
                     textColor: '#1b1b1b',
                     showGridline: false,
                     markSize: 0,
                 },
             },
             yaxis:
             {
                 min: 0,
                 tickOptions:
                 {
                     fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                     fontSize: '14px',
                     textColor: '#1b1b1b',
                     markSize: 0,
                     //formatString: "%'g",
                     formatString: "%.1f",
                 },
             }
         },
         title:
         {
             show: true,
             text: ' ',
             fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
             fontSize: '16px',
             textAlign: 'center',
             textColor: '#1b1b1b',
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
             background: '#ffffff',
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
             tooltipLocation: 'n',
             tooltipOffset: 30,
             tooltipAxes: 'y',
             yvalues: 3,
             formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class=""><td><span class="cl_GasThis">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class=""><td><span class="cl_GasLast">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>',
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
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 25,
                        shadowOffset: 0,
                        barPadding: 0,
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
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0,
                        },
                    },
                    yaxis:
                    {
                        min: 0,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g",
                        },
                    }
                },
                title:
                {
                    show: true,
                    text: ' ',
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '16px',
                    textAlign: 'center',
                    textColor: '#1b1b1b',
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
                    background: '#ffffff',
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
                    tooltipLocation: 'n',
                    tooltipOffset: 30,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class=""><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class=""><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>',
                }
            }
        );
    }
    else
    {
        jQuery.jqplot(
    'jqPlot-electry',
    [
        graph_electry_last_year,
        graph_electry_this_yaer
    ],
    {
        animate: true,
        seriesDefaults:
        {
            renderer: jQuery.jqplot.BarRenderer,
            rendererOptions:
            {
                barWidth: 25,
                shadowOffset: 0,
                barPadding: 0,
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
                    fontSize: '14px',
                    textColor: '#1b1b1b',
                    showGridline: false,
                    markSize: 0,
                },
            },
            yaxis:
            {
                min: 0,
                tickOptions:
                {
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '14px',
                    textColor: '#1b1b1b',
                    markSize: 0,
                    //formatString: "%'g",
                    formatString: "%.1f",
                },
            }
        },
        title:
        {
            show: true,
            text: ' ',
            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
            fontSize: '16px',
            textAlign: 'center',
            textColor: '#1b1b1b',
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
            background: '#ffffff',
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
            tooltipLocation: 'n',
            tooltipOffset: 30,
            tooltipAxes: 'y',
            yvalues: 3,
            formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class=""><td><span class="cl_ElectryThis">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                    <tr class=""><td><span class="cl_ElectryLast">■</span></td><td style="text-align: right">%s</td><td>kWh</td></tr>\
                </table>',
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
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 25,
                        shadowOffset: 0,
                        barPadding: 0,
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
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0,
                        },
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g",
                        },
                    }
                },
                title:
                {
                    show: true,
                    text: ' ',
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '16px',
                    textAlign: 'center',
                    textColor: '#1b1b1b',
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
                    background: '#ffffff',
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
                    tooltipLocation: 'n',
                    tooltipOffset: 30,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>',
                }
            }
        );
        //全ての値が3以下(smalldatajudge1==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    } else if (smalldatajudge1 == false)
    {
        jQuery.jqplot(
        'jqPlot-heat1',
        [
            graph_heat1_last_year,
            graph_heat1_this_yaer
        ],
        {
            animate: true,
            seriesDefaults:
            {
                renderer: jQuery.jqplot.BarRenderer,
                rendererOptions:
                {
                    barWidth: 25,
                    shadowOffset: 0,
                    barPadding: 0,
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
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                        showGridline: false,
                        markSize: 0,
                    },
                },
                yaxis:
                {
                    min: 0,
                    tickOptions:
                    {
                        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                        fontSize: '14px',
                        textColor: '#1b1b1b',
                        markSize: 0,
                        formatString: "%'g",
                    },
                }
            },
            title:
            {
                show: true,
                text: ' ',
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '16px',
                textAlign: 'center',
                textColor: '#1b1b1b',
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
                background: '#ffffff',
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
                tooltipLocation: 'n',
                tooltipOffset: 30,
                tooltipAxes: 'y',
                yvalues: 3,
                formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>',
            }
        }
    );
    }
    else
    {
        jQuery.jqplot(
       'jqPlot-heat1',
       [
           graph_heat1_last_year,
           graph_heat1_this_yaer
       ],
       {
           animate: true,
           seriesDefaults:
           {
               renderer: jQuery.jqplot.BarRenderer,
               rendererOptions:
               {
                   barWidth: 25,
                   shadowOffset: 0,
                   barPadding: 0,
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
                       fontSize: '14px',
                       textColor: '#1b1b1b',
                       showGridline: false,
                       markSize: 0,
                   },
               },
               yaxis:
               {
                   min: 0,
                   tickOptions:
                   {
                       fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                       fontSize: '14px',
                       textColor: '#1b1b1b',
                       markSize: 0,
                       //formatString: "%'g",
                       formatString: "%.1f",
                   },
               }
           },
           title:
           {
               show: true,
               text: ' ',
               fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
               fontSize: '16px',
               textAlign: 'center',
               textColor: '#1b1b1b',
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
               background: '#ffffff',
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
               tooltipLocation: 'n',
               tooltipOffset: 30,
               tooltipAxes: 'y',
               yvalues: 3,
               formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1This">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat1Last">■</span></td><td style="text-align: right">%s</td><td>MJ</td></tr>\
                </table>',
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
                seriesDefaults:
                {
                    renderer: jQuery.jqplot.BarRenderer,
                    rendererOptions:
                    {
                        barWidth: 25,
                        shadowOffset: 0,
                        barPadding: 0,
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
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            showGridline: false,
                            markSize: 0,
                        },
                    },
                    yaxis:
                    {
                        min: 0,
                        tickInterval: 1,
                        numberTicks: 6,
                        tickOptions:
                        {
                            fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                            fontSize: '14px',
                            textColor: '#1b1b1b',
                            markSize: 0,
                            formatString: "%'g",
                        },
                    }
                },
                title:
                {
                    show: true,
                    text: ' ',
                    fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                    fontSize: '16px',
                    textAlign: 'center',
                    textColor: '#1b1b1b',
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
                    background: '#ffffff',
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
                    tooltipLocation: 'n',
                    tooltipOffset: 30,
                    tooltipAxes: 'y',
                    yvalues: 3,
                    formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>',
                }
            }
        );
    }
        //全ての値が3以下(smalldatajudge2==true)の場合は小数第一位までY軸の値を表示(3以下の場合自動表示だと異常に小さい小数値が表示されるため)
    else if (smalldatajudge2 == false)
    {
        jQuery.jqplot(
      'jqPlot-heat2',
      [
          graph_heat2_last_year,
          graph_heat2_this_yaer
      ],
      {
          animate: true,
          seriesDefaults:
          {
              renderer: jQuery.jqplot.BarRenderer,
              rendererOptions:
              {
                  barWidth: 25,
                  shadowOffset: 0,
                  barPadding: 0,
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
                      fontSize: '14px',
                      textColor: '#1b1b1b',
                      showGridline: false,
                      markSize: 0,
                  },
              },
              yaxis:
              {
                  min: 0,
                  tickOptions:
                  {
                      fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                      fontSize: '14px',
                      textColor: '#1b1b1b',
                      markSize: 0,
                      formatString: "%'g",
                  },
              }
          },
          title:
          {
              show: true,
              text: ' ',
              fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
              fontSize: '16px',
              textAlign: 'center',
              textColor: '#1b1b1b',
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
              background: '#ffffff',
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
              tooltipLocation: 'n',
              tooltipOffset: 30,
              tooltipAxes: 'y',
              yvalues: 3,
              formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>',
          }
      }
  );
     }
     else
     {
         jQuery.jqplot(
'jqPlot-heat2',
[
   graph_heat2_last_year,
   graph_heat2_this_yaer
],
{
    animate: true,
    seriesDefaults:
    {
        renderer: jQuery.jqplot.BarRenderer,
        rendererOptions:
        {
            barWidth: 25,
            shadowOffset: 0,
            barPadding: 0,
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
                fontSize: '14px',
                textColor: '#1b1b1b',
                showGridline: false,
                markSize: 0,
            },
        },
        yaxis:
        {
            min: 0,
            tickOptions:
            {
                fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
                fontSize: '14px',
                textColor: '#1b1b1b',
                markSize: 0,
                //formatString: "%'g",
                formatString: "%.1f",
            },
        }
    },
    title:
    {
        show: true,
        text: ' ',
        fontFamily: 'メイリオ , Meiryo, Osaka,  ＭＳ Ｐゴシック ,  MS PGothic , sans-serif,Helvetica',
        fontSize: '16px',
        textAlign: 'center',
        textColor: '#1b1b1b',
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
        background: '#ffffff',
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
        tooltipLocation: 'n',
        tooltipOffset: 30,
        tooltipAxes: 'y',
        yvalues: 3,
        formatString: ' \
                <table class="jqplot-highlighter">\
                    <tr class="cl_none"><td>未表示部分</td><td>%s</td><td></td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2This">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                    <tr class="cl_highlighter"><td><span class="cl_Heat2Last">■</span></td><td style="text-align: right">%s</td><td>m3</td></tr>\
                </table>',
    }
}
);
     }

});
