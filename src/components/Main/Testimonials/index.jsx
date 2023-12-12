import { ElementLoader } from "../../Loader";
import { Suspense } from "react";

export default function Testimonials() {
  return (
    <article className="testimonials-section page-padding">
      <Suspense fallback={ElementLoader}>
        <h3 className="testimonials-title">Testimonials</h3>
      </Suspense>
    </article>
  );
}
