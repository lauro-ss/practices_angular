export {}
import { Animal, Sum, Odds, Evens } from "./src/animal"

class Rato {
    public name: string;
    public id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    public toString = () => {return this.name;}
    public getId(): number {
        return this.id;
    }
}


function main() {
    let rato = new Rato("Rato", 25);
    let a:Animal = rato
    
    console.log(a)
    const list = [1,2];

    console.log(Sum(...list))
    console.log(Odds(...list))
    console.log(Evens(...list))

    console.log(rato.toString())

    console.log(list.map((e) => { return e == 1 ? "sim" : "não" }))
}

function isInt(i: number): boolean {
    let a = [1,0,-1];
    const r = i % 2;
    console.log(a.map((e) => { return e == r }))
    // return a.map((e, r = i % 2) => { return e == r })
    return true;
}

main();