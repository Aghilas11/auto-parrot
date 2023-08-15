import React, { useState } from "react";
import Navigation from "./Navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyez les données de connexion au serveur (à implémenter plus tard)
  };

  return (
    <div>
      <Navigation />
      <h2>Se Connecter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Adresse e-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
