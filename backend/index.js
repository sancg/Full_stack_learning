const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");
  res.end(
    `<html>
      <header>
      </header>

      <body>
        <h1>Hello my gorgeous friend~</h1>
      </body>
    </html>`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});

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

solveRectangle(4, 6);
solveRectangle(0, 2);
solveRectangle(10, 2);
solveRectangle(-5, 5);*/
// const rectangle = require("./rectangle");

// const { perimeter, area } = rectangle;

// console.log(perimeter(2, 3));
