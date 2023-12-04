import Button from "../../Button";
import Card from "../Card";

export default function Specials() {
  return (
    <article className="page-padding">
      <section className="specials-main-display">
        <h3 className="specials-title">Our specials this week!</h3>
        <Button content="Order Online" />
      </section>
      <section className="cards-display">
      <Card
          name="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    imgSource="/greek-salad.webp"
       />
       <Card
          name="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    imgSource="/greek-salad.webp"
       />
       <Card
          name="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    imgSource="/greek-salad.webp"
       />
      </section>
    </article>
  );
}
