import "./style.css";
import MenuItem from "./MenuItem";
import { dishes } from "../../utils/dishedDB";
import { useState } from "react";

export default function MenuPage() {
//   const displayedDishes = dishes;
  const [tag, setTag] = useState("All");
  const handleClick = (e) => {
    console.dir(e.target);
  };

  return (
    <article className="page-padding menu-page">
      <nav>
        <ul>
          <li id="All" onClick={handleClick}>
            <a href="#">All</a>
          </li>
          <li id="Specialties" onClick={handleClick}>
            <a href="#">Specialties</a>
          </li>
          <li id="Salads" onClick={handleClick}>
            <a href="#">Salads</a>
          </li>
          <li id="Seafood" onClick={handleClick}>
            <a href="#">Seafood</a>
          </li>
          <li id="Desserts" onClick={handleClick}>
            <a href="#">Desserts</a>
          </li>
          <li id="Soups" onClick={handleClick}>
            <a href="#">Soups</a>
          </li>
          <li id="Beverages" onClick={handleClick}>
            <a href="#">Beverages</a>
          </li>
        </ul>
      </nav>
      <section className="menu-display">
        {dishes.map((dish) => (
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
