import "./style.css";
import { Suspense, lazy } from "react";
import { ImgLoader } from "../../../Loader";
import { dishes } from "../../../../utils/dishedDB";
// import ItemImg from "./ItemImg";
const ItemImg = lazy(() => import("./ItemImg"));

export default function Item({ name, qty, price }) {
  const imageUrl = dishes.filter((el) => el.name === name)[0].imageUrl;
  return (
    <div className="item">
      <Suspense fallback={<ImgLoader />}>
        <ItemImg imageUrl={imageUrl} />
      </Suspense>
      <h3 className="item-name">{name}</h3>
      <p className="item-amount">{qty} pcs</p>
    </div>
  );
}
