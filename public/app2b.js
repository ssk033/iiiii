const e = require("express");
const { MongoClient } = require("mongodb");
const p = require("path");

const app = e();
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

let col;
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("collegeDB").collection("students");
    console.log("MongoDB connected");
  });

app.get("/", (_, r) =>
  r.sendFile(p.join(__dirname, "index.html"))
);

app.post("/students", async (req, r) => {
  const { name, usn, sem, fee } = req.body;
  await col.insertOne({
    Student_name: name,
    USN: usn,
    Semester: sem,
    Exam_fee: +fee
  });
  r.redirect("/");
});

app.delete("/students/unpaid", async (_, r) => {
  const d = await col.deleteMany({ Exam_fee: { $in: [0, null] } });
  r.json({ message: "Unpaid students deleted", deleted: d.deletedCount });
});

app.get("/students", async (_, r) =>
  r.json(await col.find().toArray())
);

app.listen(3000, () => console.log("Server running"));