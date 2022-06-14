import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Employees from "./components/Employees";

function App() {
  const HeaderText = "I am going to kick your butt";
  

  return (
    <div className="App">
      <header className="App-header">
        <List />
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
