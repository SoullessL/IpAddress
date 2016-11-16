# IpAddress
Ip Address plugin

##How to use:
###1.Add jquery, bootstrap and requirejs link.
<link rel="stylesheet" href="app.css" type="text/css" />
<link href="Content/bootstrap.css" rel="stylesheet" />
<script src="Scripts/jquery-3.1.1.js"></script>
<script src="Scripts/bootstrap.js"></script>
<script data-main="app" type="text/javascript" src="require.js"></script>

###2.Add an div in the page
        <div id="ips">
</div>

###3.Init ip address.
define(["require", "exports", "./IpAddress"], function (require, exports, IpAddress_1) {
    "use strict";
    let ips = new IpAddress_1.IpOperation($('#ips'));
    ips.drawTable(ips);
});
