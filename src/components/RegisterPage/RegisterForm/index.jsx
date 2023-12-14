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

const url = import.meta.env.VITE_MAIN_URL;

export default function RegisterForm() {
  const { setAuth } = useAuth();
  // For redirecting after successful sign up
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (redirect) {
      navigate("/profile", {
        state: { showToast: true, toastMsg: "Successfully Signed Up" },
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

  const signupSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Name is too Long!")
      .required("Name is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 charachters")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string()
      .min(8, "The address is too short")
      .max(50, "The address is too long")
      .required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name is too short")
        .max(50, "Name is too Long!")
        .required("Name is required"),
      password: Yup.string()
        .min(6, "Password must have at least 6 charachters")
        .required("Password is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      address: Yup.string()
        .min(8, "The address is too short")
        .max(50, "The address is too long")
        .required("Address is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
      resetForm();
    },
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${url}user/register`, {
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
          name: "",
          password: "",
          email: "",
          address: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        {({ isSubmitting, isValid, dirty, errors, touched }) => (
          <Form>
            <section className="register-form">
              <div className="form-field">
                <label className="form-control" htmlFor="name">
                  Name
                </label>
                <Field
                  placeholder="Your name"
                  className={errors.name && touched.name && "red-border"}
                  name="name"
                  id="name"
                  type="text"
                />
                <ErrorMessage
                  name="name"
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
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error-message"
                />
              </div>
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
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="error-message"
                />
              </div>
              <div className="form-field">
                <label className="form-control" htmlFor="address">
                  Address
                </label>
                <Field
                  placeholder="Your address"
                  className={errors.address && touched.address && "red-border"}
                  name="address"
                  id="address"
                  type="text"
                />
                <ErrorMessage
                  name="address"
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
              Create Account
            </button>
            {isSubmitting && <Loader />}
          </Form>
        )}
      </Formik>
    </>
  );
}
