import React from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./Contexts/StateProvider";
import "./css/app.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
