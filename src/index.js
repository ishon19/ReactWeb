import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import ls from "local-storage";

function App() {
  //Clear all the saved stuff
  ls.set("itemCount", 0);
  return (
    <div id="App">
      <NavDrawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
