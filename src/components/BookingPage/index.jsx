import BookingForm from "./BookingForm";
import './style.css'
export default function BookingPage() {
  

  return (
    <article className="page-padding">
      <h1 id="reserve-title">Reserve a table in less than a minute!</h1>
      <BookingForm
      />
    </article>
  );
}
