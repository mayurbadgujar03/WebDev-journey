function getChai(kind: string | number) {
    if(typeof kind === 'string') {
        return 'Making ${kind} chai...'
    }
    return 'Chai order: ${kind}';
}

function serveChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

//exhuastive checks

function orderChai(size: "small" | "medium" | "large") {
    if(size === "small") {
        return `small cutting chai...`
    }
    if(size === "medium" || size === "large") {
        return `make extra chai`
    }

    return `chai order ${size}`
}

class kulhadChai{
    serve() {
        return `Serving kulhad chai`
    }
}
class cutting{
    serve() {
        return `Serving cutting chai`
    }
}
function serve(chai: kulhadChai | cutting) {
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}


type ChaiOrder = {
    type: string
    sugar: number
}
function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number"
    )
}
function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }

    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number}
type GingerChai = {type: "ginger"; amount: number}
type ElaichiChai = {type: "elaichi"; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
    }
}

function brew (order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    //
}