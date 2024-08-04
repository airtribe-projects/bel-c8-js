// TODO: article tcp linux improvement.

const http = require("node:http");
const WebSocket = require("websocket").server;
const PORT = 8089;

const httpServer = http.createServer();

const webSocketServer = new WebSocket({
  httpServer: httpServer,
});

httpServer.listen(PORT, () => {
  console.log("listning on port " + PORT);
});

let connections = [];

webSocketServer.on("request", (request) => {
  console.log("connection is here ....  1");
  const connection = request.accept(null, request.origin); // animesh

  //   MESSAGE HANDLING BY ANY USER
  connection.on("message", (message) => {
    connections.forEach((connec) => {
      if (connec.connected) {
        connec.send(
          `User ` +
            connection.socket.remotePort +
            " wants to say " +
            message.utf8Data
        );
      }
    });
  });

  //   CLOSING THE CONNECTION

  connection.on("close", () => {
    connections.forEach((connec) => {
      connec.send(`User  + ${connection.socket.remotePort} +  has EXITED !!!`);
    });
  });

  console.log("connection is here .... ");

  //  ADDING NEW USER TO THE POOL/GROUp

  connections.forEach((connec) => {
    connec.send(`User  + ${connection.socket.remotePort} +  has joined`);
  });

  connections.push(connection);
});

/*
 const ws = new WebSocket("ws://localhost:8080")
 ws.onmessage = function(message) {
    console.log(`Recieveed MESSAGE: ` + message);
}

ws.send("hello I am utkarsh");


const socket = new WebSocket("ws://localhost:8080")
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

*/
