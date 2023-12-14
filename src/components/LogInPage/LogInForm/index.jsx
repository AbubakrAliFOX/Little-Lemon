import "./style.css";

import { useEffect, useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { Loader } from "../../Loader";

// require('dotenv').config();
const url = import.meta.env.VITE_MAIN_URL;

export default function LogInForm() {
  const { setAuth } = useAuth();
  // For redirecting after successful sign up
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (redirect) {
      navigate("/profile", {
        state: { showToast: true, toastMsg: "Successfully Loggen In" },
      });
    }
  }, [redirect]);

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

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 charachters")
      .required("Password is required"),
  });
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
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      console.log(setSubmitting);
    },
  });

  const handleSubmit = async (values, { setSubmitting}) => {
    try {
      const response = await axios.post(`${url}user/login`, {
        ...values,
      });
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify({ ...response.data }));
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <section className="register-form">
              <div className="form-field">
                <label className="form-control" htmlFor="email">
                  Email
                </label>
                <Field
                  placeholder="example@gmail.com"
                  className={
                    formik.errors.email && formik.touched.email && "red-border"
                  }
                  name="email"
                  id="email"
                  type="text"
                />{" "}
                <ErrorMessage
                  name="email"
                  component="span"
                  className="error-message"
                />
              </div>
              <div className="form-field">
                <label className="form-control" htmlFor="password">
                  Password
                </label>
                <Field
                  placeholder="Your password"
                  className={
                    formik.errors.password &&
                    formik.touched.password &&
                    "red-border"
                  }
                  name="password"
                  id="password"
                  type="password"
                />{" "}
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error-message"
                />
              </div>
            </section>
            <button
              className="submit-form-button"
              type="submit"
              disabled={
                !(isValid && dirty) || isSubmitting
              }
            >
              Log In
            </button>
            {isSubmitting && <Loader />}
          </Form>
        )}
      </Formik>
    </>
  );
}
