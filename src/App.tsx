import { useState } from 'react';
import './App.css';

// File contents for each component
const fileContents: { [key: number]: string } = {
  1: `<html>
<head>
  <title>Translate Function</title>
</head>
<body>

<h3>Translate Text</h3>

<input id="text"  >
<button onclick="go()">convert</button>
<p id="output"></p>

<script>
const go = () =>
  output.innerText = text.value.replace(
    /[b-df-hj-np-tv-z]/gi,
    c => c + "o" + c
  );
</script>

</body>
</html>`,
  2: `<!DOCTYPE html>
<html>
<body>

<input id="m" >
<button onclick="go()">Convert</button>
<p id="output"></p>

<script>
const getMonth = (() => {
  const months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
  return n => {
    n = Math.floor(+n);
    return n >= 1 && n <= 12 ? months[n - 1] : "Bad Number";
  };
})();

const go = () =>
  output.innerText = getMonth(m.value);
</script>

</body>
</html>`,
  3: `<!DOCTYPE html>
<html>
<body>

<input id="usn" placeholder="USN"><br><br>
<input id="code" placeholder="Subject Code"><br><br>
<input id="subname" placeholder="Subject Name"><br> <br>
<input id="cie" placeholder="CIE Marks"><br> <br>
<input id="see" placeholder="SEE Marks"><br> <br>

<button onclick="go()">Display</button>
<p id="out"></p>

<script>
const Student = (cie, see) => {
  cie = +cie; see = +see;
  return { total: () => cie + see };
};

const go = () => {
  const s = Student(cie.value, see.value);
  out.innerHTML =
    \`USN: \${usn.value}<br>
     Subject Code: \${code.value}<br>
     Subject Name: \${subname.value}<br>
     Total Marks: \${s.total()}\`;
};
</script>

</body>
</html>`,
  4: `import React, { useState } from "react";

function Employee() {
  const [name, setName] = useState("Rahul");
  const [address, setAddress] = useState("Bangalore");
  const company = "Infosys";

  const changeDetails = () => {
    setName("Amit");
    setAddress("Mumbai");
  };

  return (
    <div>
      <h3>Employee Details</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Company: {company}</p>

      <button onClick={changeDetails}>CHANGE</button>
    </div>
  );
}

export default Employee;`,
  5: `<!DOCTYPE html>
<html>
<body>

<input id="n" placeholder="noun">
<input id="c" placeholder="number">
<button onclick="show()">Pluralize</button>
<p id="output"></p>

<script>
const pluralize = (noun, num) =>
  num + " " + (num == 1 ? noun : noun + "s");

const show = () =>
  output.innerText = pluralize(n.value, c.value);
</script>

</body>
</html>`,
  6: `import React, { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>{name}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default NameDisplay;`,
  7: `const express = require("express");
const app = express();

/* CSE Branch */
app.get("/cse", (req, res) => {
  res.send(\`
    <body style="background-color: lightblue; font-family: Arial;">
      <h1>CSE Branch</h1>
      <p>Computer Science and Engineering</p>
    </body>
  \`);
});

/* ECE Branch */
app.get("/ece", (req, res) => {
  res.send(\`
    <body style="background-color: lightgreen; font-family: Verdana;">
      <h1>ECE Branch</h1>
      <p>Electronics and Communication Engineering</p>
    </body>
  \`);
});

/* ME Branch */
app.get("/me", (req, res) => {
  res.send(\`
    <body style="background-color: lightyellow; font-family: Georgia;">
      <h1>ME Branch</h1>
      <p>Mechanical Engineering</p>
    </body>
  \`);
});

/* Start Server */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,
  8: `const readline = require("readline");

function vowelCount(str) {
  let a=0,e=0,i=0,o=0,u=0;
  str = str.toLowerCase();

  for (let ch of str) {
    if (ch === 'a') a++;
    else if (ch === 'e') e++;
    else if (ch === 'i') i++;
    else if (ch === 'o') o++;
    else if (ch === 'u') u++;
  }

  console.log("a:", a);
  console.log("e:", e);
  console.log("i:", i);
  console.log("o:", o);
  console.log("u:", u);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  vowelCount(input);
  rl.close();
});`,
  9: `<!DOCTYPE html>
