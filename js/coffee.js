const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
  // properties
  size;
  isDecaf;
  // constructor
  constructor(size, isDecaf) {
    this.size = size;
    this.isDecaf = isDecaf;
  }
  // methods
  serveIt() {
    //Generate IMG of the coffee ordered <img src ="" alt= "" height= "" title =""/>

    const cup = document.createElement("img");
    let cupImage = "images/coffee-cup.svg";

    //If the coffee is decaf, we need a green cup
    let decaf;
    if (this.isDecaf === true) {
      cupImage = "images/coffee-cup-green.svg";
      decaf = "decaffeinated";
    } else {
      decaf = "caffeinated";
    }
    // set appropriate size for cup
    let cupSize;
    switch (this.size) {
      case "small":
        cupSize = "100";
        break;
      case "medium":
        cupSize = "150";
        break;
      case "large":
        cupSize = "200";
        break;
      default:
        cupSize = "100";
    }
    // set the height of the image
    cup.setAttribute("height", cupSize);
    //set src to the path of the coffee
    cup.setAttribute("src", cupImage);
    //set alt for the IMG
    cup.setAttribute("alt", "Image of a coffee cup");
    console.log(cup);
    //description of the coffee
    let description = `A ${this.size} ${decaf} coffee.`;
    cup.setAttribute("title", description);
    //append IMG element to the document
    output.appendChild(cup);
  }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let aryansCoffee = new Coffee("small", false);
let alishCoffee = new Coffee("medium", true);
let ronitCoffee = new Coffee("large", true);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
  milkType;
  constructor(size, isDecaf, milkType) {
    super(size, isDecaf);
    this.milkType = milkType;
  }
  latteDesc() {
    output.textContent = `A ${this.size} Latte with ${this.milkType} milk.`;
  }
  serveIt() {
    //Generate IMG of the coffee ordered <img src ="" alt= "" height= "" title =""/>

    const cup = document.createElement("img");
    let cupImage = "images/coffee-cup.svg";

    //If the coffee is decaf, we need a green cup
    let decaf;
    if (this.isDecaf === true) {
      cupImage = "images/coffee-cup-green.svg";
      decaf = "decaffeinated";
    } else {
      decaf = "caffeinated";
    }
    // set appropriate size for cup
    let cupSize;
    switch (this.size) {
      case "small":
        cupSize = "100";
        break;
      case "medium":
        cupSize = "150";
        break;
      case "large":
        cupSize = "200";
        break;
      default:
        cupSize = "100";
    }
    // set the height of the image
    cup.setAttribute("height", cupSize);
    //set src to the path of the coffee
    cup.setAttribute("src", cupImage);
    //set alt for the IMG
    cup.setAttribute("alt", "Image of a coffee cup");
    console.log(cup);
    //description of the coffee
    let description = `A ${this.size} ${decaf} Latte with ${this.milkType} milk.`;
    cup.setAttribute("title", description);
    //append IMG element to the document
    output.appendChild(cup);
  }
}

// creating a sub class for cappuccino and added double or single espresso shot for cappuccino,
class Cappuccino extends Coffee {
    milkType;
    espressoShot;
    constructor(size, isDecaf, milkType, espressoShot) {
      super(size, isDecaf);
      this.milkType = milkType;
      this.espressoShot = espressoShot;
    }
    cappuccinoDesc() {
      output.textContent = `A ${this.size} Cappuccino with ${this.milkType} milk and ${this.espressoShot} shot espresso.`;
    }
}; 
/* STEP 6: Create a new instance of the Latte object */
aryansLatte = new Latte("large", true, "almond");

//created new instance for cappuccino
aryansCappuccion = new Cappuccino("small", true, "steamed", "double");

// calling cappuccionDesc
aryansCappuccion.cappuccionDesc();



/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
