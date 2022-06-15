import React, { useState } from "react";

const user = {
  number: 1,
  zone: "Hanoi", 
  salary: 10000,
};

function Employees(props) {
  const {firstName, surName, id} = props;
  const {number, zone, salary} = user;

  return (
    <div>
        {/* <h3>The employee is {id}: {surName} {firstName} </h3> */}
        <h3> {zone} </h3>
    </div>
  );
}

export default Employees;
