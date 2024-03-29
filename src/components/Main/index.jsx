import "./style.css";
import "./Main.css";
import { useEffect, Suspense, lazy } from "react";
const Hero = lazy(() => import("./Hero"));
const Specials = lazy(() => import("./Specials"));
const Testimonials = lazy(() => import("./Testimonials"));
const Branch = lazy(() => import("./Branch"));
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { ElementLoader } from "../Loader";

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
        toastId: "Some Id",
      });
    }
  }, []);
  return (
    <>
      <Hero />
      <Suspense fallback={<ElementLoader />}>
        <Specials />
        <Testimonials />
        <Branch />
      </Suspense>
    </>
  );
}
