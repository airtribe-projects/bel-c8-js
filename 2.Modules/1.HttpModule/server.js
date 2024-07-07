const http = require("node:http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(method, "method");
  console.log(url, "url");

  // Intension : you are exposing the endpoint and the method (BOTH ARE VERY IMPORTANT)...

  if (url === "/") {
    if (method === "GET") {
      res.write("WELCOME");
      res.write("\n 8383838484585");
      res.write("\n thakr@gmail.com");
      res.end("HOME PAGE");
    } else {
      res.end("cannot " + method);
    }
  } else if (url === "/fitness") {
    res.end("Nice you are Crazy about fitness");
  } else if (url === "/play") {
    res.end("Badmintion and tennis play");
  } else {
    res.end("Random page");
  }
});

server.listen(PORT, () => {
  console.log("listing to the port ||| ", PORT);
});
