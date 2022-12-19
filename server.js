const { createServer } = require("http");
const fs = require("fs");
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", (err, file) => {
    if (err) {
      res.writeHead(404);
      console.log("File not found");
    } else {
      res.write(file);
    }
    res.end();
  });
});

server.listen(3000);
