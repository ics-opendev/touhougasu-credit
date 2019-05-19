using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class credit_Failed : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            List<string> list = new List<string>();
            foreach (var key in Request.Form.Keys)
            {
                list.Add(key.ToString() + ":" + Request.Form[key.ToString()]);
            }

            this.ResLabel.Text = string.Join(", ", list);
        }
    }
}