const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const celebRouter = require("./celebRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", celebRouter);

server.get("/", (req, res) => {
  res.send("Alamut Functional.");
});

module.exports = server;