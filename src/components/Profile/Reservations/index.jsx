import "./style.css";
import ReservationRow from "./ReservationRow";

export default function Reservations({reservations}) {
  return (
    <table>
      <thead>
        <tr>
          <td className="numbers-td"></td>
          <td>Date</td>
          <td>Time</td>
          <td>Occasion</td>
          <td >Guests</td>
        </tr>
      </thead>
      <tbody>
      {reservations.map((el, idx) => <ReservationRow data={el.reservation} idx={idx} />)}
      </tbody>
    </table>
  );
}
