import "./style.css";

export default function Main() {
  return (
    <main>
      <article className="hero">
        <section className="content">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="intro-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a table</button>
        </section>
        <section className="img-container">
          <img className="main-img" src="/restaurant-chef-B.webp" alt="Main Photo" />
        </section>
      </article>
    </main>
  );
}
