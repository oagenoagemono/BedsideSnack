/**
 * TODO:
 * Make the general contents
 * Generate an interface to make a post request
 * Use the post request to add the data to the firebase database
 * display the contents of the database to the page in chronological order 
 */

import {React, useEffect, useState} from 'react';
import { Redirect, redirect } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase";
import { ErrorPage, Header, Nav, Trend, Home, Login } from './components';
import './App.css';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';


function Container({userData}) {
  return (
    <div className='App-container'>
      <Nav userData={userData}/>
      <main>
        <Outlet />
      </main>
      <Trend />
    </div>
  );
}

export default function App() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();
  
  // Fetch the user's data when user changes
  useEffect(() => {
    const fetchUserData = async (email) => {
      const ref = doc(db, "users", email);
      const snapshot = await getDoc(ref);
      setUserData({...snapshot.data()});
    }
    
    if (user) {
      fetchUserData(user.email);
    }
  }, [user]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container userData={userData}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: async () => {
            if (!user)
              return redirect("/login");
            const postRef = collection(db, "posts");
            try {
              const data = await getDocs(postRef);
              return data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
            } catch (err){
              console.error(err);
            }
          }
        },
      ],
    }, {
      path: "/login",
      element: <Login/>,
      errorElement: <ErrorPage />,
      loader: () => {
        if (user)
          return redirect("/");
        // Is the link valid?
        if (isSignInWithEmailLink(auth, window.location.href)) {
          let email = localStorage.getItem("emailForSignIn");
          if (!email)
            email = window.prompt("Please provide your email");
          try {
            signInWithEmailLink(auth, email, window.location.href);
            // successfully logged in
            window.localStorage.removeItem("emailForSignIn")
            return redirect("/");
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      }
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}
