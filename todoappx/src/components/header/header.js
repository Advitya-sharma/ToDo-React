import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>ToDo List</h1>
      <Link to="/">Home</Link> | <Link to="/about">about</Link>
    </div>
  );
}

export default Header;
