"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./src/animal");
class Rato {
    constructor(name, id) {
        this.toString = () => { return this.name; };
        this.name = name;
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
function main() {
    let rato = new Rato("Rato", 25);
    let a = rato;
    console.log(a);
    const list = [1, 2];
    console.log((0, animal_1.Sum)(...list));
    console.log((0, animal_1.Odds)(...list));
    console.log((0, animal_1.Evens)(...list));
    console.log(rato.toString());
    console.log(list.map((e) => { return e == 1 ? "sim" : "não"; }));
}
function isInt(i) {
    let a = [1, 0, -1];
    const r = i % 2;
    console.log(a.map((e) => { return e == r; }));
    // return a.map((e, r = i % 2) => { return e == r })
    return true;
}
main();
