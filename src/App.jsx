import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Employees from "./components/Employees";

function App() {
  const HeaderText = "I am going to kick your butt";
  const employeeInfo = [
    {
      id: 1,
      firstName: "Hung",
      surName: "Le",
    },
    { id: 2, firstName: "Hoang", surName: "Nguyen" },
    { id: 3, firstName: "Kiem", surName: "Trinh" },
    { id: 4, firstName: "Hue", surName: "Nguyen" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <List />
        {/* {employeeInfo.map(employee => {
          const {id, firstName, surName} = employee;
          
          return (
            <Employees id={id} firstName={firstName} surName={surName}  />
           
          );
        })} */}
        <Employees />
        
        <p>
          <a
            className="App-link"
            href="https://kengan-omega-manga.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My favorite manga
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://www.youtube.com/channel/UCl_lP9Kw-Uw3tTXO34dhodA/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my videos on youtube
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
