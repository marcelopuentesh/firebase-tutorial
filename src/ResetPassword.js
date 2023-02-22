import { React, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./assets/iconothalan.png";
import { Button } from "@mui/material";

function ResetPassword() {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="resetpassword-container">
      <div className="resetpassword-logo"></div>
      <h5>Type your email below and check your inbox.</h5>
      <form
        className="resetpassword-form"
        onSubmit={(e) => {
          e.preventDefault();
          resetPassword(email);
        }}
      >
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
}

export default ResetPassword;
