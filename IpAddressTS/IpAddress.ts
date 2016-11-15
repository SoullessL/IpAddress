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

export class IpOperation {
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

    drawTable(): string {
        let tableStr: string = '';
        tableStr += '<table class="table table-bordered"><tr><td>Name</td><td>Start IP</td><td>End IP</td><td></td></tr>';
        for (let i in this.ipList) {
            //let thisIpName = 'thisIpName' + i;
            //let thisStartIp = 'thisStartIp' + i;
            //let thisEndIp = 'thisEndIp' + i;
            tableStr += '<tr>';
            tableStr += '<td>' + this.ipList[i].name + '</td>';
            tableStr += '<td>' + this.ipList[i].startIp + '</td>';
            tableStr += '<td>' + this.ipList[i].endIp + '</td>';
            tableStr += '<td class="col-md-2"><input type="button" class="btn btn-sm btn-primary" value="Save" />&nbsp<input type="button" class="btn btn-sm btn-primary" value="Edit" /></td>';
            tableStr += '</tr>';
        }
        tableStr += '</table>';
        return tableStr;
    }
}