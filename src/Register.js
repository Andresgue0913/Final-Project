import React, { useState, useContext } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { LoginContext } from "./LoginContext";
import { Link } from "react-router-dom";

export default function Register() {
  const { setUserLogin, setUserName } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserName(email.substring(0, 4));
        setUserLogin(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login">
      <div className="form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}{" "}
        <button id="submit-btn" onClick={signIn}>
          Sign In
        </button>
        <p>
          Don't have an account? <Link to="/login">Sign Up</Link>
        </p>{" "}
      </div>
    </div>
  );
}
