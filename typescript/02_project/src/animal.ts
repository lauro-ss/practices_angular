export interface Animal {
    id: number
    name: string
    toString: () => string
}

export function Sum(...numbers: number[]) {
    return numbers.reduce((count, n) => count += n)
}

export function Odds(...numbers: number[]) {
    return numbers.filter(n => n % 2 != 0)
}

export function Evens(...numbers: number[]) {
    return numbers.filter(n => !Odds(...numbers).includes(n))
}

