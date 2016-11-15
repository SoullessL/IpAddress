define(["require", "exports", "./IpAddress"], function (require, exports, IpAddress_1) {
    "use strict";
    let ips = new IpAddress_1.IpOperation($('#ips'));
    ips.add(new IpAddress_1.IpAddress("test", "1.1.1.1", "1.1.1.1"));
    ips.add(new IpAddress_1.IpAddress("test", "2.1.1.1", "2.1.1.1"));
    ips.drawTable(ips);
});
//$('#btnDel').on('click', function () {
//    deleteIp(ips,0);
//});
//$('#ips').html(ips.drawTable());
//# sourceMappingURL=app.js.map