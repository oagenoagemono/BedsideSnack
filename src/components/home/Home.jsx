import {React, useEffect, useReducer, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Header, Drop, Form } from '../../components';
import {db} from "../../config/firebase";
import "./home.css"
import { collection } from 'firebase/firestore';


export default function Home({user}) {
  const [posts, setPosts] = useState([]);
  
  const fetchPosts = () => {
    const ref = collection(db, "");
  };
  
  useEffect(() => {
    
  }, []);
  
  return (
    <>
      <Header text="Home"/>
      <Form/>
      {posts.map((item) => 
        <Drop key={item.id} detail={item} />)}
    </>);
}