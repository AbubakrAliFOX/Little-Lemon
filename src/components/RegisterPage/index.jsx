import RegisterForm from "./RegisterForm";
import "./Register.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <article className="page-padding">
      <section className="register-box">
      <h1 className="form-title">Create an account</h1>
      <RegisterForm />
      <span id="new-account">
        Already have an account? <Link to={"/login"}>Log In Now</Link>
      </span>
      </section>
    </article>
  );
}
