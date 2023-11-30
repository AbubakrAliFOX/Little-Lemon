import "./style.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Branch from "./Branch";

export default function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <Branch />
    </main>
  );
}
