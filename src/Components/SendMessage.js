import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const { photoURL, uid } = auth.currentUser;

    addDoc(collection(db, "messages"), {
      text: message,
      photoURL,
      uid,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div>
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
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
