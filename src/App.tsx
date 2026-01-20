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
  4: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Employee Change</title>

  <script src="react/react.development.js"></script>
  <script src="react/react-dom.development.js"></script>
  <script src="react/babel.min.js"></script>
</head>
<body>

<div id="root"></div>

<script type="text/babel">

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.employees = [
      { name: "Rahul", address: "Bangalore", company: "TCS" },
      { name: "Amit", address: "Mysore", company: "Infosys" },
      { name: "Neha", address: "Delhi", company: "Wipro" },
      { name: "Priya", address: "Chennai", company: "HCL" },
      { name: "Rohan", address: "Pune", company: "Capgemini" },
      { name: "Sneha", address: "Hyderabad", company: "Tech Mahindra" },
      { name: "Karthik", address: "Coimbatore", company: "Zoho" },
      { name: "Anjali", address: "Mumbai", company: "Accenture" }
    ];

    this.state = this.employees[0];
  }

  changeData = () => {
    const randomIndex = Math.floor(Math.random() * this.employees.length);
    this.setState(this.employees[randomIndex]);
  }

  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <p><b>Name:</b> {this.state.name}</p>
        <p><b>Address:</b> {this.state.address}</p>
        <p><b>Company:</b> {this.state.company}</p>
        <button onClick={this.changeData}>CHANGE</button>
      </div>
    );
  }
}

ReactDOM.render(<Employee />, document.getElementById("root"));

</script>

