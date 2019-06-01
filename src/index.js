import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import NavDrawer from "./components/NavDrawer";

function App() {
  return (
    <div id="App">
      <NavDrawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
