define(["require", "exports"], function (require, exports) {
    "use strict";
    class IpAddress {
        constructor(name, startIp, endIp) {
            this.name = name;
            if (IpAddress.ipRegex.test(startIp) && IpAddress.ipRegex.test(endIp)) {
                this.startIp = startIp;
                this.endIp = endIp;
            }
            else {
                throw new Error("Start Ip and End Ip should match ip address format.");
            }
        }
        ShowIp() {
            console.log("This ip address name:" + this.name + ", start ip:" + this.startIp + ", end ip:" + this.endIp);
        }
    }
    IpAddress.ipRegex = new RegExp("^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$");
    exports.IpAddress = IpAddress;
    class IpOperation {
        constructor() {
            this.ipList = new Array();
        }
        add(singleIp) {
            this.ipList.push(singleIp);
        }
        remove(index) {
            this.ipList.splice(index, 0);
        }
        edit(index, editIp) {
            if (this.ipList.length < index) {
                throw new Error("Can not find the special ip address.");
            }
            else {
                this.copyIpAddress(editIp, this.ipList[index]);
            }
        }
        copyIpAddress(orgIp, targetIp) {
            targetIp.name = orgIp.name;
            targetIp.startIp = orgIp.startIp;
            targetIp.endIp = orgIp.endIp;
        }
    }
});
//# sourceMappingURL=IpAddress.js.map