</body>
</html>`,
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
  6: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Live Name</title>

  <script src="react/react.development.js"></script>
  <script src="react/react-dom.development.js"></script>
  <script src="react/babel.min.js"></script>
</head>
<body>

<div id="root"></div>

<script type="text/babel">

class NameApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" onChange={this.handleChange} placeholder="Enter Name" />
      </div>
    );
  }
}

ReactDOM.render(<NameApp />, document.getElementById("root"));

</script>

</body>
</html>`,
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
  1: `===================================================
COMPLAINT MANAGEMENT API
Node.js + Express + MongoDB
===================================================

STEP 1: Create Project Folder
--------------------------------
mkdir complaint-management
cd complaint-management

STEP 2: Initialize Node Project
--------------------------------
npm init -y

STEP 3: Install Required Packages
--------------------------------
npm install express mongodb

STEP 4: Create Files
--------------------------------
1) app.js
2) index.html

===================================================
FILE 1 : app.js
===================================================

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let collection;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    const db = client.db("complaintDB");
    collection = db.collection("complaints");
    console.log("MongoDB Connected");
  });

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// POST: Submit New Complaint
app.post("/complaints", async (req, res) => {
  await collection.insertOne({
    userName: req.body.userName,
    issue: req.body.issue,
    status: "Pending"
  });
  res.redirect("/");
});

// PUT: Update Complaint Status
app.put("/complaints/:id", async (req, res) => {
  await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { status: req.body.status } }
  );
  res.json({ message: "Status Updated" });
});

// GET: Fetch Pending Complaints
app.get("/complaints/pending", async (req, res) => {
  const pending = await collection.find({ status: "Pending" }).toArray();
  res.json(pending);
});

// Server Start
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

===================================================
FILE 2 : index.html
===================================================

<!DOCTYPE html>
<html>
<body>

<h2>Complaint Management System</h2>

<form action="/complaints" method="POST">
  <input name="userName" placeholder="User Name" required>
  <input name="issue" placeholder="Issue" required>
  <button type="submit">Submit Complaint</button>
</form>

<hr>

<input id="cid" placeholder="Complaint ID">
<select id="status">
  <option>In Progress</option>
  <option>Resolved</option>
</select>
<button onclick="updateStatus()">Update Status</button>

<hr>

<button onclick="loadPending()">Show Pending Complaints</button>
<ul id="list"></ul>

<script>
function updateStatus() {
  fetch('/complaints/' + cid.value, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ status: status.value })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function loadPending() {
  fetch('/complaints/pending')
    .then(res => res.json())
    .then(data => {
      list.innerHTML = data.map(c =>
        \`<li>\${c._id} | \${c.userName} | \${c.issue} | \${c.status}</li>\`
      ).join("");
    });
}
</script>

</body>
</html>

===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app.js
3) Open: http://localhost:3000
`,
  2: `===================================================
Q2(b) STUDENT EXAM FEE MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===================================================
// STEP 1: Create Project Folder
// ===================================================

// mkdir student-exam-fee
// cd student-exam-fee


// ===================================================
// STEP 2: Initialize npm
// ===================================================

// npm init -y


// ===================================================
// STEP 3: Install Required Packages
// ===================================================

// npm install express
// npm install mongodb


// ===================================================
// FILE 1 : app.js
// ===================================================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

let col;

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("collegeDB").collection("students");
    console.log("MongoDB Connected");
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Student
app.post("/students", (req, res) => {
  col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    sem: req.body.sem,
    fee: Number(req.body.fee)
  });
  res.redirect("/");
});

// Delete students with fee = 0 or null
app.delete("/students/unpaid", async (req, res) => {
  const result = await col.deleteMany({ fee: { $in: [0, null] } });
  res.send("Deleted " + result.deletedCount + " unpaid students");
});

// Show all students
app.get("/students", async (req, res) => {
  const data = await col.find().toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===================================================
// FILE 2 : index.html
// ===================================================

<!DOCTYPE html>
<html>
<body>

<h2>Student Exam Fee Management</h2>

<form action="/students" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="sem" placeholder="Semester" required>
  <input name="fee" placeholder="Exam Fee">
  <button>Add</button>
</form>

<hr>

<button onclick="load()">Show Students</button>
<button onclick="del()">Delete Unpaid Students</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/students")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(s =>
        "<li>" + s.name + " | " + s.usn + " | Sem " + s.sem + " | Fee " + s.fee + "</li>"
      ).join("");
    });
}

function del() {
  fetch("/students/unpaid", { method: "DELETE" })
    .then(r => r.text())
    .then(msg => alert(msg));
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app.js
3) Open browser: http://localhost:3000
`,
  3: `===================================================
Q3(b) HR EMPLOYEE MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===================================================
// STEP 1: Create Project Folder
// ===================================================

// mkdir hr-system
// cd hr-system


// ===================================================
// STEP 2: Initialize npm
// ===================================================

// npm init -y


// ===================================================
// STEP 3: Install Required Packages
// ===================================================

// npm install express
// npm install mongodb


// ===================================================
// FILE 1 : app.js
// ===================================================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

let col;

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("HR").collection("employees");
    console.log("MongoDB Connected");
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Employee
app.post("/employees", (req, res) => {
  col.insertOne({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    hire: req.body.hire,
    job: req.body.job,
    salary: Number(req.body.salary)
  });
  res.redirect("/");
});

// Get employees with salary > 50000
app.get("/employees/highsalary", async (req, res) => {
  const data = await col.find({ salary: { $gt: 50000 } }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===================================================
// FILE 2 : index.html
// ===================================================

<!DOCTYPE html>
<html>
<body>

<h2>HR Employee Management</h2>

<form action="/employees" method="POST">
  <input name="name" placeholder="Employee Name" required>
  <input name="email" placeholder="Email" required>
  <input name="phone" placeholder="Phone" required>
  <input name="hire" placeholder="Hire Date" required>
  <input name="job" placeholder="Job Title" required>
  <input name="salary" placeholder="Salary" required>
  <button>Add Employee</button>
</form>

<hr>

<button onclick="load()">Show Salary > 50000</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/employees/highsalary")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(e =>
        "<li>" + e.name + " | " + e.job + " | " + e.salary + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app.js
3) Open browser: http://localhost:3000
`,
  4: `===================================================
Q4(b) INTERNSHIP TRACKING SYSTEM
Node.js + Express + MongoDB
===================================================


// ===================================================
// STEP 1: Create Project Folder
// ===================================================

// mkdir internship-system
// cd internship-system


// ===================================================
// STEP 2: Initialize npm
// ===================================================

// npm init -y


// ===================================================
// STEP 3: Install Required Packages
// ===================================================

// npm install express
// npm install mongodb


// ===================================================
// FILE 1 : app4.js
// ===================================================

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("internshipDB").collection("internships");
    console.log("MongoDB Connected");
  });

// Load HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Internship
app.post("/internships", (req, res) => {
  col.insertOne({
    sid: req.body.sid,
    name: req.body.name,
    company: req.body.company,
    duration: req.body.duration,
    status: "Ongoing"
  });
  res.redirect("/");
});

// Get all Infosys interns
app.get("/internships/infosys", async (req, res) => {
  const data = await col.find({ company: "Infosys" }).toArray();
  res.json(data);
});

// Update Status
app.put("/internships/:id", async (req, res) => {
  await col.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { status: req.body.status } }
  );
  res.send("Status Updated");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===================================================
// FILE 2 : index.html
// ===================================================

<!DOCTYPE html>
<html>
<body>

<h2>Internship Tracking System</h2>

<form action="/internships" method="POST">
  <input name="sid" placeholder="Student ID" required>
  <input name="name" placeholder="Name" required>
  <input name="company" placeholder="Company" required>
  <input name="duration" placeholder="Duration" required>
  <button>Add</button>
</form>

<hr>

<input id="iid" placeholder="Internship ID">
<select id="st">
  <option>Ongoing</option>
  <option>Completed</option>
</select>
<button onclick="update()">Update Status</button>

<hr>

<button onclick="load()">Show Infosys Interns</button>
<ul id="list"></ul>

<script>
function load() {
  fetch("/internships/infosys")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(i =>
        "<li>" + i.sid + " | " + i.name + " | " + i.company + " | " + i.status + "</li>"
      ).join("");
    });
}

function update() {
  fetch("/internships/" + iid.value, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: st.value })
  }).then(r => r.text())
    .then(msg => alert(msg));
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app4.js
3) Open browser: http://localhost:3000
`,
  5: `===================================================
Q5(b) STUDENT RECORD MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Project Folder
// ===============================
// mkdir student-records
// cd student-records


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app5.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("studentDB").collection("students");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Student
app.post("/students", (req, res) => {
  col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    department: req.body.department,
    grade: req.body.grade
  });
  res.redirect("/");
});

// Update Grade by Name
app.put("/students/:name", async (req, res) => {
  await col.updateOne(
    { name: req.params.name },
    { $set: { grade: req.body.grade } }
  );
  res.send("Grade Updated");
});

// Get All Students
app.get("/students", async (req, res) => {
  const data = await col.find().toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Student Record Management</h2>

<form action="/students" method="POST">
  <input name="name" placeholder="Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="department" placeholder="Department" required>
  <input name="grade" placeholder="Grade" required>
  <button>Add Student</button>
</form>

<hr>

<input id="nm" placeholder="Student Name">
<input id="gr" placeholder="New Grade">
<button onclick="update()">Update Grade</button>

<hr>

<button onclick="load()">Show All Students</button>
<ul id="list"></ul>

<script>
function load() {
  fetch("/students")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(s =>
        "<li>" + s.name + " | " + s.usn + " | " + s.department + " | " + s.grade + "</li>"
      ).join("");
    });
}

function update() {
  fetch("/students/" + nm.value, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ grade: gr.value })
  })
  .then(r => r.text())
  .then(msg => alert(msg));
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app5.js
3) Open browser: http://localhost:3000
`,
  6: `===================================================
Q6(b) HOSPITAL BED MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===================================================
// STEP 1: Create Project Folder
// ===================================================

// mkdir hospital-system
// cd hospital-system


// ===================================================
// STEP 2: Initialize npm
// ===================================================

// npm init -y


// ===================================================
// STEP 3: Install Required Packages
// ===================================================

// npm install express
// npm install mongodb


// ===================================================
// FILE 1 : app6.js
// ===================================================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("hospitalDB").collection("hospitals");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Hospital Details
app.post("/hospitals", (req, res) => {
  col.insertOne({
    hid: req.body.hid,
    name: req.body.name,
    location: req.body.location,
    total: Number(req.body.total),
    occupied: Number(req.body.occupied)
  });
  res.redirect("/");
});

// Admit Patient (Increase Occupied Beds)
app.post("/hospitals/admit", async (req, res) => {
  const result = await col.updateOne(
    { hid: req.body.hid },
    { $inc: { occupied: 1 } }
  );
  res.send("Patient Admitted");
});

// Get Hospitals with Available Beds < 10
app.get("/hospitals/lowbeds", async (req, res) => {
  const data = await col.find({
    $expr: { $lt: [{ $subtract: ["$total", "$occupied"] }, 10] }
  }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===================================================
// FILE 2 : index.html
// ===================================================

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
  <button>Add Hospital</button>
</form>

<hr>

<form action="/hospitals/admit" method="POST">
  <input name="hid" placeholder="Hospital ID" required>
  <button>Admit Patient</button>
</form>

<hr>

<button onclick="load()">Show Hospitals with &lt; 10 Available Beds</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/hospitals/lowbeds")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(h =>
        "<li>" + h.name + " | Available: " + (h.total - h.occupied) + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app6.js
3) Open browser: http://localhost:3000
`,
  7: `===================================================
Q7(b) COURSE ENROLLMENT MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Project Folder
// ===============================
// mkdir course-enrollment
// cd course-enrollment


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app7.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("courseDB").collection("enrollments");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Enrollment
app.post("/enrollments", (req, res) => {
  col.insertOne({
    student_id: req.body.student_id,
    name: req.body.name,
    course: req.body.course_name,
    duration: req.body.duration,
    status: "active"
  });
  res.redirect("/");
});

// Get Active Enrollments
app.get("/enrollments/active", async (req, res) => {
  const data = await col.find({ status: "active" }).toArray();
  res.json(data);
});

// Update Status to Completed (by Student ID or Course Name)
app.put("/enrollments", async (req, res) => {
  await col.updateMany(
    {
      $or: [
        { student_id: req.body.student_id },
        { course: req.body.course_name }
      ]
    },
    { $set: { status: "completed" } }
  );
  res.send("Status Updated");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Course Enrollment Management</h2>

<form action="/enrollments" method="POST">
  <input name="student_id" placeholder="Student ID" required>
  <input name="name" placeholder="Name" required>
  <input name="course_name" placeholder="Course Name" required>
  <input name="duration" placeholder="Duration" required>
  <button>Enroll</button>
</form>

<hr>

<input id="sid" placeholder="Student ID">
<input id="cname" placeholder="Course Name">
<button onclick="update()">Mark Completed</button>

<hr>

<button onclick="load()">Show Active Enrollments</button>
<ul id="list"></ul>

<script>
function load() {
  fetch("/enrollments/active")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(e =>
        "<li>" + e.student_id + " | " + e.name + " | " + e.course + " | " + e.status + "</li>"
      ).join("");
    });
}

function update() {
  fetch("/enrollments", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: sid.value,
      course_name: cname.value
    })
  })
  .then(r => r.text())
  .then(msg => alert(msg));
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app7.js
3) Open browser: http://localhost:3000
`,
  8: `===================================================
Q8(b) PRODUCT MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Folder
// ===============================
// mkdir product-system
// cd product-system


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("productDB").collection("products");
    console.log("MongoDB Connected");
  });

// Load HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Product and Calculate Final Price
app.post("/products", (req, res) => {
  const price = Number(req.body.price);
  const discount = Number(req.body.discount);
  const finalPrice = price - (price * discount / 100);

  col.insertOne({
    product_id: req.body.product_id,
    name: req.body.name,
    price: price,
    discount: discount,
    final_price: finalPrice
  });

  res.redirect("/");
});

// Get Products with Final Price < 1000
app.get("/products/cheap", async (req, res) => {
  const data = await col.find({ final_price: { $lt: 1000 } }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Product Management</h2>

<form action="/products" method="POST">
  <input name="product_id" placeholder="Product ID" required>
  <input name="name" placeholder="Name" required>
  <input name="price" placeholder="Price" required>
  <input name="discount" placeholder="Discount" required>
  <button>Add Product</button>
</form>

<hr>

<button onclick="load()">Show Products (Final Price < 1000)</button>
<ul id="list"></ul>

<script>
function load() {
  fetch("/products/cheap")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(p =>
        "<li>" + p.name + " | Final Price: " + p.final_price + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app.js
3) Open browser: http://localhost:3000
`,
  9: `===================================================
Q9(b) STUDENT INFORMATION SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Project Folder
// ===============================
// mkdir student-system
// cd student-system


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app9.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("studentDB").collection("students");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Student Details
app.post("/students", (req, res) => {
  col.insertOne({
    name: req.body.name,
    branch: req.body.branch,
    semester: req.body.semester
  });
  res.redirect("/");
});

// Get All CSE 6th Semester Students
app.get("/students/cse6", async (req, res) => {
  const data = await col.find({ branch: "CSE", semester: "6" }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Student Information System</h2>

<form action="/students" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="branch" placeholder="Branch" required>
  <input name="semester" placeholder="Semester" required>
  <button>Add Student</button>
</form>

<hr>

<button onclick="load()">Show CSE 6th Semester Students</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/students/cse6")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(s =>
        "<li>" + s.name + " | " + s.branch + " | " + s.semester + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app9.js
3) Open browser: http://localhost:3000
`,
  10: `===================================================
Q10(b) STARTUP IDEA PORTAL
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Project Folder
// ===============================
// mkdir startup-system
// cd startup-system


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("startupDB").collection("ideas");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Startup Idea
app.post("/ideas", (req, res) => {
  col.insertOne({
    id: req.body.id,
    team: req.body.team,
    title: req.body.title,
    domain: req.body.domain,
    funding: Number(req.body.funding)
  });
  res.redirect("/");
});

// Get EdTech Startups with Funding > 5 Lakhs
app.get("/ideas/edtech", async (req, res) => {
  const data = await col.find({
    domain: "EdTech",
    funding: { $gt: 500000 }
  }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Startup Idea Portal</h2>

<form action="/ideas" method="POST">
  <input name="id" placeholder="Startup ID" required>
  <input name="team" placeholder="Team Name" required>
  <input name="title" placeholder="Title" required>
  <input name="domain" placeholder="Domain (Eg: EdTech)" required>
  <input name="funding" placeholder="Funding Amount" required>
  <button>Submit Idea</button>
</form>

<hr>

<button onclick="load()">Show EdTech Startups (Funding > 5 Lakhs)</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/ideas/edtech")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(i =>
        "<li>" + i.team + " | " + i.title + " | " + i.domain + " | " + i.funding + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app1.js
3) Open browser: http://localhost:3000
`,
  11: `===================================================
Q11(b) ATTENDANCE MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Folder
// ===============================
// mkdir attendance-system
// cd attendance-system


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("attendanceDB").collection("students");
    console.log("MongoDB Connected");
  });

// Load HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Attendance
app.post("/attendance", (req, res) => {
  const attended = Number(req.body.attended);
  const total = Number(req.body.total);
  const percent = (attended / total) * 100;

  col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    attended: attended,
    total: total,
    percentage: percent
  });

  res.redirect("/");
});

// Get Students with Attendance < 75%
app.get("/attendance/low", async (req, res) => {
  const data = await col.find({ percentage: { $lt: 75 } }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Attendance Management System</h2>

<form action="/attendance" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="attended" placeholder="Classes Attended" required>
  <input name="total" placeholder="Total Classes" required>
  <button>Add Attendance</button>
</form>

<hr>

<button onclick="load()">Show Attendance Below 75%</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/attendance/low")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(s =>
        "<li>" + s.name + " | " + s.usn + " | " + s.percentage.toFixed(2) + "%</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app1.js
3) Open browser: http://localhost:3000
`,
  12: `===================================================
Q12(b) EXAM MANAGEMENT SYSTEM
Node.js + Express + MongoDB
===================================================


// ===============================
// STEP 1: Create Folder
// ===============================
// mkdir exam-system
// cd exam-system


// ===============================
// STEP 2: Initialize npm
// ===============================
// npm init -y


// ===============================
// STEP 3: Install Packages
// ===============================
// npm install express
// npm install mongodb


// ===============================
// FILE 1 : app1.js
// ===============================

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let col;

// MongoDB Connection
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    col = client.db("examDB").collection("students");
    console.log("MongoDB Connected");
  });

// Load HTML Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Insert Student and Check Eligibility
app.post("/students", (req, res) => {
  const marks = Number(req.body.marks);
  const status = marks < 20 ? "Not Eligible" : "Eligible";

  col.insertOne({
    name: req.body.name,
    usn: req.body.usn,
    marks: marks,
    status: status
  });

  res.redirect("/");
});

// Get Not Eligible Students
app.get("/students/noteligible", async (req, res) => {
  const data = await col.find({ status: "Not Eligible" }).toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// ===============================
// FILE 2 : index.html
// ===============================

<!DOCTYPE html>
<html>
<body>

<h2>Exam Eligibility System</h2>

<form action="/students" method="POST">
  <input name="name" placeholder="Student Name" required>
  <input name="usn" placeholder="USN" required>
  <input name="marks" placeholder="Marks" required>
  <button>Add Student</button>
</form>

<hr>

<button onclick="load()">Show Not Eligible Students</button>

<ul id="list"></ul>

<script>
function load() {
  fetch("/students/noteligible")
    .then(r => r.json())
    .then(d => {
      list.innerHTML = d.map(s =>
        "<li>" + s.name + " | " + s.usn + " | " + s.marks + " | " + s.status + "</li>"
      ).join("");
    });
}
</script>

</body>
</html>


===================================================
HOW TO RUN
===================================================
1) Start MongoDB
2) Run: node app1.js
3) Open browser: http://localhost:3000
`
};

function App() {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);
  const [selectedSource, setSelectedSource] = useState<'components' | 'partb'>('components');
  const [issue, setIssue] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
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

  const handleCopy = async () => {
    if (selectedFile) {
      const codeToCopy = selectedSource === 'partb' 
        ? partbFileContents[selectedFile] 
        : fileContents[selectedFile];
      
      try {
        await navigator.clipboard.writeText(codeToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
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
            <div className="header-buttons">
              <button 
                className="copy-button" 
                onClick={handleCopy}
                title="Copy code"
              >
                {copied ? '✓' : 'C'}
              </button>
              <button className="close-button" onClick={() => setSelectedFile(null)}>×</button>
            </div>
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
