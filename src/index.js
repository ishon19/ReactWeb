import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <Header textToDisplay="Shopify" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