<html>
<body>

<input id="s" >
<button onclick="go()">Check</button>
<p id="out"></p>

<script>
const notBad = str => {
  let n = str.indexOf("not"),
      b = str.indexOf("bad");
  return n != -1 && b > n
    ? str.slice(0, n) + "good" + str.slice(b + 3)
    : str;
};

const go = () => out.innerText = notBad(s.value);
</script>

</body>
</html>`,
  10: `const express = require("express");
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
  res.send(\`Website visited \${visitCount} times\`);
});

/* Start server */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,
  11: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Box Model</title>
  <style>
    h1 {
      border: 1px solid red;
      background-color: #D18C1D;
      padding: 10px;
    }

    li {
      margin: 15px;
      background-color: #C0A9DB;
    }

    p {
      width: 600px;
      height: 400px;
      border: 2px dotted black;
      background-color: #D1D631;
    }
  </style>
</head>

<body>

  <h1>CSS Box Model Example</h1>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <p>
    This paragraph demonstrates the CSS Box Model with fixed width,
    height, border, and background color.
  </p>

</body>
</html>`,
  12: `<!DOCTYPE html>
<html>
<body>

<h4>Stack</h4>
<input id="s">
<button onclick="S.push(s.value)">Push</button>
<button onclick="S.pop()">Pop</button>
<p id="sd"></p>

<h4>Queue</h4>
<input id="q">
<button onclick="Q.enq(q.value)">Enqueue</button>
<button onclick="Q.deq()">Dequeue</button>
<p id="qd"></p>

<script>
const S = (() => {
  let a = [];
  return {
    push:x => (a.push(x), sd.innerText = a),
    pop:() => (a.pop(), sd.innerText = a)
  };
})();

const Q = (() => {
  let a = [];
  return {
    enq:x => (a.push(x), qd.innerText = a),
    deq:() => (a.shift(), qd.innerText = a)
  };
})();
</script>

</body>
</html>`
};

