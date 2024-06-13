"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evens = exports.Odds = exports.Sum = void 0;
function Sum(...numbers) {
    return numbers.reduce((count, n) => count += n);
}
exports.Sum = Sum;
function Odds(...numbers) {
    return numbers.filter(n => n % 2 != 0);
}
exports.Odds = Odds;
function Evens(...numbers) {
    return numbers.filter(n => !Odds(...numbers).includes(n));
}
exports.Evens = Evens;
