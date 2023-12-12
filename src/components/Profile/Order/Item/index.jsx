import "./style.css";
import { dishes } from "../../../../utils/dishedDB";

export default function Item({name, qty, price}) {
  const imageUrl = dishes.filter((el) => el.name === name)[0].imageUrl;
  return (
    <div className="item">
      <img
        className="item-img"
        src={imageUrl}
        alt="Order Image"
      />
      <h3 className="item-name">{name}</h3>
      <p className="item-amount">{qty} pcs</p>
    </div>
  );
}
