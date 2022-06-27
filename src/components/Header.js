import React from "react";
import wapplogo from "../assets/wapplogo.PNG";

const Header = () => {
  return (
    <div className="border-b-2 border-grey pb-2">
      <img className="h-28 mx-auto" src={wapplogo} alt="logo wapp"></img>
    </div>
  );
};

export default Header;