// PartB folder file contents
const partbFileContents: { [key: number]: string } = {
  1: `// make folder
// npm init -y
// npm i express 
// npm install mongoose
// npm install mongodb
// file 1 : app1.js

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

// file 2 : index1.html
<!DOCTYPE html>
<html>
<body>

<h2>Complaint Management</h2>

<form action="/complaints" method="POST">
  <input name="userName" placeholder="Name" required>
  <input name="issue" placeholder="Issue" required>
  <button>Submit</button>
</form>

<hr>

<input id="id" placeholder="Complaint ID">
<select id="st">
  <option>In Progress</option>
  <option>Resolved</option>
</select>
<button onclick="update()">Update</button>

<hr>

<button onclick="load()">Show All</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/complaints").then(r=>r.json())
  .then(d=>list.innerHTML=d.map(c=>
    \`<li>\${c._id} | \${c.userName} | \${c.issue} | \${c.status}</li>\`
  ).join(""));

const update = () =>
  fetch("/complaints/"+id.value,{
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({status:st.value})
  }).then(r=>r.json()).then(a=>alert(a.message));
</script>

</body>
</html>`,
  2: `// app2.js

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

// index2.html 

<!DOCTYPE html>
<html>
<body>

<h2>Student Exam Fee</h2>

<form action="/students" method="POST">
  <input name="name" placeholder="Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="sem" placeholder="Semester" required>
  <input name="fee" placeholder="Exam Fee">
  <button>Add</button>
</form>

<hr>

<button onclick="del()">Delete Fee = 0</button>
<button onclick="load()">Show Students</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/students").then(r=>r.json())
  .then(d=>list.innerHTML=d.map(s=>
    \`<li>\${s.Student_name} | \${s.USN} | Sem \${s.Semester} | Fee \${s.Exam_fee}</li>\`
  ).join(""));

const del = () =>
  fetch("/students/unpaid",{method:"DELETE"})
  .then(r=>r.json()).then(a=>alert(a.message));
</script>

</body>
</html>`,
  3: `// ===============================
// make folder
// ===============================
// mkdir employee-hr
// cd employee-hr

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongoose
// npm install mongodb


// ===============================
// file 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("HR").collection("employees");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert employee details
app.post("/employees", async (req, res) => {
  await col.insertOne({
    emp_name: req.body.emp_name,
    email: req.body.email,
    phone: req.body.phone,
    hire_date: req.body.hire_date,
    job_title: req.body.job_title,
    salary: Number(req.body.salary)
  });
  res.redirect("/");
});

// Get employees with salary > 50000
app.get("/employees/highsalary", async (_, res) => {
  const data = await col.find({ salary: { $gt: 50000 } }).toArray();
  res.json(data);
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index1.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Employee Management (HR)</h2>

<form action="/employees" method="POST">
  <input name="emp_name" placeholder="Employee Name" required>
  <input name="email" placeholder="Email" required>
  <input name="phone" placeholder="Phone" required>
  <input name="hire_date" placeholder="Hire Date" required>
  <input name="job_title" placeholder="Job Title" required>
  <input name="salary" placeholder="Salary" required>
  <button>Add Employee</button>
</form>

<hr>

<button onclick="load()">Show Employees with Salary > 50000</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/employees/highsalary")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(e =>
        \`<li>\${e.emp_name} | \${e.job_title} | \${e.salary}</li>\`
      ).join("")
    );
</script>

</body>
</html>`,
  4: `//app4.js 
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

//index4.html


<!DOCTYPE html>
<html>
<body>

<h2>Internship Tracking</h2>

<form action="/internships" method="POST">
  <input name="sid" placeholder="Student ID" required>
  <input name="name" placeholder="Name" required>
  <input name="company" placeholder="Company" required>
  <input name="duration" placeholder="Duration" required>
  <input name="status" value="Ongoing">
  <button>Add</button>
</form>

<hr>

<input id="id" placeholder="Internship ID">
<select id="st">
  <option>Ongoing</option>
  <option>Completed</option>
</select>
<button onclick="update()">Update</button>

<hr>

<button onclick="load()">Show Infosys Interns</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/internships/infosys").then(r=>r.json())
  .then(d=>list.innerHTML=d.map(i=>
    \`<li>\${i._id} | \${i.Student_ID} | \${i.Name} | \${i.Duration} | \${i.Status}</li>\`
  ).join(""));

const update = () =>
  fetch("/internships/"+id.value,{
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({status:st.value})
  }).then(r=>r.json()).then(a=>alert(a.message));
</script>

</body>
</html>`,
  5: `// ===============================
// make folder
// ===============================
// mkdir student-records
// cd student-records

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongoose
// npm install mongodb


// ===============================
// file 1 : app5.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("studentDB").collection("students");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert student record
app.post("/students", async (req, res) => {
  await col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    department: req.body.department,
    grade: req.body.grade
  });
  res.redirect("/");
});

// Update grade by student name
app.put("/students/:name", async (req, res) => {
  await col.updateOne(
    { name: req.params.name },
    { $set: { grade: req.body.grade } }
  );
  res.json({ message: "Grade Updated" });
});

// Get all student records
app.get("/students", async (_, res) =>
  res.json(await col.find().toArray())
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index5.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Student Record Management</h2>

<!-- Add student -->
<form action="/students" method="POST">
  <input name="name" placeholder="Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="department" placeholder="Department" required>
  <input name="grade" placeholder="Grade" required>
  <button>Add Student</button>
</form>

<hr>

<!-- Update grade -->
<input id="nm" placeholder="Student Name">
<input id="gr" placeholder="New Grade">
<button onclick="update()">Update Grade</button>

<hr>

<!-- View students -->
<button onclick="load()">Show All Students</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/students")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(s =>
        \`<li>\${s.name} | \${s.usn} | \${s.department} | \${s.grade}</li>\`
      ).join("")
    );

const update = () =>
  fetch("/students/" + nm.value, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ grade: gr.value })
  })
  .then(r => r.json())
  .then(a => alert(a.message));
</script>

</body>
</html>`,
  6: `// app6.js 
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

// index6.html 
<!DOCTYPE html>
<html>
<body>

<h2>Hospital Bed Management</h2>

<form action="/hospitals" method="POST">
  <input name="hid" placeholder="Hospital ID" required>
  <input name="name" placeholder="Name" required>
  <input name="location" placeholder="Location" required>
  <input name="total" placeholder="Total Beds" required>
  <input name="occupied" placeholder="Occupied Beds" required>
  <button>Add</button>
</form>

<hr>

<form action="/hospitals/admit" method="POST">
  <input name="hid" placeholder="Hospital ID" required>
  <button>Admit Patient</button>
</form>

<hr>

<button onclick="load()">Hospitals with < 10 Beds</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/hospitals/lowbeds").then(r=>r.json())
  .then(d=>list.innerHTML=d.map(h=>
    \`<li>\${h.Name} (\${h.Location}) | Available: \${h.Total_Beds-h.Occupied_Beds}</li>\`
  ).join(""));
</script>

</body>
</html>`,
  7: `// ===============================
// make folder
// ===============================
// mkdir course-enrollment
// cd course-enrollment

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongoose
// npm install mongodb


// ===============================
// file 1 : app7.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("courseDB").collection("enrollments");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert enrollment record
app.post("/enrollments", async (req, res) => {
  await col.insertOne({
    student_id: req.body.student_id,
    name: req.body.name,
    course_name: req.body.course_name,
    duration: req.body.duration,
    status: "active"
  });
  res.redirect("/");
});

// Get all active enrollments
app.get("/enrollments/active", async (_, res) => {
  const data = await col.find({ status: "active" }).toArray();
  res.json(data);
});

// Update enrollment status to completed
app.put("/enrollments", async (req, res) => {
  await col.updateMany(
    {
      $or: [
        { student_id: req.body.student_id },
        { course_name: req.body.course_name }
      ]
    },
    { $set: { status: "completed" } }
  );
  res.json({ message: "Enrollment Updated" });
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index7.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Course Enrollment Management</h2>

<!-- Add enrollment -->
<form action="/enrollments" method="POST">
  <input name="student_id" placeholder="Student ID" required>
  <input name="name" placeholder="Name" required>
  <input name="course_name" placeholder="Course Name" required>
  <input name="duration" placeholder="Duration" required>
  <button>Enroll</button>
</form>

<hr>

<!-- Update enrollment -->
<input id="sid" placeholder="Student ID">
<input id="cname" placeholder="Course Name">
<button onclick="update()">Mark Completed</button>

<hr>

<!-- View active enrollments -->
<button onclick="load()">Show Active Enrollments</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/enrollments/active")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(e =>
        \`<li>\${e.student_id} | \${e.name} | \${e.course_name} | \${e.status}</li>\`
      ).join("")
    );

const update = () =>
  fetch("/enrollments", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: sid.value,
      course_name: cname.value
    })
  })
  .then(r => r.json())
  .then(a => alert(a.message));
</script>

</body>
</html>`,
  8: `// ===============================
// make folder
// ===============================
// mkdir product-system
// cd product-system
// npm init -y
// npm i express
// npm install mongodb
// npm install mongoose

// ===============================
// file : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => col = c.db("productDB").collection("products"));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

// Insert product & calculate Final_Price
app.post("/products", async (req, res) => {
  const fp = req.body.price - (req.body.price * req.body.discount / 100);
  await col.insertOne({
    product_id: req.body.product_id,
    name: req.body.name,
    price: Number(req.body.price),
    discount: Number(req.body.discount),
    final_price: fp
  });
  res.redirect("/");
});

// Get products with Final_Price < 1000
app.get("/products", async (_, res) =>
  res.json(await col.find({ final_price: { $lt: 1000 } }).toArray())
);

app.listen(3000, () => console.log("Server running"));


<!-- file 2 : index.html -->
<!DOCTYPE html>
<html>
<body>
<h2>Product Form</h2>

<form action="/products" method="POST">
  <input name="product_id" placeholder="ID">
  <input name="name" placeholder="Name">
  <input name="price" placeholder="Price">
  <input name="discount" placeholder="Discount">
  <button>Add</button>
</form>

<button onclick="load()">Show < 1000</button>
<ul id="list"></ul>

<script>
const load = () =>
  fetch("/products/cheap").then(r=>r.json())
  .then(d=>list.innerHTML=d.map(p=>
    \`<li>\${p.name} | \${p.final_price}</li>\`).join(""));
</script>
</body>
</html>`,
  9: `// ===============================
// make folder
// ===============================
// mkdir student-system
// cd student-system

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongodb
// npm install mongoose


// ===============================
// file 1 : app9.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("studentDB").collection("students");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert student details
app.post("/students", async (req, res) => {
  await col.insertOne({
    name: req.body.name,
    branch: req.body.branch,
    semester: req.body.semester
  });
  res.redirect("/");
});

// Get CSE 6th semester students
app.get("/students/cse6", async (_, res) =>
  res.json(await col.find({ branch: "CSE", semester: "6" }).toArray())
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index9.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Student Information System</h2>

<!-- Add student -->
<form action="/students" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="branch" placeholder="Branch" required>
  <input name="semester" placeholder="Semester" required>
  <button>Add Student</button>
</form>

<hr>

<!-- Display CSE 6th semester students -->
<button onclick="load()">Show CSE 6th Semester Students</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/students/cse6")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(s =>
        \`<li>\${s.name} | \${s.branch} | \${s.semester}</li>\`
      ).join("")
    );
</script>

</body>
</html>`,
  10: `// ===============================
// make folder
// ===============================
// mkdir startup-system
// cd startup-system

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongodb
// npm install mongoose


// ===============================
// file 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("startupDB").collection("ideas");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert startup idea
app.post("/ideas", async (req, res) => {
  await col.insertOne({
    team_name: req.body.team_name,
    domain: req.body.domain,
    funding: Number(req.body.funding)
  });
  res.redirect("/");
});

// Get EdTech ideas with funding > 5 lakhs
app.get("/ideas/edtech", async (_, res) =>
  res.json(
    await col.find({
      domain: "EdTech",
      funding: { $gt: 500000 }
    }).toArray()
  )
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index1.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Startup Idea Portal</h2>

<!-- Add startup idea -->
<form action="/ideas" method="POST">
  <input name="team_name" placeholder="Team Name" required>
  <input name="domain" placeholder="Domain (Eg: EdTech)" required>
  <input name="funding" placeholder="Funding Amount" required>
  <button>Submit Idea</button>
</form>

<hr>

<!-- Display filtered startups -->
<button onclick="load()">Show EdTech Startups (Funding > 5 Lakhs)</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/ideas/edtech")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(i =>
        \`<li>\${i.team_name} | \${i.domain} | \${i.funding}</li>\`
      ).join("")
    );
</script>

</body>
</html>`,
  11: `// ===============================
// make folder
// ===============================
// mkdir attendance-system
// cd attendance-system

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongodb
// npm install mongoose


// ===============================
// file 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("attendanceDB").collection("students");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert attendance record
app.post("/attendance", async (req, res) => {
  const percentage = (req.body.attended / req.body.total) * 100;

  await col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    attended: Number(req.body.attended),
    total: Number(req.body.total),
    percentage: percentage
  });
  res.redirect("/");
});

// Get students with attendance < 75%
app.get("/attendance/low", async (_, res) =>
  res.json(await col.find({ percentage: { $lt: 75 } }).toArray())
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index1.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Attendance Management System</h2>

<!-- Add attendance -->
<form action="/attendance" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="attended" placeholder="Classes Attended" required>
  <input name="total" placeholder="Total Classes" required>
  <button>Add Attendance</button>
</form>

<hr>

<!-- Show low attendance -->
<button onclick="load()">Show Attendance Below 75%</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/attendance/low")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(s =>
        \`<li>\${s.name} | \${s.usn} | \${s.percentage.toFixed(2)}%</li>\`
      ).join("")
    );
</script>

</body>
</html>`,
  12: `// ===============================
// make folder
// ===============================
// mkdir exam-system
// cd exam-system

// ===============================
// npm init
// ===============================
// npm init -y

// ===============================
// install packages
// ===============================
// npm i express
// npm install mongodb
// npm install mongoose


// ===============================
// file 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let col;

// MongoDB connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(c => {
    col = c.db("examDB").collection("students");
    console.log("MongoDB connected");
  });

// Load HTML page
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index1.html"))
);

// Insert student and determine eligibility
app.post("/students", async (req, res) => {
  const status = req.body.marks < 20 ? "Not Eligible" : "Eligible";

  await col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    marks: Number(req.body.marks),
    status: status
  });
  res.redirect("/");
});

// Get not eligible students
app.get("/students/noteligible", async (_, res) =>
  res.json(await col.find({ status: "Not Eligible" }).toArray())
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);


// ===============================
// file 2 : index1.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Examination Eligibility System</h2>

<!-- Add student marks -->
<form action="/students" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="marks" placeholder="Marks" required>
  <button>Add Student</button>
</form>

<hr>

<!-- Display not eligible students -->
<button onclick="load()">Show Not Eligible Students</button>

<ul id="list"></ul>

<script>
const load = () =>
  fetch("/students/noteligible")
    .then(r => r.json())
    .then(d =>
      list.innerHTML = d.map(s =>
        \`<li>\${s.name} | \${s.usn} | \${s.marks} | \${s.status}</li>\`
      ).join("")
    );
</script>

</body>
</html>`
};

