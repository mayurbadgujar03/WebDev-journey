const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}
const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "adrak", price: 25},
]

const cities: readonly string[] = ["Delhi", "Jaipur", "Surat"];

// cities.push("pune")

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]

const locations: readonly [number, number] = [22.9, 34.2]

const chaiItems: [name: string, price: number] = ["mayur", 33]

enum CupSize {
    SMALL, MEDIUM, LARGE
}

const LARGE = CupSize.LARGE
const MEDIUM = CupSize.MEDIUM
const SMALL = CupSize.SMALL

console.log(LARGE);
console.log(MEDIUM);
console.log(SMALL);


enum Status {
    PENDING = 100,
    SERVED, // 101,
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala") //

enum RandomEnum {
    ID = 1, 
    NAME = "chai"
}

const enum Sugars {
    LOW = 1, 
    MEDIUM = 2, 
    HIGH = 3
}

const s = Sugars.HIGH

let t: [string, number] = ["chai", 10]
t.push("extra")