const Cupcake = require('./cupcake');

class Shop {
    constructor (location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation() {
        console.log(`This shop is at ${this.location}`);
    }

    getOwner() {
        console.log(`This shop is owned by: ${this.owner}`);
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop {
    constructor(location, owner, name) {
        super(location, owner);
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakeBatch(count, batter, icing, price) {
        // Make COUNT cupcakes, add them into inventory
        for (let i = 0; i < count; i++) {
            let newCupcake = new Cupcake(icing, batter, price);
            this.inventory.push(newCupcake);
        }
    }

    sellCupCake(){
        // Remove cupcake from inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
}


let myShop = new CupcakeShop('Broad Ripple', 'Bill Murray', 'Inzombia Cupcakes');

myShop.bakeBatch(12, 'Red Velvet', 'Honey Mustard', 4);

myShop.sellCupCake();
myShop.sellCupCake();
myShop.sellCupCake();

console.log(myShop.cash)


/*    idk...
function Fan (diameter, amps) {
    this.diameter = diameter;
    this.amps = amps;
}

let myfan = new Fan(12, 150);

Fan.prototype.turnOn = function () {
    this.isOn = true;
}
*/