class Chai {
    flavour: string
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("GInger", 20);
masalaChai.flavour = "masala"

console.log(masalaChai);



class Chais {
    public flavor: string = "Masala"

    private secretIngredients = "Cardamon"

    reveal() {
        return this.secretIngredients
    }

    
}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName 
    }
}

// new Branch().getName()

const c = new Chais()
c.reveal()  


class Walet {
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const w = new Walet()
w.getBalance()

class Cup {
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const cs = new ModernChai()
cs.sugar = 3

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);
