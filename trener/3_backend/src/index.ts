import express from "express";

// console.log(process.argv);
// window.document.body.append('test')

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello / NodeJS Express</h1>");
});
import fs from "fs";
import type { User } from "./users";

app.get("/users", (req, res) => {
  const usersData = fs.readFileSync("./data/users.json", { encoding: "utf8" });
  const users: User[] = JSON.parse(usersData);

  // localhost?name=   name.includes(...)
  const nameParam = req.query["name"];

  //   const name = nameParam as string;
  //   const name = String(nameParam);

  if (typeof nameParam === "string") {
    // nameParam // string
    res.json(users.filter((u) => u.name.includes(nameParam)));
  } else {
    nameParam; //  QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined
    res.json(users);
  }
  
  res.json({ message: "Bad param" });

  //   if (typeof nameParam !== "object") {
  //     nameParam ?? "";
  //     if (nameParam !== undefined) {
  //       nameParam;
  //     }
  //   }
});

const HOST = process.env["HOST"] || "localhost";
const PORT = Number(process.env["PORT"]) || 8080;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
