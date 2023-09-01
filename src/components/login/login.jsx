import { auth } from "../../config/firebase";
import { useEffect, useRef, useState } from "react";
import { redirect } from "react-router-dom";
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";

import "./login.css"


/**
 * @returns a login menu
 */
export default function Login({user}) {
  const email = useRef("");
  const [message, setMessage] = useState("");
  
  const emailActionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/login',
    // This must be true.
    handleCodeInApp: true,
  };
  
  const signInWithEmail = async (email) => {
    // save the email so that we can verify when the user comes back
    window.localStorage.setItem('emailForSignIn', email);
    try {
      await sendSignInLinkToEmail(auth, email, emailActionCodeSettings);
      console.log(auth.currentUser);
      setMessage("Email sent!");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    } 
  }
  
  return (
    <div className="container">
      <div className="empty" >
        <p>Begin your journey</p>
      </div>
      <div className="login-buttons">
        <form className="email" onSubmit={(e) => {
            e.preventDefault();
            signInWithEmail(email.current.value);
            }}>
          <label>Log in with email</label>
          <div />
          <input 
            ref={email} 
            type="email" 
            placeholder="Enter email"
            required/>
          <button >Log In</button>
          <p >{message}</p>
        </form>
        <button >Log in with Google </button>
      </div>
    </div>
  );
}
