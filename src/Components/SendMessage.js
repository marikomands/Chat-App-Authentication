import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");
  console.log("🚀 ~ SendMessage ~ message:", message);
  const [error, setError] = useState(null);
  console.log("🚀 ~ SendMessage ~ error:", error);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!auth) {
      setError("Authentification Error");
      return;
    }

    try {
      const { photoURL, uid } = auth.currentUser;

      await addDoc(collection(db, "messages"), {
        text: message,
        photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
      setMessage("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "300",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Please input your message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
