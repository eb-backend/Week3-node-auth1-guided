const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session")
const KnexSessionStore=require("connect-session-knex")(session)
const usersRouter = require("../users/users-router.js");
const db= require("../database/db-config")
const server = express();

server.use(helmet());
server.use(express.json());
server.use(session({
  resave: false, //avoid recreating sessions that have not changed
  saveUninitialized: false, //to comply with GDPR laws
  secret: "keep it secret, keep it safe",
  store: new KnexSessionStore({
    knex: db,
    createtable: true //if the session table doesnt exist, create it automatically
  })
}))
server.use(cors());

server.use("/", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
