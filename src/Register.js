import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useHistory } from "react-router-dom";

import { React, useState } from "react";

export default function Register() {
  const SignUpForm = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");

    const history = useHistory();

    const handleSignUp = async (e) => {
      e.preventDefault();
      const auth = getAuth();
      try {
        //Crea un usuario con Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        //Añade al usuario en el db de Firestore
        const db = getFirestore();
        const userRef = collection(db, "users");
        await addDoc(userRef, {
          uid: userCredential.user.uid,
          userType: userType,
        });

        //Redireccionar a su interfaz
        if (userType === "admin") {
          history.push("/admin");
        } else if (userType === "teacher") {
          history.push("/teacher");
        } else if (userType === "student") {
          history.push("/student");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <form onSubmit={handleSignUp}>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">-- Please Select --</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  };
}
