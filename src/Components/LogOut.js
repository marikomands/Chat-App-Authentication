import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

function LogOut() {
  const [user, loading, error] = useAuthState(auth);

  const userName = () => {
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>There is something wrong with signing in</div>;
    }

    if (user) {
      if (user.displayName) {
        return (
          <div
            style={{
              fontWeight: "lighter",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {user.displayName}
          </div>
        );
      } else {
        return <div>please set up your display name.</div>;
      }
    } else {
      return <div>Please sign in.</div>;
    }
  };

  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => {
          signOut(auth);
        }}
      >
        Log Out
      </Button>
      <h3>{userName()}</h3>
      <CallIcon />
    </div>
  );
}

export default LogOut;
