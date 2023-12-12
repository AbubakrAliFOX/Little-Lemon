import { useEffect, useState } from "react";
import axios from "axios";
import Order from "./Order";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Reservations from "./Reservations";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData.name.split(" ")[0];

  // getting order
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

  const {auth} = useAuth();
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/order", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setOrders(prev => response.data.prevOrders);
        setReservations(prev => response.data.prevReservations);
      })
      .catch((err) => console.log(err));
  }, []);

  let location = useLocation();
  useEffect(() => {
    if (location?.state?.showToast) {
      toast.success("Successfully Signed Up", {
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
        {orders.map(el => <Order totalPrice={el.totalPrice} orderDate={el.orderDate} orderTime={el.orderTime} items={el.items} />)}       
      </section>
      <h2>My Reservations</h2>
      <section className="orders">
        <Reservations reservations={reservations}/>
      </section>
    </article>
  );
}
