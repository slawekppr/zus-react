import express from "express";

// console.log(process.argv);
// window.document.body.append('test')

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello / NodeJS Express</h1>");
});
import fs from "fs";

app.get("/users", (req, res) => {
  const usersData = fs.readFileSync("../data/users.json", { encoding: "utf8" });
  const users = JSON.parse(usersData)

  res.json(users);
});

const HOST = process.env["HOST"] || "localhost";
const PORT = Number(process.env["PORT"]) || 8080;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
