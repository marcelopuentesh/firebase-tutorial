import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { React, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();

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

      //Redireccionar el a su interfaz
      if (userType === "admin") {
        navigate.push("/admin");
      } else if (userType === "teacher") {
        navigate.push("/teacher");
      } else if (userType === "student") {
        navigate.push("/student");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-logo"></div>
      <form className="register-form" onSubmit={handleSignUp}>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            placeholder="User Type"
          >
            <option value="">-- Please Select --</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>
        <label>
          <input
            type="text
            "
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </label>
        <label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </label>
        <label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </label>
        <label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </label>
        <label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </label>
        <label>
          <input
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday"
          />
        </label>
        <label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="Nationality"
          ></input>
        </label>
        <label>
          <input
            type="text"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            placeholder="Document Type"
          />
        </label>
        <label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
          ></input>
        </label>
        <label>
          User Type:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
          >
            <option value="">-- Please Select --</option>
            <option value="admin">Male</option>
            <option value="teacher">Female</option>
            <option value="student">Other</option>
          </select>
        </label>
        <label>
          <input type="file"></input>
        </label>

        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};

export default Register;
