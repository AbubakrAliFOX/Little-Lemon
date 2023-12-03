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
    <form>
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
      </section>
      <button
        id="book-table"
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
    </form>
  );
}
