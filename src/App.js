import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./screens/shared-components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
