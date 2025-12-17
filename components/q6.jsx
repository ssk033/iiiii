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
