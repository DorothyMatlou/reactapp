import "./App.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Pretoria" />
        <footer>
          Coded by Dorothy Maleka and it is{" "}
          <a
            href="https://github.com/DorothyMatlou/reactapp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://imaginative-profiterole-515e63.netlify.app/">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
