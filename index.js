// Factory functions
// Factory functions builds an object and return it.
// We are adding properties and methods to this object.

function drawRectangle(width, height) {
  const recatangle = {};
  recatangle.width = width;
  recatangle.height = height;
  recatangle.draw = function () {
    // this here refers to the same object.
    console.log("Factory function : Inside draw method: ", this);
    const { width, height } = this;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        process.stdout.write("*");
      }
      process.stdout.write("\n");
    }
  };
  recatangle.rotate = function () {
    let { width, height } = this;
    tempWidth = width;
    this.width = height;
    this.height = tempWidth;
  };
  return recatangle;
}

const rect1 = drawRectangle(6, 8);
rect1.draw();
rect1.rotate();
rect1.draw();
const rect2 = drawRectangle(10, 6);
rect2.draw();

// Drawbacks of factory function
// The methods related to the object is being recreated everytime when object is created using factory function.
// Those methods are unique to the object created.
// Eg: rect 1 and rect 2 has its own unique copy of draw and rotate methods.

// ===================================================================================================
// ===================================================================================================

// Constructor functions.
// Function that help us to create objects.

// new operator.
// Quote start. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// The new operator lets developers create an instance of a user-defined object type
// or of one of the built-in object types that has a constructor function.

// When a function is called with the new keyword, the function will be used as a constructor.
// new will do the following things:
// 1. Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
// 2. Points newInstance's [[Prototype]] to the constructor function's prototype property.
// 3. Executes the constructor function with the given arguments, binding newInstance as the this context
// (i.e. all references to this in the constructor function now refer to newInstance).
// 4. If the constructor function returns a non-primitive, this return value becomes the result of the whole
// new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance
// is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
// Quote end. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// Simply, we did step 1, 2, 4 explicity in factroy functions. Here,it is implicity done when we use new.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Now, We can define methods on consturnctor function's prototype.
// Don't use arrow functions becuase referring to this is different.
Rectangle.prototype.draw = function () {
  // this here refers to the newInstance.
  console.log("Constructor function : Inside draw method: ", this);
  const { width, height } = this;
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

Rectangle.prototype.rotate = function () {
  // this here refers to the newInstance.
  let { width, height } = this;
  tempWidth = width;
  this.width = height;
  this.height = tempWidth;
};

const rect3 = new Rectangle(5, 3);
rect3.draw();

const rect4 = new Rectangle(7, 8);
rect4.draw();

// Methods are not defined in each object, but in shared prototype.
console.log("Factory function : Prototype ", rect3.__proto__);

// ===================================================================================================
// ===================================================================================================

// Classes
// Syntactic sugar for constructor functions
class Rectangle2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.describeMe();
  }

  draw() {
    // this here refers to the newInstance.
    console.log("Class : Inside draw method: ", this);
    const { width, height } = this;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        process.stdout.write("*");
      }
      process.stdout.write("\n");
    }
  }

  rotate() {
    // this here refers to the newInstance.
    let { width, height } = this;
    tempWidth = width;
    this.width = height;
    this.height = tempWidth;
    // Calling function inside the same class.
    // Drawing the recatangle after rotating.
    this.draw();
    this.printDescription();
  }

  describeMe() {
    const { width, height } = this;
    this.description = `I am ${height} units tall and ${width} units fat.`;
  }

  printDescription() {
    console.log(this.description);
  }
}

const rect5 = new Rectangle2(10, 5);
rect5.draw();
rect5.printDescription();
const rect6 = new Rectangle2(7, 8);
rect6.rotate();
