import "./style.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { ElementLoader } from "../Loader";
import axios from "axios";
// import Orders from "./Orders";
// import Reservations from "./Reservations";
const Orders = lazy(() => import("./Orders"));
const Reservations = lazy(() => import("./Reservations"));
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const url = import.meta.env.VITE_MAIN_URL;

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData.name.split(" ")[0];

  // getting order
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

  const { auth } = useAuth();

  useEffect(() => {
    axios
      .get(`${url}user/order`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setOrders((prev) => response.data.prevOrders);
        setReservations((prev) => response.data.prevReservations);
      })
      .catch((err) => console.log(err));
  }, []);

  let location = useLocation();
  useEffect(() => {
    if (location?.state) {
      toast.success(location.state?.toastMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "Some Id",
      });
    }
  }, []);
  return (
    <article className="page-padding">
      <h1 className="form-title">Welcome Back, {firstName}.</h1>
      <hr />
      <section className="account-details">
        <h2>Account Details</h2>
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
      <hr />
      <h2>My Orders</h2>
      <Suspense fallback={<ElementLoader />}>
        <Orders orders={orders} />
      </Suspense>
      <hr />

      <h2>My Reservations</h2>
      <Suspense fallback={<ElementLoader />}>
        <Reservations reservations={reservations} />
      </Suspense>
    </article>
  );
}
