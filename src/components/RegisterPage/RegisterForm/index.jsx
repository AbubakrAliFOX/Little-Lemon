import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function RegisterForm() {
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

  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  console.log(formik.values);

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action="http://localhost:3000/user/login"
    >
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
            <span>{formik.errors.name}</span>
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
            <span>{formik.errors.password}</span>
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
            <span>{formik.errors.email}</span>
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
            <span>{formik.errors.address}</span>
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
