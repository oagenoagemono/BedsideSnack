import { RxCookie, RxHome, RxMagnifyingGlass, RxPencil2, RxPerson } from "react-icons/rx";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import {convertRemToPixels, useWindowDimensions} from "../../utils/index";
import {auth} from "../../config/firebase";
import './nav.css';

/**
 * Generates a navigation bar.
 * It has two sizes: a nav bar of 12rem with text and 
 * a bar with 6rem without text
 * @returns a nav bar
 */
export default function Nav({userData}) {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const logoutRef = useRef();
  const navigate = useNavigate();
  
  const expanded = width > convertRemToPixels(66);
  
  useEffect(() => {
    const handleExternalClick = (e) => {
      if (open && !logoutRef.current?.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mouseup", handleExternalClick);
    return () => {
      document.removeEventListener("mouseup", handleExternalClick);
    };
  });

  return (
    <div className={expanded ? "nav-container expanded" : "nav-container"}>
      <nav>
        <Link to={"/"} className="highlight-on-hover logo"><RxCookie/></Link>
        <div className="links">
          <Link to={"/"} className="highlight-on-hover link"><RxHome /> {expanded ? <p>Home</p> : ""}</Link>
          <Link to={"/search"} className="highlight-on-hover link"><RxMagnifyingGlass /> {expanded ? <p>Search</p> : ""}</Link>
          <Link to={"/profile"} className="highlight-on-hover link"><RxPerson /> {expanded ? <p>Profile</p> : ""}</Link>
          <Link to={"/"} className="highlight-on-hover link"><RxHome /> {expanded ? <p>Home</p> : ""}</Link>
        </div>
        <button className="nav-post-circle">
          <RxPencil2 /> {expanded? <p>Post</p> : ""}
        </button>
        <button 
          className="highlight-on-hover profile"
          onClick={() => {setOpen(true)}}>
          <div className="profile-pic"/>
          {expanded ? <p>{userData?.username}</p> : ""}
        </button>
        <div 
          className={open ? "logout" : "hidden"}
          ref={logoutRef}>
          <button onClick={()=>{
            try {
              signOut(auth);
              navigate("/login");
            } catch (err) {
              console.error(err);
            }
          }}>Log Out</button>
        </div>
      </nav>
    </div>
  );
}
