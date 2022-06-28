import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Development Investment Bank Captal Group</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/details">Details</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
