const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("complaintDB").collection("complaints");
    console.log("MongoDB connected");
  });

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.post("/complaints", async (req, res) => {
  await col.insertOne({ ...req.body, status: "Pending" });
  res.redirect("/");
});

app.put("/complaints/:id", async (req, res) => {
  await col.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { status: req.body.status } }
  );
  res.json({ message: "Status Updated" });
});

app.get("/complaints", async (_, res) =>
  res.json(await col.find().toArray())
);

app.listen(3000, () => console.log("Server running"));