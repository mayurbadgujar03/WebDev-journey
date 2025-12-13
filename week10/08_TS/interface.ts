type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

// type TeaRecipe = {
//     water: number;
//     milk: number;
// }
interface TeaRecipe {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "large"

interface CupSize {
    size: "small" | "large"  
} 

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType) {
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChais = BaseChai & Extra

const cup: MasalaChais = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {
    username: "Mayur"
}
const u2: User = {
    username: "Mayur", bio: "mayur.ai"
}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName : "Masterji",
    version: 1
}

// cfg.appName = "ChaiCode"