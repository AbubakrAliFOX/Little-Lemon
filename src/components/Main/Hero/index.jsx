import "./Hero.css";

import Button from "../../Button";
import { lazy, Suspense } from "react";
import { ElementLoader } from "../../Loader";
const MainImg = lazy(() => import("./MainImg"));

export default function Hero() {
  return (
    <>
      <article className="hero page-padding">
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
          <Suspense fallback={<ElementLoader />}>
            <picture>
              <source
                media="(max-width: 450px)"
                srcset="https://res.cloudinary.com/dewpck9nt/image/upload/w_300/f_auto,q_auto/v1/LittleLemon/an2ofhe7fuskq2e9awzl"
              />
              <source
                media="(max-width: 800px)"
                srcset="https://res.cloudinary.com/dewpck9nt/image/upload/w_470/f_auto,q_auto/v1/LittleLemon/an2ofhe7fuskq2e9awzl"
              />
              <MainImg />
            </picture>
          </Suspense>
        </section>
      </article>
    </>
  );
}
