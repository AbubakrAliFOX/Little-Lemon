import "./style.css";
import MenuItem from "./MenuItem";
import { dishes } from "../../utils/dishedDB";
import { useState } from "react";

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
            className={tag === "All" && "selected-li"}
            id="All"
            onClick={handleClick}
          >
            <a href="#">All</a>
          </li>
          <li
            className={tag === "Specialties" && "selected-li"}
            id="Specialties"
            onClick={handleClick}
          >
            <a href="#">Specialties</a>
          </li>
          <li
            className={tag === "Salads" && "selected-li"}
            id="Salads"
            onClick={handleClick}
          >
            <a href="#">Salads</a>
          </li>
          <li
            className={tag === "Seafood" && "selected-li"}
            id="Seafood"
            onClick={handleClick}
          >
            <a href="#">Seafood</a>
          </li>
          <li
            className={tag === "Desserts" && "selected-li"}
            id="Desserts"
            onClick={handleClick}
          >
            <a href="#">Desserts</a>
          </li>
          <li
            className={tag === "Soups" && "selected-li"}
            id="Soups"
            onClick={handleClick}
          >
            <a href="#">Soups</a>
          </li>
          <li
            className={tag === "Beverages" && "selected-li"}
            id="Beverages"
            onClick={handleClick}
          >
            <a href="#">Beverages</a>
          </li>
        </ul>
      </nav>
      <section className="menu-display">
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
          .map((dish) => (
            <MenuItem
              key={dish.name}
              imgUrl={dish.imageUrl}
              name={dish.name}
              price={dish.price}
            />
          ))}
      </section>
    </article>
  );
}
