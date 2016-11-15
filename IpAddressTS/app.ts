/// <reference path="jquery.d.ts" />
import juqery = require('jquery');
import { IpAddress, IpOperation } from "./IpAddress";

let ips: IpOperation = new IpOperation($('#ips'));
ips.add(new IpAddress("test", "1.1.1.1", "1.1.1.1"));
ips.drawTable();
//$('#ips').html(ips.drawTable());
