export default function Branch() {
  return (
    <article className="branch-section page-padding">
      <section className="content">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="intro-text">
          Established in Chicago, Little Lemon embodies a culinary odyssey
          inspired by the Mediterranean. Born from a collective passion for
          authentic flavors, our chefs meticulously prepare each dish, drawing
          from generations of traditional recipes. From savory kebabs to
          aromatic couscous, every plate narrates a story of dedication. Rooted
          in Mediterranean heritage, we seamlessly blend tradition with
          contemporary flair.
        </p>
      </section>
      <section className="img-container">
      <img
            className="branch-img"
            src="/restaurant1.webp"
            alt="Main Photo"
          />
          <img
            className="branch-img"
            src="/restaurant2.webp"
            alt="Main Photo"
          />
        </section>
    </article>
  );
}
