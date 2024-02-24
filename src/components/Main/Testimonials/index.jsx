import './Testimonials.css';
import { ElementLoader } from "../../Loader";
import { Suspense } from "react";

export default function Testimonials() {
  return (
    <article className="testimonials-section page-padding">
        <Suspense fallback={<ElementLoader />}>
        <h3 className="testimonials-title">Testimonials</h3>
        <h3 className="testimonials-title">Comming soon ...</h3>
    </Suspense>
      </article>
  );
}
