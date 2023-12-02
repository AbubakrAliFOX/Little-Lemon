import Select from "./Select";
import { useState } from "react";
import "./style.css";

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState({
    Date: "",
    Time: "",
    Guests: "",
    Occasion: "",
  });

  return (
    <form className="reservation-form">
      <div className="form-field">
        <Select
          type={"Date"}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          formData={formData}
          setFormData={setFormData}
        />
        <Select
          type={"Time"}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          formData={formData}
          setFormData={setFormData}
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
    </form>
  );
}
