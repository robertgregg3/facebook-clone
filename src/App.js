import React from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Sidebar */}
        {/* Main Content - Feed */}
        {/* Right Sidebar - widgets */}
      </div>
    </div>
  );
}

export default App;
