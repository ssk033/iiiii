const express = require("express");
const app = express();

/* CSE Branch */
app.get("/cse", (req, res) => {
  res.send(`
    <body style="background-color: lightblue; font-family: Arial;">
      <h1>CSE Branch</h1>
      <p>Computer Science and Engineering</p>
    </body>
  `);
});

/* ECE Branch */
app.get("/ece", (req, res) => {
  res.send(`
    <body style="background-color: lightgreen; font-family: Verdana;">
      <h1>ECE Branch</h1>
      <p>Electronics and Communication Engineering</p>
    </body>
  `);
});

/* ME Branch */
app.get("/me", (req, res) => {
  res.send(`
    <body style="background-color: lightyellow; font-family: Georgia;">
      <h1>ME Branch</h1>
      <p>Mechanical Engineering</p>
    </body>
  `);
});

/* Start Server */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
