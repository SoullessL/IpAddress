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
    ipHtml: JQuery;

    constructor(htmlEle: JQuery) {
        this.ipHtml = htmlEle;
    }

    add(singleIp: IpAddress) {
        this.ipList.push(singleIp);
    }

    addAndDraw(singleIp: IpAddress) {
        console.log("This is addAndDraw.");
        this.add(singleIp);
        this.drawTable(this);
    }

    remove(index: number) {
        this.ipList.splice(index, 1);
    }

    removeAndDraw(index: number) {
        console.log("This is removeAndDraw.");
        this.remove(index);
        this.drawTable(this);
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

    drawTable(ips: IpOperation): string {
        console.log(this.ipList.length);
        let tableStr: string = '';
        tableStr += '<table class="table table-bordered"><tr><td>Name</td><td>Start IP</td><td>End IP</td><td></td></tr>';
        for (let i in this.ipList) {
            //let thisIpName = 'thisIpName' + i;
            //let thisStartIp = 'thisStartIp' + i;
            //let thisEndIp = 'thisEndIp' + i;
            console.log("This is ip list" + i);
            tableStr += '<tr>';
            tableStr += '<td>' + this.ipList[i].name + '</td>';
            tableStr += '<td>' + this.ipList[i].startIp + '</td>';
            tableStr += '<td>' + this.ipList[i].endIp + '</td>';
            tableStr += '<td class="col-md-2"><input type="button" class="btn btn-sm btn-primary" value="Edit" />&nbsp';
            tableStr += '<input type="button" class="btn btn-sm btn-primary" id="btnDel' + i + '" value= "Delete" /></td>';
            tableStr += '</tr>';
        }
        tableStr += '</table>';
        console.log(tableStr);
        this.ipHtml.html(tableStr);

        //Add click function after render html        
        for (let i in this.ipList) {
            $('#btnDel' + i).on('click', function () {
                ips.removeAndDraw(parseInt(i));
            });
        }
        return tableStr;
    }
}

export function deleteIp(ipo: IpOperation, deleteIndex: number) {
    ipo.removeAndDraw(deleteIndex);
}