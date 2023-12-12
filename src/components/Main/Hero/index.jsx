import Button from "../../Button";
import { Suspense } from "react";
import { ElementLoader } from "../../Loader";

export default function Hero() {
  return (
    <>
      <article className="hero page-padding">
        <Suspense fallback={ElementLoader}>
          <section className="content">
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p className="intro-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button linkPath={"/reservations"} content="Reserve a Table" />
          </section>
          <section className="img-container">
            <img
              className="main-img"
              src="https://res.cloudinary.com/dewpck9nt/image/upload/w_550/f_auto,q_auto/v1/LittleLemon/an2ofhe7fuskq2e9awzl"
              alt="Main Photo"
            />
          </section>
        </Suspense>
      </article>
    </>
  );
}
