import express from "express";
import fs from "fs";
import type { User } from "./users";

const app = express();

app.use((req, res, next) => {
  // TODO: Authorize
  req.user = { name: "Admin" };
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello ${req.user.name} | Guest!</h1>`);
});

declare global {
    namespace Express {
        // These open interfaces may be extended in an application-specific manner via declaration merging.
        // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
        interface Request {
            
        }
    }
}

// app.get("", (req, res) => {});

app.get("/users", (req, res) => {
  const usersData = fs.readFileSync("./data/users.json", { encoding: "utf8" });
  const users: User[] = JSON.parse(usersData);

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


