const express = require("express");
const app = express();

let visitCount = 0;

/* Custom Logger Middleware */
const logger = (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  next();
};

/* Visit Counter Middleware */
const counter = (req, res, next) => {
  visitCount++;
  next();
};

/* Use middlewares */
app.use(logger);
app.use(counter);

/* Route */
app.get("/", (req, res) => {
  res.send(`Website visited ${visitCount} times`);
});

/* Start server */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
