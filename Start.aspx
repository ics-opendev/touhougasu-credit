<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Start.aspx.cs" Inherits="Start" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <script src="/js2/sp/jquery-3.3.1.min.js"></script>
    <script src="/js2/base64.js"></script>
    <script src="/js2/sha1.js"></script>
    <script src="/js2/utf8.js"></script>
    <script src="/js2/utils.js"></script>
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
           キー： <asp:TextBox ID="CustIdText" runat="server"></asp:TextBox>
            <asp:Label ID="ErrorLabel" runat="server" Visible="false" ForeColor="Red">キーを入力してください。</asp:Label>
        </div>
        <div>
            <asp:Button ID="RegistButton" runat="server"  Text="登録" OnClick="RegistButton_Click"/>
        </div>
    </form>
</body>
</html>
