import "./style.css";

import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { Loader } from "../../Loader";

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



  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 charachters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
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
        {({ isSubmitting, isValid, dirty, errors, touched }) => (
          <Form>
            <section className="register-form">
              <div className="form-field">
                <label className="form-control" htmlFor="email">
                  Email
                </label>
                <Field
                  placeholder="example@gmail.com"
                  className={errors.email && touched.email && "red-border"}
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
                    errors.password && touched.password && "red-border"
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
              disabled={!(isValid && dirty) || isSubmitting}
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
