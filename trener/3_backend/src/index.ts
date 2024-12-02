import express from "express";

// console.log(process.argv);
// window.document.body.append('test')

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello / NodeJS Express</h1>");
});

app.get("/users", (req, res) => {
  res.json([
    {
      name: "Alice",
    },
  ]);
});

const HOST = process.env["HOST"] || "localhost";
const PORT = Number(process.env["PORT"]) || 8080;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
