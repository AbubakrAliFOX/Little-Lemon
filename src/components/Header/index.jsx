import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../Basket";
import BasketItem from "../BasketItem";
import useAuth from "../hooks/useAuth";
import useBasket from "../hooks/useBasket";
import { toast } from "react-toastify";

export default function Header() {
  // localStorage.setItem('basket', JSON.stringify({Basket: '123'}));
  const [isOpen, setIsOpen] = useState(true);
  const { basket, setBasket } = useBasket();
  const handleClick = (e) => {
    // if(e.target.id === 'plus' || e.target.id === 'minus' || e.target.id === 'remove') {
    //   if (e.target.id === 'plus') {
    //     setBasket(prev)
    //   }
    // }
    setIsOpen((prev) => !prev);
  };

  // For displaying profile in navbar if user is authenticated
  const { auth, setAuth } = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    console.log("from header", auth);

    if (auth) {
      setIsLogged((prev) => true);
    }
  }, [auth]);

  // for logging out
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/", { state: { showToast: true, toastMsg: "Goodbye" } });
      setIsLogged((prev) => false);
      setAuth((prev) => null);
      localStorage.removeItem("user");
    }
  }, [redirect]);

  // for redirecting after ordering
  const [basketRedirect, setBasketRedirect] = useState(false);

  useEffect(() => {
    if (basketRedirect) {
      navigate("/profile");
      setBasketRedirect((prev) => false)
    }
  }, [basketRedirect]);

  const logout = () => {
    setRedirect((prev) => true);
  };

  // For Submitting order
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/order",
        basket,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setBasket((prev) => []);
      toast.success("Success! Your order is in. Our chefs are on it", {
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
      setBasketRedirect((prev) => true);
    } catch (err) {
      console.log(err);
      toast.error("An error occured", {
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
  };

  return (
    <header className="page-padding">
      <section id="logo-and-burger">
        <svg
          onClick={handleClick}
          className="burger"
          width="35"
          height="25"
          viewBox="0 0 35 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z"
            fill="black"
          />
        </svg>

        <img className="logo" src="/Logo.svg" alt="Logo" />
      </section>
      <nav className={isOpen && "hidden"} id="main-page-nav">
        <ul>
          <li>
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/reservations">
              Reservations
            </Link>
          </li>
          <li className="dropdown-content">
            <Link to={isLogged ? null : "/login"}>
              {isLogged ? "Profile" : "Login"}
            </Link>
            {isLogged && (
              <ul className="dropdown-container">
                <Link to="/profile">My Account</Link>
                <Link onClick={logout}>Logout</Link>
              </ul>
            )}
          </li>
          {isLogged && (
            <li className="dropdown-content">
              <Basket basket={basket} />
              <ul className="dropdown-container dropdown-basket">
                {basket?.length > 0 ? (
                  basket.map((el) => (
                    <BasketItem
                      setBasket={setBasket}
                      price={el.price}
                      name={el.name}
                      qty={el.qty}
                    />
                  ))
                ) : (
                  <li>No items in the basket</li>
                )}
                {basket?.length > 0 ? (
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="orderItems" value={basket} />
                    <button className="order-button" type="submit">
                      Order Now
                    </button>
                  </form>
                ) : null}
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
