/*
********
! CLASSES
********
    - Classes can be defined by either expression or declaration
    - Classes are funcitons
    - Classes act as a bluepint for creating objects.
        ex: model could be a property of a class of Automobile. Each new automobile we create that's a copy of our original class and could have a different value for the property model.
    - Body of a class is between {}
    - Constructor method is a special method for creating and initializing an object that was created with a class.
        - There can only be ONE constructor method
        - Can use the keyword "super"
        - The super keyword is used to access and call functions on an object parent
        - Introduced in ES6
        - New way to write previous exisitng prototype-bases inheritence.
        - Closest thing in vanilla JS to OOP.
*/

/*
*********
! CLASS DECLARATION
*********

*/
    
class Automobile {
    constructor(make, model) {
        // instanced properties must be defined inside of class methods, like the constructor method.
        this.make = make;
        this.model = model;
    }
}

// Hoisting: Unlike function declaration, class declarations are not hoisted. A class declaration needs to be declared before accessing it.

/*
*********
! CLASS EXPRESSION  
*********
    - can be names or not names
    - the name given to an unnamed class expression is local to the class's body.
        -the name of a named class can be retrieved through the class's name property
*/

//* unnamed:
let Vehicle = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name);   // Returns Vehicle

//* names:
let Auto = class Mobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
console.log(Auto.name);     // Returns Mobile     * name of the class

/*
*********
! CLASS METHODS
*********
    - Introduced in ES5
        - prototype methods are shorter for method definitions.
        - a method is a function that belongs to a class
*/

// Method Definition: OLD SYNTAX
const automobile = {
    start: function() {
        //
    },
    stop: function() {
        //
    }
};

// Prototype Method: NEW SYNTAX
const autoMobile = {
    start() {
        //
    },
    stop() {
        //
    }
};

class AutoMobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Method 1:
    start() {
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }

    // Method 2:
    stop() {
        console.log(`This ${this.make} ${this.model}'s engine stopped.`)
    }
};

/*
*********
! NEW INSTANCE
*********
    - using the keyword 'new' we can create a new object/instance of the AutoMobile class.
*/
// new object/instance of the class

let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();


/*
*********
! CONSTRUCTOR METHOD
*********
    - Helps create and initializes an object created form a class
    - works along with the 'new' keyword.
    - Needs to be included to create new objects and instances of our class.
        - set properties
        - passes values for properties
*/

class Cookie {
    constructor(type, icing, shape) {
        // The parameters we note will be the values we want passed and stored in the object
        this.t = type;
        this.i = icing;
        this.s = shape;
    // LEFT SIDE: assigning keys for the values we pass in.
            // RIGHT SIDE: the accepted values from our parameters.
    }
}

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
// console.log(chocolateChip.type);
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);

/*
*********
! EXTENDS
*********

    - keyword used in class declarations/expression to create a new class
    - each new class created inhets the properties and methods from the parent class
    - can have it's own properties and methods.
        - also known as a subclass

*/

//* PARENT
class Animal {
    constructor(name) { 
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats their food.`);
    }
}

//* SUBCLASS
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //'super' prior to 'this' keyword - will cause error
        this.type = breed;
    }                           // Subclasses essentially create local variables/methods and a new scope

    play() {
        console.log(`The ${this.type} named ${this.name} fetches the ball!`);
    }
}

let Fido = new Dog('Fido', 'mutt');
Fido.eat();
Fido.play();
// Animal.play();       //breaks - can't access method within Dog