import LogInForm from "./LogInForm";
import { Link } from "react-router-dom";
import './Login.css';

export default function LogInPage() {
  return (
    <article className="page-padding">
      <section className="register-box">
        <h1 className="form-title">Log In</h1>
        <LogInForm />
        <span id="new-account">New to Little Lemon? <Link to={'/signup'}>Sign Up Now</Link></span>
      </section>
    </article>
  );
}
