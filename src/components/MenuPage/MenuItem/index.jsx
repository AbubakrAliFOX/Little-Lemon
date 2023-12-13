import AddToBasket from "../AddToBasket";
import { Suspense, lazy } from "react";
import { ImgLoader } from "../../Loader";
const DishImage = lazy(() => import('./DishImage'));
import './style.css';

export default function MenuItem({ imgUrl, name, price }) {
  return (
    <figure className="card">
      <Suspense fallback={<ImgLoader />}>
        <DishImage imgUrl={imgUrl} />
      </Suspense>
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
