"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rato = /** @class */ (function () {
    function Rato(name, id) {
        var _this = this;
        this.toString = function () { return _this.name; };
        this.name = name;
        this.id = id;
    }
    Rato.prototype.getId = function () {
        return this.id;
    };
    return Rato;
}());
function main() {
    var rato = new Rato("Rato", 25);
    console.log(rato, isInt(rato.getId()));
    var list = [1, 2, 3, 4, 5];
    console.log(list.map(function (e) { return e == 1 ? "sim" : "não"; }));
}
function isInt(i) {
    var a = [1, 0, -1];
    var r = i % 2;
    console.log(a.map(function (e) { return e == r; }));
    // return a.map((e, r = i % 2) => { return e == r })
    return true;
}
main();
