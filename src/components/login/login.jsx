import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./login.css"
import { useRef } from "react";


/**
 * @returns a login menu
 */
export default function Login() {
  const signInWithEmail = async (e) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'https://www.example.com/finishSignUp?cartId=1234',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'example.page.link'
    };
    e.preventDefault();
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
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
