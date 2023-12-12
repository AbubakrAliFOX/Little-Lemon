import Button from "../../Button";

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
          <Button linkPath={'/reservations'} content="Reserve a Table" />
        </section>
        <section className="img-container">
          <img
            className="main-img"
            src="https://res.cloudinary.com/dewpck9nt/image/upload/v1702359962/LittleLemon/an2ofhe7fuskq2e9awzl.webp"
            alt="Main Photo"
          />
        </section>
      </article>
    </>
  );
}
