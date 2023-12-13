import "./style.css";
import ReservationRow from "./ReservationRow";
import { Suspense } from "react";
import { ElementLoader } from "../../Loader";

export default function Reservations({ reservations }) {
  return (
    <section className="orders">
      <Suspense fallback={<ElementLoader />}>
        {reservations.length > 0 ? (
          <table>
            <thead>
              <tr>
                <td className="numbers-td"></td>
                <td>Date</td>
                <td>Time</td>
                <td>Occasion</td>
                <td>Guests</td>
              </tr>
            </thead>
            <tbody>
              {reservations.map((el, idx) => (
                <ReservationRow
                  key={idx + 10}
                  data={el.reservation}
                  idx={idx}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="no-orders">No reservations yet!</h2>
        )}
      </Suspense>
    </section>
  );
}
