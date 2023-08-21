import './form.css';
import {useRef, useState} from 'react';

export default function Form() {
  const message = useRef("");
  const [charCount, setCharCount] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message.current.value);
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
