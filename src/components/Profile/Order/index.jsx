import "./style.css";
import Item from "./Item";

export default function Order({ totalPrice, orderDate, orderTime, items }) {
  const userAddress = JSON.parse(localStorage.getItem('user')).address;
  return (
    <div className="order-box">
      <div className="order-header">
        <div className="order-date">
          <p>
            <b>Order Placed</b>
          </p>
          <p>
            {new Date(orderDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="order-cost">
          <p>
            <b>Total</b>
          </p>
          <p>USD {totalPrice}</p>
        </div>
        <div className="order-address">
          <p>
            <b>Deliver To</b>
          </p>
          <p>{userAddress}</p>
        </div>
      </div>
      <div className="order-body">
        {items.map(el => <Item name={el.name} qty={el.qty} price={el.price} />)}
      </div>
    </div>
  );
}
