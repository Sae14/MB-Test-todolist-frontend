import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="flex justify-center my-3">
        <li className="px-3 pb-2 hover:font-bold">
          <NavLink
            to="/MB-Test-todolist-frontend/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Todo list
          </NavLink>
        </li>

        <li className="px-3 pb-2 hover:font-bold">
          <NavLink
            to="/MB-Test-todolist-frontend/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
