import AddToBasket from "../AddToBasket";

export default function MenuItem({ imgUrl, name, price }) {
  return (
    <figure className="card">
      <img className="dish-image" src={imgUrl} alt="Dish Image" />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 className="dish-name">{name}</h4>
          <p className="dish-price">${price}</p>
        </div>
        {/* <p className="dish-description">{description}</p> */}
        <AddToBasket name={name} price={price} />
      </div>
    </figure>
  );
}
