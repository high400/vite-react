import React, { useState } from "react";

const user = [
  {
    number: 1,
    zone: "Hanoi",
    salary: "$1000",
  },
  { number: 2, zone: "Binh Dinh", salary: "$10000" },
  { number: 3, zone: "Gia Dinh", salary: "$20000"},
  { number: 4, zone: "Sai Gon", salary: "$30000"},
];



function Employees(props) {
  const { firstName, surName, id } = props;
  const { number, zone, salary } = user;
  const chars = ["Wong Ma ", "Kuroki Gensai ", "Gaa Naap ", "Lolon Donaire"];
  return (
    <div>
      {/* <h3>
        The employee is {id}: {surName} {firstName}{" "}
      </h3> */}
      {/* <h3> The identification is: {number}</h3>
      <h3> The city where I live is: {zone} </h3>
      <h3> The salary that I receive is: {salary} </h3> */}
      {/* {chars.map((char) => {
        return <h2> {chars} </h2>;
      })} */}
    </div>
  );
}

export default Employees;
