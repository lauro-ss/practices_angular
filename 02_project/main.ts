export {}

interface Animal {
    name: string;
}

class Rato {
    private name: string;
    private id: number;

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

    console.log(rato, isInt(rato.getId()));

    const list = [1,2,3,4,5];

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