import "./style.css";

export default function Order({ data }) {
  return (
    <div className="order-box">
      <div className="order-header">
        <div className="order-cost">
          <p><b>Total</b></p>
          <p>USD 3.23</p>
        </div>
        <div className="order-address">
          <p><b>Ship To</b></p>
          <p>My address, address, adress</p>
        </div>
      </div>
      <div className="order-body">
        <div className="item-img">
          <img src="" alt="Order Image" />
        </div>
        <h3 className="item-name">Stuffed Vine Leaves</h3>
        <p className="item-amount">4</p>
        {/* /////////// */}
        <div className="item-img">
          <img src="" alt="Order Image" />
        </div>
        <h3 className="item-name">Shawarma</h3>
        <p className="item-amount">4</p>
      </div>
    </div>
  );
}
