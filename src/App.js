/**
 * TODO:
 * Make the general contents
 * Generate an interface to make a post request
 * Use the post request to add the data to the firebase database
 * display the contents of the database to the page in chronological order 
 */

import {React} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import {ErrorPage, Drop, Header, Form, Nav, Trend} from './components';
import './App.css';

const drops = [{
  id: "Something",
  username: "Somebody",
  time: Date.now(),
  message: "Hello!",
  reactions: {
    replies: [],  //List of ids
    repostNum: 0,
    liked: false,
    likeNum: 0,
  }
}];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: (
          <>
            <Form/>
            {drops.map((item, idx) => 
              <Drop key={item.id} detail={item} />)}
          </>),
      }
    ],
  },
]);

function Main () {
  
  return (
    <div className='App-container'>
      <Nav />
      <main>
        <Header/>
        <Outlet />
      </main>
      <Trend />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
