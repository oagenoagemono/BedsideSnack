/**
 * TODO:
 * Make the general contents
 * Generate an interface to make a post request
 * Use the post request to add the data to the firebase database
 * display the contents of the database to the page in chronological order 
 */

import {React} from 'react';
import {Drop, Header, Form, Nav, Trend} from './components';
import './App.css';

export default function App() {
  const drops = [{
    id: "Something",
    username: "Somebody",
    time: Date.now(),
    message: "Hello!",
    reactions: {
      replies: [],
      repostNum: 0,
      liked: true,
      likeNum: 0,
    }
  }];
  
  return (
    <>
      <div className='App-container'>
        <Nav />
        <main>
          <Form/>
          {drops.map(item => <Drop key={item.id} detail={item} />)}
        </main>
        <Trend />
      </div>
      <Header/>
    </>
  );
}
