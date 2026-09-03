import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { historyItems } from "../content";

export const metadata: Metadata = {
  title: "History | Free State Curtain Parlour",
  description:
    "The history, heritage and newspaper articles of Free State Curtain Parlour, established in Bloemfontein in 1959.",
};

export default function HistoryPage() {
  return (
    <InteriorPage
      eyebrow="Established 1959"
      title="A Bloemfontein family story."
      image="/showroom/hero-interior.jpeg"
    >
      <section className="page-section page-section-light history-story-section">
        <div className="history-story-grid">
          <div>
            <p className="eyebrow">From the beginning</p>
            <h2>
              Built through rooms, families and word of mouth.
            </h2>
          </div>
          <div className="history-story-copy">
            <p>
              The archive tells a simple, strong story: a local business that
              started with curtaining, grew through family involvement, and
              became part of how Bloemfontein homes choose fabrics, finishes and
              furnishings.
            </p>
            <p>
              Instead of making the history feel like a list of dates, this page
              uses the newspaper articles as proof of a business that has been
              seen, trusted and spoken about locally over time.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-dark history-page-section">
        <div className="history-timeline-wrap">
          <p className="eyebrow light">Timeline</p>
          <div className="history-timeline">
            {historyItems.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="page-section page-section-light history-archive-section"
        aria-labelledby="archive-title"
      >
        <div className="history-archive-heading">
          <p className="eyebrow">Newspaper archive</p>
          <h2 id="archive-title">In the papers.</h2>
          <p>
            These restored clippings give the history page something real to
            hold onto: names, places, old adverts and the kind of local proof
            that cannot be faked by polished copy.
          </p>
        </div>

        <div className="archive-feature">
          <figure className="archive-clipping archive-clipping-feature">
            <img
              src="/history/curtains-to-carpets-article-polished.png"
              alt="Historic newspaper article titled Curtains to carpets, featuring the Jackson family and Free State Curtain Parlour"
            />
          </figure>
          <div className="archive-note">
            <span>Archive feature</span>
            <h3>Curtains, wallpaper and a family business.</h3>
            <p>
              The article connects the early curtaining story to Mrs S. S.
              Jackson and the Jackson family, placing the business firmly inside
              Bloemfontein's local interiors history.
            </p>
          </div>
        </div>

        <figure className="archive-newspaper-page">
          <img
            src="/history/westdene-newspaper-page-polished.png"
            alt="Historic Bloemfontein newspaper page with Westdene showroom coverage and local fabric adverts"
          />
          <figcaption>
            A later newspaper page showing the Westdene showroom story,
            supplier messages and the local fabric world around the business.
          </figcaption>
        </figure>
      </section>
    </InteriorPage>
  );
}
