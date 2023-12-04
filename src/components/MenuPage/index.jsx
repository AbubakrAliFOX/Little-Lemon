import "./style.css";
import MenuItem from './MenuItem';

export default function MenuPage() {
  return (
    <article className="page-padding menu-page">
      <nav>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Specialties</a>
          </li>
          <li>
            <a href="#">Salads</a>
          </li>
          <li>
            <a href="#">Seafood</a>
          </li>
          <li>
            <a href="#">Desserts</a>
          </li>
          <li>
            <a href="#">Soups</a>
          </li>
          <li>
            <a href="#">Beverages</a>
          </li>
        </ul>
      </nav>
      <section className="menu-display">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </section>
    </article>
  );
}
