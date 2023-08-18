import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./login.css"
import { useRef } from "react";


/**
 * @returns a login menu
 */
export default function Login() {
  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    } 
  }
  
  return (
    <div>
      <div className="login-buttons">
        <button ></button>
        <button onSubmit={signInWithEmail}>Log In</button>
      </div>
    </div>
  );
}
