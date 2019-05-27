import React from "react";
import ReactDOM from "react-dom";
import "./components/Header";
import "./styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header textToDisplay="HELLO" />
      <h1>Hello CodeSandbox</h1>
      <h2>Hello World, how are you</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
