import { useState, useContext } from "react";
import AuthContext from "../../AuthProvider";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

export default function RegisterForm() {
  const { setAuth } = useContext(AuthContext);
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
    onSubmit: (values) => {
      submit(values);
      onOpen(response.type, response.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/user/register", {
          ...formik.values,
        });
        console.log(response.data);
        const accessToken = response?.data?.token;
        setAuth(prev => ({...response.data, accessToken}));
    } catch (error) {
        console.log(error.response.data.message);
        // if (!error.response) {
        //     let errMsg = 'No server response';
        // } else if (error.response?.status === 400) {
        //     let errMsg = 'Missing Username or Password';
        // } else if (error.response?.status === 401) {
        //     let errMsg = 'Unauthorized';
        // } else {
        //     let errMsg = 'Login Failed!'
        // }
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" action="/">
      <section className="register-form">
        <div className="form-field">
          <label className="form-control" htmlFor="name">
            Name
          </label>
          <input
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.name && formik.touched.name && "red-border"
            }
            value={formik.values.name}
            name="name"
            id="name"
            type="text"
          />{" "}
          {formik.errors.name && formik.touched.name && (
            <span className="error-message">{formik.errors.name}</span>
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
              formik.errors.password && formik.touched.password && "red-border"
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
          <label className="form-control" htmlFor="address">
            Address
          </label>
          <input
            placeholder="Your address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.address && formik.touched.address && "red-border"
            }
            value={formik.values.address}
            name="address"
            id="address"
            type="text"
          />{" "}
          {formik.errors.address && formik.touched.address && (
            <span className="error-message">{formik.errors.address}</span>
          )}
        </div>
      </section>
      <button
        className="submit-button"
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Create Accout
      </button>
    </form>
  );
}
