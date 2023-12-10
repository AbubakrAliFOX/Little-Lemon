import { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../Basket";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = (e) => {
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

  // useEffect(() => {
  //   if (redirect) {
  //     navigate("/", { state: { showToast: true, toastMsg: "Goodbye" } });
  //     setIsLogged((prev) => false);
  //     setAuth((prev) => null);
  //     localStorage.clear();
  //   }
  // }, [redirect]);

  const logout = () => {
    setRedirect((prev) => true);
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
            <Link onClick={handleClick} to="/order">
              Order Online
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
              <Basket />
              <ul className="dropdown-container dropdown-basket">
                <div className="basket-item">
                  <div className="basket-item-name">Shawarma</div>
                  <div className="basket-increament">
                    <svg
                      viewBox="0 -12 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>minus</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-414.000000, -1049.000000)"
                            fill="#495e57"
                          >
                            <path
                              d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049"
                              id="minus"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>5</span>
                    <svg
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>plus</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-362.000000, -1037.000000)"
                            fill="#495e57"
                          >
                            <path
                              d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                              id="plus"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="basket-remove">
                    <svg
                      viewBox="0 0 24 24"
                      width="30px"
                      height="30px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ff0000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M20.5001 6H3.5"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M9.5 11L10 16"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M14.5 11L14 16"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                          stroke="#d10000"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="basket-item">
                  <div className="basket-item-name">Shawarma</div>
                  <div className="basket-increament">
                    <svg
                      viewBox="0 -12 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>minus</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-414.000000, -1049.000000)"
                            fill="#495e57"
                          >
                            <path
                              d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049"
                              id="minus"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>5</span>
                    <svg
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>plus</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-362.000000, -1037.000000)"
                            fill="#495e57"
                          >
                            <path
                              d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                              id="plus"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="basket-remove">
                    <svg
                      viewBox="0 0 24 24"
                      width="30px"
                      height="30px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ff0000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M20.5001 6H3.5"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M9.5 11L10 16"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M14.5 11L14 16"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                          stroke="#d10000"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                          stroke="#d10000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
