"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = "Hello Wolrd";
var i = -39;
var num = 1.1132132123;
var b = true;
var a = [1, 2];
var n = undefined;
var list = [1, "Lauro"];
console.log(list);
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
var color = Color.Blue;
console.log(color);
var name = "Lauro Santana";
console.log(name.toLowerCase());
var f = function (t) { return t.name; };
var o = {
    name: "Lauro"
};
console.log(f(o));
var p = {
    id: 1,
    name: "LauroOOUO",
    lastName: "Santana"
};
console.log(f(p));
