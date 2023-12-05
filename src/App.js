import "./App.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          Coded by Dorothy Maleka and it is{" "}
          <a
            href="https://github.com/DorothyMatlou/reactapp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
