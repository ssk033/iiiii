=========================================
VITE + REACT : NAME DISPLAY APP
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
STEP 3: CREATE NameDisplay COMPONENT
-----------------------------------------

cd src
touch NameDisplay.jsx


---------- FILE: src/NameDisplay.jsx ----------

import React, { useState } from "react";

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

export default NameDisplay;


-----------------------------------------
STEP 4: APP COMPONENT
-----------------------------------------

---------- FILE: src/App.jsx ----------

import NameDisplay from "./NameDisplay";

function App() {
  return (
    <div>
      <NameDisplay />
    </div>
  );
}

export default App;


-----------------------------------------
STEP 5: RUN PROJECT
-----------------------------------------
npm run dev
