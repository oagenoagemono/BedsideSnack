import './form.css';
import {useRef, useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

export default function Form() {
  const message = useRef("");
  const postRef = collection(db, "posts");
  const [charCount, setCharCount] = useState(0);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // const auth.
    try {
      await addDoc(postRef, {
      message: message.current.value,
    })} catch (err) {
      console.error(err);
    }
    message.current.value = "";
  };
    
  return (
    <form onSubmit={onSubmit} className='form-container'>
      <textarea 
        ref={message} 
        maxLength={140} 
        required
        spellCheck
        placeholder='Hide your things here' 
        className='form-message'
        onChange={() => {
          setCharCount(message.current.value.trim().length)}}/>
      <div className='form-other'>
        <p>{140 - charCount}</p>
        <input 
          type="submit" 
          className='form-button' 
          disabled={charCount === 0}/>
      </div>
    </form>
  );
}
