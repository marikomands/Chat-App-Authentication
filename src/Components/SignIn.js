import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [accounts, setAccounts] = useState([]);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleCheckAccounts = async () => {
  //   const methods = await fetchSignInMethodsForEmail(auth, email);
  //   setAccounts(methods);
  // };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Button style={{ fontSize: "20px" }} onClick={signInWithGoogle}>
        Sign In with Google
      </Button>
    </div>
  );
}

export default SignIn;
