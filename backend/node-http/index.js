const http = require("http");
const fs = require("fs"); //File system Core Module
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(
    `\x1b[33mRequest to:\x1b[0m ${req.url}\n\x1b[33mBy method:\x1b[0m ${req.method}`
  );

  if (req.method === "GET") {
    let fileURL = "/";
    if (req.url === fileURL) {
      fileURL = "/index.html";
    } else if (req.url === "/about") {
      fileURL = "/about.html";
    } else fileURL = req.url;

    const filePath = path.resolve("./node-http/public" + fileURL);
    const fileExt = path.extname(filePath);
    console.log("Extension file:" + fileExt);

    if (fileExt === ".html") {
      fs.exists(filePath, (e) => {
        if (!e) {
          res.statusCode = 404;
          res.setHeader("Content-type", "text/html");
          res.end(`
          <!DOCTYPE html>
          <html>
            <header>
              <title>Error Page</title>
            </header>
      
            <body>
              <h1>Page not found</h1>
            </body>
          </html>
          `);
          return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      // If the file is different than HTML
      res.statusCode = 404;
      res.setHeader("Content-type", "text/html");
      res.end(`
      <!DOCTYPE html>
      <html>
        <header>
          <title>Error Page</title>
        </header>
  
        <body>
          <h1>Page not found, and it is not an HTML file:${filePath}</h1>
        </body>
      </html>
      `);
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.end(`
      <!DOCTYPE html>
      <html>
        <header>
          <title>Method = Not supported</title>
        </header>
  
        <body>
          <h1>Method not supported</h1>
        </body>
      </html>
      `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});
