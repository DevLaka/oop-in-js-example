// Factory functions
// Factory functions builds an object and return it.
// We are adding properties and methods to this object.
function drawRectangle(width, height) {
  const recatangle = {};
  recatangle.width = width;
  recatangle.height = height;
  recatangle.draw = function () {
    // this here refers to the same object.
    console.log(this);
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

// Drawbacks of factory function
// The methods related to the object is being recreated everytime
// a object is created using factory function.
// Those methods are unique to the object created.
// Eg: rect 1 and rect 2 has its own unique copy of draw and rotate methods.
