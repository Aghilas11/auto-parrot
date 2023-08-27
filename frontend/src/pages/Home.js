import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import CarsList from "../components/CarsList";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>acceuil</h1>
      <CarsList />
    </div>
  );
};

export default Home;
