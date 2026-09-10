import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";

export const metadata: Metadata = {
  title: "History | Free State Curtain Parlour",
  description:
    "The history, heritage and newspaper articles of Free State Curtain Parlour, established in Bloemfontein in 1959.",
};

export default function HistoryPage() {
  return (
    <InteriorPage
      eyebrow="Established 1959"
      title="A Bloemfontein interiors story since 1959."
      intro="A short look at the heritage behind Free State Curtain Parlour and its place in Westdene, Bloemfontein."
      image="/history/westdene-showroom-frontage.jpeg"
      className="history-hero"
    >
      <section
        className="page-section page-section-light history-simple-section"
        aria-labelledby="history-title"
      >
        <div className="history-simple-grid">
          <div className="history-simple-copy">
            <p className="eyebrow">Our heritage</p>
            <h2 id="history-title">Rooted in curtains, homes and local trust.</h2>
            <p>
              Free State Curtain Parlour has been part of Bloemfontein's
              interiors story since 1959. The business first started in the
              Bloemfontein CBD, where it became known for curtain work, fabrics
              and practical advice for local homes.
            </p>
            <p>
              In 2002, an old newspaper feature marked an important new chapter:
              the established curtain shop moved to Westdene. The move gave
              customers a showroom where fabrics, window treatments, wallpaper
              and interior finishes could be seen, compared and discussed in
              person.
            </p>
            <p>
              The business has changed with the times, but the heart of it has
              stayed familiar. Free State Curtain Parlour is still built around
              rooms, relationships and helping Bloemfontein homes feel properly
              finished.
            </p>
          </div>
          <figure className="history-simple-image">
            <img
              src="/history/westdene-newspaper-page-polished.png"
              alt="Historic newspaper page featuring Free State Curtain Parlour and its move to Westdene"
            />
            <figcaption>
              A newspaper archive page featuring Free State Curtain Parlour's
              Westdene showroom.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>See the story in Westdene today.</h2>
            <p className="visit-support">
              Visit the showroom to compare fabrics, wallpaper, blinds, rugs,
              lighting and decor in person, and speak to the team about what
              will work in your room.
            </p>
            <div className="visit-actions">
              <a
                className="button button-primary"
                href="https://www.google.com/maps/dir/?api=1&destination=44+Second+Avenue+Westdene+Bloemfontein+9301"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <a className="button button-ghost" href="/contact">
                Contact details
              </a>
            </div>
          </div>
          <div className="visit-map" aria-label="Map to Free State Curtain Parlour">
            <iframe
              src="https://www.google.com/maps?q=44+Second+Avenue+Westdene+Bloemfontein+9301&output=embed"
              title="Map to Free State Curtain Parlour"
              loading="lazy"
            />
            <a
              className="visit-map-link"
              href="https://www.google.com/maps/dir/?api=1&destination=44+Second+Avenue+Westdene+Bloemfontein+9301"
              target="_blank"
              rel="noreferrer"
            >
              <span>Open directions</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="visit-details">
          <div>
            <h3>Find us</h3>
            <address>
              44 Second Avenue<br />
              Westdene, Bloemfontein<br />
              9301
            </address>
          </div>
          <div>
            <h3>Trading hours</h3>
            <p>Monday-Friday: 8:30am-4:30pm</p>
            <p>Saturday: 8:30am-12pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+27514303474">051 430 3474</a>
            <a href="mailto:freestatecurtainparlour@gmail.com">
              freestatecurtainparlour@gmail.com
            </a>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
