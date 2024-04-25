import React, { useState } from 'react';
const Register = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const { username, email, password, confirmPassword } = formData;
  
    const handleChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = e => {
      e.preventDefault();
      if (password !== confirmPassword) {
        // Gérer les erreurs de mot de passe non correspondants ici
        console.log("Les mots de passe ne correspondent pas");
      } else {
        // Ajoutez ici la logique d'inscription avec votre backend
        console.log(formData); // Temporaire: Affiche les données dans la console
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;