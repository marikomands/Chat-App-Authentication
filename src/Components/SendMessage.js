import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
          <input
            placeholder="Please input your message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
