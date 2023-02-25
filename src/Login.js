import React, { useState } from "react";
import firebaseApp from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./assets/iconothalan.png";
import "./Login.css";
import { Button } from "@mui/material";
import { db } from "./store";
import { collection,  getDocs, query, where } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        const userType = collection(db, "user");
        const q=  query(userType,where('email','==',email));
        const result = await getDocs(q);
        result.forEach((item)=>{
          console.log(item.data());
        })
      }
 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-container">
      <div className="logo-login"></div>
      <form className="login-form" onSubmit={handleLogin}>
        <a></a>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to="/resetpassword"
          style={{ textDecoration: "none", color: "black" }}
        >
          Forgot Password?
        </Link>
        <Button
          type="submit"
        >
          {" "}
          Sign In{" "}
        </Button>

        <Button type="submit"> Login </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
