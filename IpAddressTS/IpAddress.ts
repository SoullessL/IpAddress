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

    remove(index: number) {
        this.ipList.splice(index, 0);
    }

    edit(index: number, editIp: IpAddress) {
        if (this.ipList.length < index) {
            throw new Error("Can not find the special ip address.");
        }
        else {
            this.copyIpAddress(editIp, this.ipList[index]);
        }
    }

    copyIpAddress(orgIp: IpAddress, targetIp: IpAddress) {
        targetIp.name = orgIp.name;
        targetIp.startIp = orgIp.startIp;
        targetIp.endIp = orgIp.endIp;
    }
}