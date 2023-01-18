const rect = require("./rectangle");

function solveRectangle(l, b) {
  console.log(`\x1b[0mSolving for Rectangle with L = ${l} + ${b}`);

  if (l <= 0 || b <= 0) {
    console.log(
      `\x1b[31mRectangles dimensions should be greater than Zero: L = ${l}, B = ${b}`
    );
    return 0;
  }

  console.log(`\x1b[0mThe area of the rectangle is: ${rect.area(l, b)}`);
  console.log(
    `\x1b[0mThe perimeter of the rectangle is: ${rect.perimeter(l, b)}`
  );
}

solveRectangle(4, 6);
solveRectangle(0, 2);
solveRectangle(10, 2);
solveRectangle(-5, 5);
// const rectangle = require("./rectangle");

// const { perimeter, area } = rectangle;

// console.log(perimeter(2, 3));
