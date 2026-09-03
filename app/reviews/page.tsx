import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { reviews } from "../content";

export const metadata: Metadata = {
  title: "Testimonials | Free State Curtain Parlour",
  description:
    "Testimonials from past Free State Curtain Parlour clients in Bloemfontein.",
};

export default function ReviewsPage() {
  return (
    <InteriorPage
      eyebrow="Testimonials"
      title="What past clients say."
      intro="Read feedback from customers who visited the showroom, received advice and trusted Free State Curtain Parlour with their rooms."
      image="/showroom/curtain-lounge.jpg"
    >
      <section className="page-section page-section-light">
        <div className="reviews-page-grid">
          {reviews.map((review) => (
            <article className="review-card static-review-card" key={review.name}>
              <header className="review-author">
                <img src={review.avatar} alt="" />
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.detail}</span>
                </div>
                <span className="review-date">{review.date}</span>
              </header>
              <span className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
              <p>{review.quote}</p>
              <footer>Google review</footer>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
