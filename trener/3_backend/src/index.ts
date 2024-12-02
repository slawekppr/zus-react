import express from "express";

// console.log(process.argv);
// window.document.body.append('test')

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello / NodeJS Express</h1>");
});

// const HOST = process.env["HOST"] ? process.env["HOST"] : "localhost";
// const HOST = process.env["HOST"] || "localhost";

// const PORT = process.env["PORT"] as unknown as number ?? 8080;

const HOST = process.env["HOST"] ?? "localhost";
const PORT = Number(process.env["PORT"]) ?? 8080;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});


// type A = {name:string}
// type A = {name2:string}

interface A{name:string} // Lib.ts
interface A{surname:string} // App.ts

const person:A = {name:'',surname:''}