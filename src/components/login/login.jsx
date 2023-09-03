import { auth } from "../../config/firebase";
import { useEffect, useRef, useState } from "react";
import "./login.css"
import { useAuthState, useSendSignInLinkToEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";


/**
 * @returns a login menu
 */
export default function Login() {
  const [user] = useAuthState(auth);
  const email = useRef("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [sendSignInLinkToEmail, sending, error] = useSendSignInLinkToEmail(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      // Is the link valid?
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email");
        }
        console.log(email);
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn")
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, []);
  
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
    const success = await sendSignInLinkToEmail(email, emailActionCodeSettings);
    if (success) {
      setMessage("Email sent!");
    } else {
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
          <button >Send Email Link</button>
          <p >{message}</p>
        </form>
        <button >Log in with Google </button>
      </div>
      <dialog open={sending}>
        Sending...
      </dialog>
    </div>
  );
}
