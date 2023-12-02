import { useState } from "react";
import BookingForm from "./BookingForm";
import "./style.css";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  return (
    <article className="page-padding">
      <h1>This is the Booking Page Bro</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        formData={formData}
        setFormData={setFormData}
      />
    </article>
  );
}
