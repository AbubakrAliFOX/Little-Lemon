import AddToBasket from "../AddToBasket";

export default function MenuItem() {
  return (
    <figure className="card">
      <img className="dish-image" src="/greek salad.jpg" alt="Dish Image" />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 className="dish-name">Greek Salad</h4>
          <p className="dish-price">$15.99</p>
        </div>
        {/* <p className="dish-description">{description}</p> */}
        <AddToBasket />
      </div>
    </figure>
  );
}
