import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import LogOut from "./LogOut";
import { db } from "../firebase.js";
import {
  query,
  collection,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);
  console.log("🚀 ~ Chat ~ messages:", messages);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("🚀 ~ unsubscribe ~ snapshot:", snapshot);
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    // Cleanup function
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //      collection(db, "messages"),
  //     orderBy("createdAt"),
  //     limit(50),
  //     onSnapshot((snapshot) => {
  //       setMessages(snapshot.docs.map((doc) => doc.data()));
  //     });
  // }, []);

  return (
    <div>
      <LogOut />
      <div className="messages">
        {messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div key={id}>
            <div>
              <img src={photoURL} alt="" />
              <p>{text}</p>
              <p>{createdAt?.toDate().toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
