import "./style.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Select from "./Select";

const url = import.meta.env.VITE_MAIN_URL;

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState({
    Date: "",
    Time: "",
    Guests: "",
    Occasion: "",
  });
  const [timeDisplay, setTimeDisplay] = useState("");

  const { auth } = useAuth();

  // for redirecting after making reservation
  const [reservationRedirect, setReservationRedirect] = useState({
    forSuccess: false,
    forAuthFailiure: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (reservationRedirect.forSuccess == true) {
      navigate("/profile", {
        state: { toastMsg: "Reserved! Your table is set. See you soon" },
      });
      setReservationRedirect((prev) => ({ ...prev, forSuccess: false }));
    }

    if (reservationRedirect.forAuthFailiure == true) {
      navigate("/login", {
        state: { error: true, toastMsg: "You must log in first!" },
      });
      setReservationRedirect((prev) => ({
        ...prev,
        forAuthFailiure: false,
      }));
    }
  }, [reservationRedirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth) {
      setReservationRedirect((prev) => ({
        ...prev,
        forAuthFailiure: true,
      }));
    } else {
      try {
        axios.post(`${url}user/reservations`, formData, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setFormData((prev) => ({
          Date: "",
          Time: "",
          Guests: "",
          Occasion: "",
        }));
        setReservationRedirect((prev) => ({ ...prev, forSuccess: true }));
      } catch (error) {
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
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" action="/">
      <section className="reservation-form">
        <input type="hidden" name="Date" value={formData.Date} />
        <input type="hidden" name="Occasion" value={formData.Occasion} />
        <input type="hidden" name="Time" value={formData.Time} />
        <input type="hidden" name="Guests" value={formData.Guests} />
        <div className="form-field">
          <Select
            type={"Date"}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            formData={formData}
            setFormData={setFormData}
            timeDisplay={timeDisplay}
            setTimeDisplay={setTimeDisplay}
          />
          <Select
            type={"Time"}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            formData={formData}
            setFormData={setFormData}
            timeDisplay={timeDisplay}
            setTimeDisplay={setTimeDisplay}
          />
        </div>
        <div className="form-field">
          <Select
            type={"Guests"}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            formData={formData}
            setFormData={setFormData}
          />
          <Select
            type={"Occasion"}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <button
          className="submit-button"
          type="submit"
          disabled={
            !(
              formData.Date &&
              formData.Time &&
              formData.Guests &&
              formData.Occasion
            )
          }
        >
          Reserve a table
        </button>
      </section>
    </form>
  );
}
