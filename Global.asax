<%@Application Language='C#' Inherits="System.Web.HttpApplication" %>
<script runat="server">
    void Application_Start(object sender, EventArgs e) {
    }

    void Application_Error(object sender, EventArgs e)
    {
        Exception ex = Server.GetLastError();
        if (ex is HttpUnhandledException)
        {
            ex = ex.InnerException;
        }
    }
</script>
