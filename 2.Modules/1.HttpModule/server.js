const http = require("node:http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url, "url");

  if (url === "/") {
    res.end("HOME PAGE");
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
