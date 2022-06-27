import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Notfound = () => {
  return (
    <div className="m-2">
      <header>
        <Header />
      </header>

      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold my-6">404 Error</h2>
        <p>It seems that you have lost your way! This page does not exist.</p>
        <NavLink to="/MB-Test-todolist-frontend/">
          <button className="mt-6 bg-green p-2 rounded-full border-2 border-greenaction hover:bg-greenaction hover:border-green">
            Back to home page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
