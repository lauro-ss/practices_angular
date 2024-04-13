export {}

let m: string = "Hello Wolrd";

let i: number = -39;
let num: number = 1.1132132123;

let b: boolean = true;

const a = [1,2];

let n:any = undefined;

var list: [number, string] = [1, "Lauro"];

console.log(list)

enum Color{Blue, Red, Orange}

let color = Color.Blue;

console.log(color)

let name: unknown = "Lauro Santana";

console.log((name as string).toLowerCase())

interface tag {
    name: string
}

const f = function(t: tag): string { return t.name }
const o = {
    name: "Lauro"
}

console.log(f(o))

type Person = {
    id: number;
    name: string;
    lastName: string
}


let p: Person = {
    id: 1,
    name: "LauroOOUO",
    lastName: "Santana"
}

console.log(f(p))
