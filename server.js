const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const auth = require('./api/auth/auth')

const appRouter = require("./api/appRouter.js");
const celebRouter = require("./api/celebRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", appRouter);
server.use("/api/auth", auth, celebRouter)

server.get("/", (req, res) => {
  res.send("Alamut Functional.");
});

module.exports = server;