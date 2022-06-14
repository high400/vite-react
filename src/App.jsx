import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const HeaderText = "I am going to kick your butt";

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <List />
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
