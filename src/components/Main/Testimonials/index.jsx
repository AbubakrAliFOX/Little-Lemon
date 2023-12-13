import './Testimonials.css';
import { ElementLoader } from "../../Loader";
import { Suspense } from "react";

export default function Testimonials() {
  return (
    <Suspense fallback={<ElementLoader />}>
      <article className="testimonials-section page-padding">
        <h3 className="testimonials-title">Testimonials</h3>
      </article>
    </Suspense>
  );
}
