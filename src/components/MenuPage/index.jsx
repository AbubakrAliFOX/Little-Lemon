import "./style.css";
// import MenuItem from "./MenuItem";
import { dishes } from "../../utils/dishedDB";
import { Suspense, useState, lazy } from "react";
import { ElementLoader } from "../Loader";
const MenuItem = lazy(() => import('./MenuItem'));

export default function MenuPage() {
  //   const displayedDishes = dishes;
  const [tag, setTag] = useState("All");
  const handleClick = (e) => {
    if (e.target.localName === "li") {
      setTag((prevTag) => (prevTag = e.target.id));
    } else if (e.target.localName === "a") {
      setTag((prevTag) => (prevTag = e.target.parentElement.id));
    }
  };

  return (
    <article className="page-padding menu-page">
      <nav>
        <ul>
          <li
            className={tag === "All" ? "selected-li" : undefined}
            id="All"
            onClick={handleClick}
          >
            <a>All</a>
          </li>
          <li
            className={tag === "Specialties" ? "selected-li" : undefined}
            id="Specialties"
            onClick={handleClick}
          >
            <a>Specialties</a>
          </li>
          <li
            className={tag === "Salads" ? "selected-li" : undefined}
            id="Salads"
            onClick={handleClick}
          >
            <a>Salads</a>
          </li>
          <li
            className={tag === "Seafood" ? "selected-li" : undefined}
            id="Seafood"
            onClick={handleClick}
          >
            <a>Seafood</a>
          </li>
          <li
            className={tag === "Desserts" ? "selected-li" : undefined}
            id="Desserts"
            onClick={handleClick}
          >
            <a>Desserts</a>
          </li>
          <li
            className={tag === "Soups" ? "selected-li" : undefined}
            id="Soups"
            onClick={handleClick}
          >
            <a>Soups</a>
          </li>
          <li
            className={tag === "Beverages" ? "selected-li" : undefined}
            id="Beverages"
            onClick={handleClick}
          >
            <a>Beverages</a>
          </li>
        </ul>
      </nav>

      <section className="menu-display">
      <Suspense fallback={<ElementLoader />}>

        {tag === "All" &&
          dishes.map((dish) => (
              <MenuItem
                key={dish.name}
                imgUrl={dish.imageUrl}
                name={dish.name}
                price={dish.price}
              />
          ))}
        {dishes
          .filter((el) => el.tag === tag)
          .map((dish, idx) => (
              <MenuItem
                key={idx}
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
