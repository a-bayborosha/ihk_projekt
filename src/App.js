import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Map from "./components/Map/Map.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Map />
      <Sidebar />
    </div>
  );
};

export default App;
