const express = require("express");
const app = express();

const port = 3600;

const real = require("./routes/real");
const ideal = require("./routes/ideal");

function corsOptions(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  next();
}

app.use("*", (req, res, next) => corsOptions(req, res, next));

app.get("/real", (req, res) => real(req, res));
app.get("/ideal", (req, res) => ideal(req, res));

app.all("*", (req, res) => {
  return res
    .status(400)
    .json({ error: { message: "No valid endpoint matched." } });
});

app.listen(port, () => {
  console.log(`Listening for requests on port ${port} ...`);
});
