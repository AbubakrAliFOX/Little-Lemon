import "./style.css";
import Item from './Item';

export default function Order({ data }) {
  return (
    <div className="order-box">
      <div className="order-header">
        <div className="order-date">
          <p><b>Order Placed</b></p>
          <p>9 September 2023</p>
        </div>
        <div className="order-cost">
          <p><b>Total</b></p>
          <p>USD 3.23</p>
        </div>
        <div className="order-address">
          <p><b>Deliver To</b></p>
          <p>My address, address, adress</p>
        </div>
      </div>
      <div className="order-body">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
