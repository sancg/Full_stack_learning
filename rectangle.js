// Creating support for callbacks
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    // Simulating workload with SetTimeOut
    setTimeout(() => {
      callback(
        new Error(
          `\x1b[31mRectangle dimensions should be greater than Zero: L = ${x}, B = ${y}`
        ),
        null
      );
    }, 2000);
    return 0;
  }
  setTimeout(() => {
    callback(null, {
      perimeter: (x, y) => {
        return 2 * (x + y);
      },
      area: (x, y) => {
        return x * y;
      },
    });
  }, 2000);
};

// exports.perimeter =

// exports.area = (x, y) => {
//   return x * y;
// };
