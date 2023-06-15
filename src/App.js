import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import SignIn from "./Components/SignIn";
import Chat from "./Components/Chat";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="App">{user ? <Chat /> : <SignIn />}</div>
    </div>
  );
}

export default App;
