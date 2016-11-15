/// <reference path="jquery.d.ts" />
import juqery = require('jquery');
import { IpAddress, IpOperation, deleteIp } from "./IpAddress";

let ips: IpOperation = new IpOperation($('#ips'));
ips.add(new IpAddress("test", "1.1.1.1", "1.1.1.1"));
ips.add(new IpAddress("test", "2.1.1.1", "2.1.1.1"));
ips.drawTable(ips);
//$('#btnDel').on('click', function () {
//    deleteIp(ips,0);
//});
//$('#ips').html(ips.drawTable());
