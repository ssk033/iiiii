import React, { useState } from "react";

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

export default Employee;
