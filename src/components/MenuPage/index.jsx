import "./style.css";
import "./MenuPage.css";
// import MenuItem from "./MenuItem";
import { dishes } from "../../utils/dishedDB";
import { Suspense, useState, lazy } from "react";
import { ElementLoader } from "../Loader";
const MenuItem = lazy(() => import("./MenuItem"));
import TagNavbar from "./TagNavbar";

export default function MenuPage() {
  const [tag, setTag] = useState("All");

  const filteredDishes = tag === "All" ? dishes : dishes.filter((el) => el.tag === tag);

  return (
    <article className="page-padding menu-page">
      
      <TagNavbar tag={tag} setTag={setTag} />
      <section className="menu-display">
        <Suspense fallback={<ElementLoader />}>
          {filteredDishes.map((dish) => (
            <MenuItem
              key={dish.name}
              imgUrl={dish.imageUrl}
              name={dish.name}
              price={dish.price}
            />
          ))}
        </Suspense>
      </section>
    </article>
  );
}
