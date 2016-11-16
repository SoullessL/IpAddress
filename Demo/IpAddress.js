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
        constructor(htmlEle) {
            this.ipList = new Array();
            this.ipHtml = htmlEle;
        }
        add(singleIp) {
            this.ipList.push(singleIp);
        }
        addAndDraw(singleIp) {
            this.add(singleIp);
            this.drawTable(this);
        }
        remove(index) {
            this.ipList.splice(index, 1);
        }
        removeAndDraw(index) {
            this.remove(index);
            this.drawTable(this);
        }
        edit(index, editIp) {
            if (this.ipList.length < index) {
                throw new Error("Can not find the special ip address.");
            }
            else {
                this.copyIpAddress(editIp, this.ipList[index]);
            }
        }
        editAndDraw(index, editIp) {
            this.edit(index, editIp);
            this.drawTable(this);
        }
        copyIpAddress(orgIp, targetIp) {
            targetIp.name = orgIp.name;
            targetIp.startIp = orgIp.startIp;
            targetIp.endIp = orgIp.endIp;
        }
        drawTable(ips, editIndex = -1) {
            console.log(this.ipList.length);
            let tableStr = '';
            tableStr += '<table class="table table-bordered"><tr><td>Name</td><td>Start IP</td><td>End IP</td><td></td></tr>';
            for (let i in this.ipList) {
                tableStr += '<tr>';
                if (parseInt(i) == editIndex) {
                    tableStr += '<td><input class="form-control" id="ipName' + i + '" value="' + this.ipList[i].name + '" required /></td>';
                    tableStr += '<td><input class="form-control" id="startIp' + i + '" value="' + this.ipList[i].startIp + '" required /></td>';
                    tableStr += '<td><input class="form-control" id="endIp' + i + '" value="' + this.ipList[i].endIp + '" required /></td>';
                    tableStr += '<td class="col-md-2"><input type="button" class="btn btn-sm btn-primary" id="btnSave' + i + '" value="save" />&nbsp';
                    tableStr += '<input type="button" class="btn btn-sm btn-primary" id="btnCancel" value= "cancel" /></td>';
                }
                else {
                    tableStr += '<td>' + this.ipList[i].name + '</td>';
                    tableStr += '<td>' + this.ipList[i].startIp + '</td>';
                    tableStr += '<td>' + this.ipList[i].endIp + '</td>';
                    tableStr += '<td class="col-md-2"><input type="button" class="btn btn-sm btn-primary" id="btnEdit' + i + '" value="Edit" />&nbsp';
                    tableStr += '<input type="button" class="btn btn-sm btn-primary" id="btnDel' + i + '" value= "Delete" /></td>';
                }
                tableStr += '</tr>';
            }
            //Add input box for enter new ip address
            tableStr += '<tr>';
            tableStr += '<td><input class="form-control" id="ipName" name="ipName" required /></td>';
            tableStr += '<td><input class="form-control" id="startIp" name="startIp" required /></td>';
            tableStr += '<td><input class="form-control" id="endIp" name="endIp" required /></td>';
            tableStr += '<td class="col-md-2"><input type="button" class="btn btn-sm btn-primary" value="Save" id="saveIp" name="saveIp" />&nbsp';
            tableStr += '</tr>';
            tableStr += '</table>';
            console.log(tableStr);
            this.ipHtml.html(tableStr);
            //Add click function after render html        
            for (let i in this.ipList) {
                $('#btnDel' + i).on('click', function () {
                    ips.removeAndDraw(parseInt(i));
                });
                $('#btnEdit' + i).on('click', function () {
                    ips.drawTable(ips, parseInt(i));
                });
            }
            //Add save button click function
            $('#saveIp').on('click', function () {
                ips.addAndDraw(new IpAddress($('#ipName').val(), $('#startIp').val(), $('#endIp').val()));
            });
            $('#btnSave' + editIndex).on('click', function () {
                ips.editAndDraw(editIndex, new IpAddress($('#ipName' + editIndex).val(), $('#startIp' + editIndex).val(), $('#endIp' + editIndex).val()));
            });
            $('#btnCancel').on('click', function () {
                ips.drawTable(ips);
            });
            return tableStr;
        }
    }
    exports.IpOperation = IpOperation;
});
//# sourceMappingURL=IpAddress.js.map