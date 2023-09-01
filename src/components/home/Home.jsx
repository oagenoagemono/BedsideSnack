import {React} from 'react';
import { Header, Drop, Form } from '../../components';
import "./home.css"
import { useLoaderData } from 'react-router-dom';


export default function Home() {
  const posts = useLoaderData();
  
  
  return (
    <>
      <Header text="Home"/>
      <Form/>
      {posts.map((item) => 
        <Drop key={item.id} detail={item} />)}
    </>);
}