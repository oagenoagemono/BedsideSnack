import { useRouteError } from "react-router-dom";
import "./errorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className='error-container'>
      <h1>Empty Can!?</h1>
      <p>An unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
