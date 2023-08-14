import './form.css';
import {useRef} from 'react';

export default function Form() {
  const message = useRef();
  
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
        placeholder='Hide your things here' className='form-message'/>
      <input type="submit" className='form-button'/>
    </form>
  );
}
