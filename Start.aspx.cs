using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;

public partial class Start : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    { }

    protected void RegistButton_Click(object sender, EventArgs e)
    {
        string custId = this.CustIdText.Text;
        if (string.IsNullOrEmpty(custId))
        {
            this.ErrorLabel.Visible = true;
            return;
        }

        this.ErrorLabel.Visible = false;
        ClientScript.RegisterClientScriptBlock(typeof(string), "SettlementScript", CreateSettlementScript(custId));
    }

    private string CreateSettlementScript(string custId)
    {
        return string.Join("\n", new string[]
            {
                "<script>",
                    "function f_submit()",
                    "{",
                        "var order = new Order();",
                        "order.pay_method            = '" + ConfigurationManager.AppSettings["PayMethod"] + "';",
                        "order.merchant_id           = '" + ConfigurationManager.AppSettings["MarchantId"] + "';",
                        "order.service_id            = '" + ConfigurationManager.AppSettings["ServiceId"] + "';",
                        "order.cust_code             = '" + custId + "';",
                        "order.sps_cust_no           = '';",
                        "order.sps_payment_no        = '';",
                        "order.terminal_type         = '0';",
                        "order.success_url           = '" + ConfigurationManager.AppSettings["LinkSuccessUrl"] + "';",
                        "order.cancel_url            = '" + ConfigurationManager.AppSettings["LinkCancelUrl"] + "';",
                        "order.error_url             = '" + ConfigurationManager.AppSettings["LinkErrorUrl"] + "';",
                        "order.pagecon_url           = '" + ConfigurationManager.AppSettings["LinkCgiUrl"] + "';",
                        "order.free1                 = '';",
                        "order.free2                 = '';",
                        "order.free3                 = '';",
                        "order.request_date          = '" + DateTime.Now.ToString("yyyyMMddHHmmss") + "';",
                        "order.limit_second          = '';",
                        "order.hashkey               = '" + ConfigurationManager.AppSettings["LinkHashKey"] + "';",
                        "order.sps_hashcode          = Sha1.hash( order.toString() );",
                        "feppost(order);",
                    "}",

                    // オブジェクト定義[OrderDetail]
                    "function OrderDetail()",
                    "{",
                        "this.toString = function() {",
                            "var result =",
                                "this.dtl_rowno +",
                                "this.dtl_item_id +",
                                "this.dtl_item_name +",
                                "this.dtl_item_count +",
                                "this.dtl_tax +",
                                "this.dtl_amount +",
                                "this.dtl_free1 +",
                                "this.dtl_free2 +",
                                "this.dtl_free3;",
                            "return result;",
                        "}",
                    "}",

                    // オブジェクト定義[Order]
                    "function Order()",
                    "{",
                        "this.orderDetail = new Array();",
                        "this.toString = function() {",
                            "var resultOrderDetail = '';",
                            "for (i = 0; i < this.orderDetail.length; i++) {",
                                "resultOrderDetail = resultOrderDetail + this.orderDetail[i].toString();",
                            "}",
                            "var result =",
                                "this.pay_method +",
                                "this.merchant_id +",
                                "this.service_id +",
                                "this.cust_code +",
                                "this.sps_cust_no +",
                                "this.sps_payment_no +",
                                "this.terminal_type +",
                                "this.success_url +",
                                "this.cancel_url +",
                                "this.error_url +",
                                "this.pagecon_url +",
                                "this.free1 +",
                                "this.free2 +",
                                "this.free3 +",
                                "resultOrderDetail +",
                                "this.request_date +",
                                "this.limit_second +",
                                "this.hashkey;",
                            "return result;",
                        "};",
                    "}",

                    // 日時の取得
                    "function getYYYYMMDDHHMMSS(){",
                        "var now = new Date();",
                        "return now.getFullYear() + zeroPadding(now.getMonth() + 1) + zeroPadding(now.getDate()) +",
                               "zeroPadding(now.getHours()) + zeroPadding(now.getMinutes()) + zeroPadding(now.getSeconds());",
                    "}",
                    "function zeroPadding(num) {",
                        "if (num < 10) { num = '0' + num; }",
                        "return num + '';",
                    "}",
                    "function feppost(order)",
                    "{",
                        "var connectUrl = '" + ConfigurationManager.AppSettings["CustAddUrl"] + "';",
                        "var form =",
                            "$('<form></form>',{action:connectUrl,target:'_self',method:'POST'}).hide();",
                        "var body = $('body');",
                        "body.append(form);",
                        "form.append($('<input>',{type:'hidden',name:'pay_method'        ,value:order.pay_method                  }));",
                        "form.append($('<input>',{type:'hidden',name:'merchant_id'       ,value:order.merchant_id                 }));",
                        "form.append($('<input>',{type:'hidden',name:'service_id'        ,value:order.service_id                  }));",
                        "form.append($('<input>',{type:'hidden',name:'cust_code'         ,value:order.cust_code                   }));",
                        "form.append($('<input>',{type:'hidden',name:'sps_cust_no'       ,value:order.sps_cust_no                 }));",
                        "form.append($('<input>',{type:'hidden',name:'sps_payment_no'    ,value:order.sps_payment_no              }));",
                        "form.append($('<input>',{type:'hidden',name:'order_id'          ,value:order.order_id                    }));",
                        "form.append($('<input>',{type:'hidden',name:'item_id'           ,value:order.item_id                     }));",
                        "form.append($('<input>',{type:'hidden',name:'pay_item_id'       ,value:order.pay_item_id                 }));",
                        "form.append($('<input>',{type:'hidden',name:'item_name'         ,value:order.item_name                   }));",
                        "form.append($('<input>',{type:'hidden',name:'tax'               ,value:order.tax                         }));",
                        "form.append($('<input>',{type:'hidden',name:'amount'            ,value:order.amount                      }));",
                        "form.append($('<input>',{type:'hidden',name:'pay_type'          ,value:order.pay_type                    }));",
                        "form.append($('<input>',{type:'hidden',name:'auto_charge_type'  ,value:order.auto_charge_type            }));",
                        "form.append($('<input>',{type:'hidden',name:'service_type'      ,value:order.service_type                }));",
                        "form.append($('<input>',{type:'hidden',name:'div_settele'       ,value:order.div_settele                 }));",
                        "form.append($('<input>',{type:'hidden',name:'last_charge_month' ,value:order.last_charge_month           }));",
                        "form.append($('<input>',{type:'hidden',name:'camp_type'         ,value:order.camp_type                   }));",
                        "form.append($('<input>',{type:'hidden',name:'tracking_id'       ,value:order.tracking_id                 }));",
                        "form.append($('<input>',{type:'hidden',name:'terminal_type'     ,value:order.terminal_type               }));",
                        "form.append($('<input>',{type:'hidden',name:'success_url'       ,value:order.success_url                 }));",
                        "form.append($('<input>',{type:'hidden',name:'cancel_url'        ,value:order.cancel_url                  }));",
                        "form.append($('<input>',{type:'hidden',name:'error_url'         ,value:order.error_url                   }));",
                        "form.append($('<input>',{type:'hidden',name:'pagecon_url'       ,value:order.pagecon_url                 }));",
                        "form.append($('<input>',{type:'hidden',name:'free1'             ,value:order.free1                       }));",
                        "form.append($('<input>',{type:'hidden',name:'free2'             ,value:order.free2                       }));",
                        "form.append($('<input>',{type:'hidden',name:'free3'             ,value:order.free3                       }));",
                        "form.append($('<input>',{type:'hidden',name:'free_csv'          ,value:order.free_csv                    }));",
                        "form.append($('<input>',{type:'hidden',name:'request_date'      ,value:order.request_date                }));",
                        "form.append($('<input>',{type:'hidden',name:'limit_second'      ,value:order.limit_second                }));",
                        "form.append($('<input>',{type:'hidden',name:'hashkey'           ,value:order.hashkey                     }));",
                        "form.append($('<input>',{type:'hidden',name:'sps_hashcode'      ,value:order.sps_hashcode                }));",
                        "for (i = 0; i < order.orderDetail.length; i++) {",
                            "form.append($('<input>',{type:'hidden',name:'dtl_rowno'         ,value:order.orderDetail[i].dtl_rowno             }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_item_id'       ,value:order.orderDetail[i].dtl_item_id           }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_item_name'     ,value:order.orderDetail[i].dtl_item_name         }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_item_count'    ,value:order.orderDetail[i].dtl_item_count        }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_tax'           ,value:order.orderDetail[i].dtl_tax               }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_amount'        ,value:order.orderDetail[i].dtl_amount            }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_free1'         ,value:order.orderDetail[i].dtl_free1             }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_free2'         ,value:order.orderDetail[i].dtl_free2             }));",
                            "form.append($('<input>',{type:'hidden',name:'dtl_free3'         ,value:order.orderDetail[i].dtl_free3             }));",
                        "}",
                        "form.submit();",
                    "}",
                    "$(function() {",
                        "f_submit();",
                    "});",
                "</script>",
            });
    }
}