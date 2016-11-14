export class IpAddress {
    name: string;
    startIp: string;
    endIp: string;
    private static ipRegex: RegExp = new RegExp("^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$");
    constructor(name: string, startIp: string, endIp: string) {
        this.name = name;
        if (IpAddress.ipRegex.test(startIp) && IpAddress.ipRegex.test(endIp)) {
            this.startIp = startIp;
            this.endIp = endIp;
        } else {
            throw new Error("Start Ip and End Ip should match ip address format.");
        }
    }
    ShowIp() {
        console.log("This ip address name:" + this.name + ", start ip:" + this.startIp + ", end ip:" + this.endIp);
    }
}

class IpOperation {
    ipList: Array<IpAddress> = new Array<IpAddress>();

    add(singleIp: IpAddress) {
        this.ipList.push(singleIp);
    }
}