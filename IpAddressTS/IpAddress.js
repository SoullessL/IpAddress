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
    }
});
//# sourceMappingURL=IpAddress.js.map