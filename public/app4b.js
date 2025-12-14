const e = require("express");
const { MongoClient } = require("mongodb");
const p = require("path");

const app = e();
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

let col;
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("hospitalDB").collection("hospitals");
    console.log("MongoDB connected");
  });

app.get("/", (_, r) =>
  r.sendFile(p.join(__dirname, "index.html"))
);

app.post("/hospitals", async (req, r) => {
  const { hid, name, location, total, occupied } = req.body;
  await col.insertOne({
    Hospital_ID: hid,
    Name: name,
    Location: location,
    Total_Beds: +total,
    Occupied_Beds: +occupied
  });
  r.redirect("/");
});

app.post("/hospitals/admit", async (req, r) => {
  const u = await col.updateOne(
    { Hospital_ID: req.body.hid },
    { $inc: { Occupied_Beds: 1 } }
  );
  r.send(u.matchedCount
    ? "Patient admitted <br><a href='/'>Back</a>"
    : "Hospital not found <br><a href='/'>Back</a>");
});

app.get("/hospitals/lowbeds", async (_, r) =>
  r.json(await col.find({
    $expr: { $lt: [{ $subtract: ["$Total_Beds","$Occupied_Beds"] }, 10] }
  }).toArray())
);

app.listen(3000, () => console.log("Server running"));