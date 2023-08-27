import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Parrot = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Parrot</h1>
      <NavLink to="/Home">
        <button type="submit">Mode client</button>
      </NavLink>
    </div>
  );
};

export default Parrot;
