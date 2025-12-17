=========================================
VITE + REACT : EMPLOYEE APP PROJECT
=========================================


-----------------------------------------
STEP 1: CREATE VITE PROJECT
-----------------------------------------

npm create vite@latest employee-app
# Select Framework  : React
# Select Variant    : JavaScript


-----------------------------------------
STEP 2: INSTALL DEPENDENCIES
-----------------------------------------

cd employee-app
npm install


-----------------------------------------
STEP 3: CREATE EMPLOYEE COMPONENT
-----------------------------------------

cd src
touch Employee.jsx


----------CREATE FILE: src/Employee.jsx ----------

import { useState } from "react";

function Employee() {
  const names = ["Rahul", "Amit", "Rohit", "Suresh", "Vikas"];
  const cities = ["Bangalore", "Mumbai", "Delhi", "Pune", "Chennai"];

  const [name, setName] = useState(names[0]);
  const [address, setAddress] = useState(cities[0]);
  const company = "Infosys";

  const changeDetails = () => {
    const randomName =
      names[Math.floor(Math.random() * names.length)];
    const randomCity =
      cities[Math.floor(Math.random() * cities.length)];

    setName(randomName);
    setAddress(randomCity);
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

export default Employee;


-----------------------------------------
STEP 4: APP COMPONENT
-----------------------------------------

---------- FILE: src/App.jsx ----------

import Employee from "./Employee";

function App() {
  return (
    <div>
      <Employee />
    </div>
  );
}

export default App;

-----------------------------------------
STEP 5: RUN PROJECT
-----------------------------------------
npm run dev

