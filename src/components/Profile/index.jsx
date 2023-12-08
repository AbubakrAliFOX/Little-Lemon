import { useEffect } from "react";
import Order from "./Order";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData.name.split(" ")[0];

  let location = useLocation();
  useEffect(() => {
    if (location.state.showToast) {
      toast.success("Successfully Signed Up", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: 'Some Id'
      });
    }
  }, []);

  return (
    <article className="page-padding">
      <h1 className="form-title">Welcome Back, {firstName}.</h1>
      <h2>Account Details</h2>
      <section className="account-details">
        <p>
          <b>Name:</b> {userData.name}
        </p>
        <p>
          <b>Email:</b> {userData.email}
        </p>
        <p>
          <b>Address:</b> {userData.address}
        </p>
      </section>
      <h2>My Orders</h2>
      <section className="orders">
        <Order />
      </section>
    </article>
  );
}
