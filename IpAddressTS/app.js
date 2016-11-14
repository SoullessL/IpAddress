define(["require", "exports", "./IpAddress"], function (require, exports, IpAddress_1) {
    "use strict";
    class Greeter {
        constructor(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        start() {
            this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        }
        stop() {
            clearTimeout(this.timerToken);
        }
    }
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    let testip = new IpAddress_1.IpAddress("test", "1.1.1.1", "1.1.1.1");
    testip.ShowIp();
});
//# sourceMappingURL=app.js.map