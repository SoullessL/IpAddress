/// <reference path="jquery.d.ts" />
import juqery = require('jquery');
import { IpAddress, IpOperation } from "./IpAddress";

let ips: IpOperation = new IpOperation();
ips.add(new IpAddress("test", "1.1.1.1", "1.1.1.1"));
$('#ips').html(ips.drawTable());
