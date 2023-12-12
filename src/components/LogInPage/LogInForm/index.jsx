import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function LogInForm() {
  const { setAuth } = useAuth();
  // For redirecting after successful sign up
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (redirect) {
      navigate("/profile", { state: { showToast: true } });
    }
  }, [redirect]);

  // For showing toaster when redirected from menu

  const location = useLocation();
  useEffect(() => {
    if (location?.state?.showToast) {
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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must have at least 6 charachters")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
      resetForm();
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        ...formik.values,
      });
      localStorage.clear();
      localStorage.setItem(
        "user",
        JSON.stringify({ ...response.data })
      );
      // For changing login / profile in navbar
      setAuth((prev) => ({ ...response.data }));
      setRedirect((prev) => true);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" action="/">
        <section className="register-form">
          <div className="form-field">
            <label className="form-control" htmlFor="email">
              Email
            </label>
            <input
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email && "red-border"
              }
              value={formik.values.email}
              name="email"
              id="email"
              type="text"
            />{" "}
            {formik.errors.email && formik.touched.email && (
              <span className="error-message">{formik.errors.email}</span>
            )}
          </div>
          <div className="form-field">
            <label className="form-control" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.password &&
                formik.touched.password &&
                "red-border"
              }
              value={formik.values.password}
              name="password"
              id="password"
              type="password"
            />{" "}
            {formik.errors.password && formik.touched.password && (
              <span className="error-message">{formik.errors.password}</span>
            )}
          </div>
        </section>
        <button
          className="submit-button submit-form-button"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Log In
        </button>
      </form>
    </>
  );
}
