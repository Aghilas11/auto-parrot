import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import CarsList from "../components/CarsList";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <CarsList />
    </div>
  );
};

export default Home;
