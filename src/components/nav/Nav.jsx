import { RxHome } from "react-icons/rx";

import {convertRemToPixels, useWindowDimensions} from "../../utils/index";
import './nav.css';

/**
 * Generates a navigation bar.
 * It has two sizes: a nav bar of 14rem with text and 
 * a bar with 5rem without text
 * @returns a nav bar
 */
export default function Nav() {
  const { height, width } = useWindowDimensions();
  
  const expanded = width > convertRemToPixels(68);
  const classes = expanded ? "nav-container expanded" : "nav-container";

  return (
    <div className={classes}>
      <nav className={expanded ? "expanded" : ""}>
        <button ><RxHome /> {expanded ? <p>Home</p> : ""}</button>
        
      </nav>
    </div>
  );
}
