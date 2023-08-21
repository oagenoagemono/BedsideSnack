import {RxCookie} from "react-icons/rx";
import './header.css';

export default function Header() {
  const primaryColor = getComputedStyle(document.querySelector("#root"))
                       .getPropertyValue('--primary-color');
  
  return (
    <header className="App-header">
      <h1><RxCookie color={primaryColor}/>Bedside Snack</h1>
    </header>
  );
}
