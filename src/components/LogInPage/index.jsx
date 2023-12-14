import "./Login.css";

import { useEffect } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LogInForm from "./LogInForm";

export default function LogInPage() {
  // For showing toaster when redirected from menu
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      toast.error(location.state.toastMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "Location-toast",
      });
    }

  }, []);
  
  return (
    <article className="page-padding">
      <section className="register-box">
        <h1 className="form-title">Log In</h1>
        <LogInForm />
        <span id="new-account">
          New to Little Lemon? <Link to={"/signup"}>Sign Up Now</Link>
        </span>
      </section>
    </article>
  );
}
