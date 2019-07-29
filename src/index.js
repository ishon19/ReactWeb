import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import ls from "local-storage";
import Homepage from "./components/HomePage";

function App() {
  //Clear all the saved stuff
  ls.set("itemCount", 0);
  return (
    <div id="App">
      <NavDrawer />
      {/* <Homepage /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
