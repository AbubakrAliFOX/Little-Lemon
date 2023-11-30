import Button from "../../Button";

export default function Hero() {
  return (
    <>
      <article className="hero">
        <section className="content">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="intro-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button content="Reserve a Table" />
        </section>
        <section className="img-container">
          <img
            className="main-img"
            src="/restaurant-chef-B.webp"
            alt="Main Photo"
          />
        </section>
      </article>
    </>
  );
}
