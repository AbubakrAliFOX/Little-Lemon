import Button from "../../Button";
import Card from "../Card";
import { Suspense } from "react";
import { ElementLoader } from "../../Loader";

export default function Specials() {
  return (
    <article className="page-padding">
      <Suspense fallback={ElementLoader}>
        <section className="specials-main-display">
          <h3 className="specials-title">Our specials this week!</h3>
          <Button linkPath={"/menu"} content="Order Online" />
        </section>
        <section className="cards-display">
          <Card
            name="Greek Salad"
            price="$8.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            imgSource="https://res.cloudinary.com/dewpck9nt/image/upload/v1701685218/LittleLemon/xn0q25hsug6ekzrp6s9v.webp"
          />
          <Card
            name="Shawarma"
            price="$9.99"
            description="Tender slices of marinated chicken, slow-cooked on a vertical rotisserie. Served in warm flatbread with fresh veggies."
            imgSource="https://res.cloudinary.com/dewpck9nt/image/upload/v1701674768/LittleLemon/b6gdurk0x4vc8rsqeuyn.webp"
          />
          <Card
            name="Kunafa"
            price="$8.49"
            description="A delectable Middle Eastern dessert delight. Layers of thin noodle-like pastry soaked in sweet syrup, filled with rich cheese or crunchy nuts."
            imgSource="https://res.cloudinary.com/dewpck9nt/image/upload/v1701674770/LittleLemon/lyydbtsucpgr7yvhxesy.webp"
          />
        </section>
      </Suspense>
    </article>
  );
}
