const e = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const p = require("path");

const app = e();
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

let col;
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("internshipDB").collection("internships");
    console.log("MongoDB connected");
  });

app.get("/", (_, r) =>
  r.sendFile(p.join(__dirname, "index.html"))
);

app.post("/internships", async (req, r) => {
  await col.insertOne({
    Student_ID: req.body.sid,
    Name: req.body.name,
    Company: req.body.company,
    Duration: req.body.duration,
    Status: req.body.status
  });
  r.redirect("/");
});

app.get("/internships/infosys", async (_, r) =>
  r.json(await col.find({ Company: "Infosys" }).toArray())
);

app.put("/internships/:id", async (req, r) => {
  await col.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { Status: req.body.status } }
  );
  r.json({ message:  "Status Updated" });
});

app.listen(3000, () => console.log("Server running"));