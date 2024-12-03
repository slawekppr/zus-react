import express from "express";
import fs from "fs";

import type { User } from "./users";

const app = express();

app.use((req, res, next) => {
  // if( Authorized.. )
  req.user = { name: "Admin" };
  //   req.user = undefined;
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello ${req.user?.name || "Guest"} </h1>`);
});

// app.get("", (req, res) => {});

import users from "../data/users.json"; // --resolveJsonModule

app.get("/users", (req, res) => {
  //   const usersData = fs.readFileSync("./data/users.json", { encoding: "utf8" });
  //   const users: User[] = JSON.parse(usersData);

  const nameParam = req.query["name"];

  if (typeof nameParam === "string") {
    res.json(users.filter((u) => u.name.includes(nameParam)));
  } else if (typeof nameParam === "undefined") {
    res.json(users);
  } else {
    res.json({ message: "Bad param" });
  }
});

const HOST = process.env["HOST"] || "localhost";
const PORT = Number(process.env["PORT"]) || 8080;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
