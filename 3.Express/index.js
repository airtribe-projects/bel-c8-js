const express = require("express");
const PORT = 8080;

const server = express();

// MIDDLEWARE

server.use(express.json());

// (req, res) => {} its a REQ handler/MIDDLEWARE

/*
server.get("/", (req, res) => {
  res.write("WELCOME to EXPRESS ");
  res.write("\n 8383838484585");
  res.write("\n thakr@gmail.com");
  res.end("HOME PAGE");
});


server.get("/fitness", (req, res) => {
  res.json({
    name: "utkarsh",
    age: 90,
  });
});
*/

// -------------------------- REST API  -----------------------

// EXAMPLE OF QUERY PARAMS

server.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams, "queryParams");

  const { type = "" } = queryParams;

  if (type === "gym") {
    res.status(200).json({
      name: "gym",
      hours: 15,
    });
  } else if (type === "mind") {
    res.status(200).json({
      name: "mind",
      hours: 2,
    });
  } else {
    res.status(200).json({
      name: "noting",
      hours: 0,
    });
  }
});

// EXAMPLE OF BODY

server.post("/register/users", (req, res) => {
  const body = req.body;
  console.log(body, "req body");
  res.json({
    message: "thanks for registration " + body,
  });
});

server.listen(PORT, () => {
  console.log("express server is listning on port ", PORT);
});
