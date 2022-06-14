import { useState } from "react";
import logo from "./logo.svg";
import "./List.css";


function List() {
  const [count, setCount] = useState(0);

  return (
    <div className="List">
      <header className="List-header">
        <img src={logo} className="List-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>This is where our app begins</p>
        <p>
          <a
            className="List-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="List-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default List;