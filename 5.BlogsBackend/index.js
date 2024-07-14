const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = 8086;

// Register Middlewares
server.use(express.json()); // Pareses incoming req body
server.use(cors()); // CORS Error resolution.
dotenv.config();

// IMPOET OF ROUTES
const fitnessRoute = require("./routes/fitness.routes");
const fitnessRouteV2 = require("./routes/fitness.routesV2");
const userRoute = require("./routes/users.routes");

// Register ROUtes

server.use("/api/v1/fitness", fitnessRoute);
server.use("/api/v2/fitness", fitnessRouteV2);
server.use("/api/v1/users", userRoute);

// Attach database
const connectionString = process.env.MONGO_CONNECTION;
// const connectionString = "mongodb://localhost:27017";
// this is bad -> I am exposing the credentials where is my data stored.
const database = "/AT-Blogs";

mongoose
  .connect(connectionString + database)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    // Send Datadog -> Centralized logs
    console.log("DB is failed ot connect!!!");
  });

server.listen(PORT, () => {
  console.log("server working in PORT || ", PORT);
});
