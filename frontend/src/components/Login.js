import React, { useState } from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyez les données de connexion au serveur (à implémenter plus tard)
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <h2>Se Connecter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          pseudo
          <input
            type="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <NavLink to="/parrot">
          <button type="submit">Se connecter</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
