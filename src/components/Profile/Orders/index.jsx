import Order from "../Order";
import { Suspense } from "react";
import { ElementLoader } from "../../Loader";

export default function Orders({ orders }) {
  return (
    <section className="orders">
      <Suspense fallback={<ElementLoader />}>
        {orders.length > 0 ? (
          orders.map((el, idx) => (
            <Order
              key={idx + 1000}
              totalPrice={el.totalPrice}
              orderDate={el.orderDate}
              orderTime={el.orderTime}
              items={el.items}
            />
          ))
        ) : (
          <h2 className="no-orders">No orders yet!</h2>
        )}
      </Suspense>
    </section>
  );
}
