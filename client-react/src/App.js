import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import myroutes from "./myroutes.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav />

        <myroutes />




      </div>
    </BrowserRouter>
  );
}

export default App;