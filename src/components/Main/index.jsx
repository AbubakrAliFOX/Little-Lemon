import "./style.css";
import { useEffect } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Branch from "./Branch";
import {toast} from 'react-toastify'
import { useLocation } from "react-router-dom";

export default function Main() {
  let location = useLocation();
  useEffect(() => {
    if (location?.state?.showToast) {
      toast.success(location.state.toastMsg, {
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
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Branch />
    </>
  );
}
