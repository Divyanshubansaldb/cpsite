import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <main className="container"></main>
    </React.Fragment>
  );
}

export default App;
