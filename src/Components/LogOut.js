import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

function LogOut() {
  return (
    <div>
      <Button
        onClick={() => {
          signOut(auth);
        }}
      >
        Log Out
      </Button>
    </div>
  );
}

export default LogOut;
