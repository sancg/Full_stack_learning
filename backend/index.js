/*
Previous class where I learned ErrorFirstHandler Callbacks
And the module import / export methods

const rect = require("./rectangle");

function solveRectangle(l, b) {
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(err.message);
    }

    if (rectangle) {
      const { perimeter, area } = rectangle;
      console.log(`\x1b[32mSolving for Rectangle with L = ${l} and ${b}`);
      console.log(`\x1b[0mThe area of the rectangle is: ${area(l, b)}`);
      console.log(
        `\x1b[0mThe perimeter of the rectangle is: ${perimeter(l, b)}`
      );
    }
  });
}

// Testing area
solveRectangle(4, 6);
solveRectangle(0, 2);
solveRectangle(10, 2);
solveRectangle(-5, 5);
*/
// const rectangle = require("./rectangle");

// const { perimeter, area } = rectangle;

// console.log(perimeter(2, 3));