function App() {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);
  const [selectedSource, setSelectedSource] = useState<'components' | 'partb'>('components');
  const [issue, setIssue] = useState<string>('');
  
  const buttons = [
    'Student Name',
    'SEM',
    'Code',
    'CIE',
    'SEE',
    'Total',
    'CGPA',
    'SGPA',
    'Result',
    'Grade',
    'Status',
    'Actions'
  ];

  const handleButtonClick = (index: number) => {
    setSelectedFile(index + 1);
    setSelectedSource('components');
  };

  const handleShowButtonClick = (index: number) => {
    setSelectedFile(index + 1);
    setSelectedSource('partb');
  };

  return (
    <div className="app">
      <h1>Student Management System</h1>
      
      {/* First row of buttons - smaller, single line */}
      <div className="buttons-container-single">
        {buttons.map((buttonText, index) => (
          <button 
            key={index} 
            className="action-button-small"
            onClick={() => handleButtonClick(index)}
          >
            <span className="button-number-small">{index + 1}</span>
            {buttonText}
          </button>
        ))}
      </div>

      {/* Input area for issue */}
      <div className="issue-input-container">
        <textarea
          className="issue-input"
          placeholder="Write your issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
      </div>

      {/* Second row of show buttons */}
      <div className="show-buttons-container">
        {Array.from({ length: 12 }, (_, index) => (
          <button
            key={index}
            className="show-button"
            onClick={() => handleShowButtonClick(index)}
          >
            Show{index + 1}
          </button>
        ))}
      </div>
      
      {selectedFile && (
        <div className="code-display">
          <div className="code-header">
            <h2>
              {selectedSource === 'partb' 
                ? `File: partb/q${selectedFile}.txt`
                : `File: q${selectedFile}.${selectedFile === 4 || selectedFile === 6 ? 'jsx' : selectedFile === 7 || selectedFile === 8 || selectedFile === 10 ? 'js' : 'html'}`
              }
            </h2>
            <button className="close-button" onClick={() => setSelectedFile(null)}>×</button>
          </div>
          <pre className="code-block">
            <code>{selectedSource === 'partb' ? partbFileContents[selectedFile] : fileContents[selectedFile]}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
