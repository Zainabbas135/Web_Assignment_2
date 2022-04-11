import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Dash from "./Dash";

function Base() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Dash />
        </div>
      </div>
    </>
  );
}

export default Base;
