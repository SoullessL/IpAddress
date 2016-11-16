/// <reference path="jquery.d.ts" />
import juqery = require('jquery');
import { IpAddress, IpOperation } from "./IpAddress";

let ips: IpOperation = new IpOperation($('#ips'));
ips.drawTable(ips);
