﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class credit_ResCgi : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.TrySkipIisCustomErrors = true;
        Response.StatusCode = 200;
    }
}