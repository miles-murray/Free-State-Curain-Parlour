import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";

export const metadata: Metadata = {
  title: "Workshop | Free State Curtain Parlour",
  description:
    "See the workshop behind Free State Curtain Parlour's curtain making, soft furnishings, custom details and finishing work in Bloemfontein.",
};

const workshopAreas = [
  {
    title: "Fabric preparation",
    text: "This is where selected fabrics move from showroom choice to practical work. Lengths are checked, marked, cut and prepared around the measurements for each room.",
    image: "/workshop/workshop-fabric-preparation.jpeg",
    alt: "A workshop team member preparing patterned fabric on a cutting table.",
  },
  {
    title: "Sewing and making",
    text: "Curtains, linings, headings and soft furnishings are made up with the finished space in mind, so the details work with the fabric, track and room.",
    image: "/workshop/workshop-sewing-making.jpeg",
    alt: "A seamstress sewing fabric at a workshop sewing machine.",
  },
  {
    title: "Details and coordination",
    text: "The workshop also supports the smaller finishing decisions: trims, cushions, custom details and the pieces that need to arrive together before installation.",
    image: "/workshop/workshop-details-coordination.jpeg",
    alt: "A workshop team member finishing patterned fabric details by hand.",
  },
  {
    title: "Ready for the room",
    text: "Before anything leaves the workshop, finished work is checked so it is ready for handover or installation in the room it was made for.",
    image: "/workshop/floral-curtains-finished-room.png",
    alt: "Finished floral curtains hanging in a completed room.",
  },
];

export default function WorkshopPage() {
  return (
    <InteriorPage
      eyebrow="Workshop"
      title="Inside the workshop."
      intro="A simple look at the place where fabrics are prepared, curtains are made and finished work is checked before it goes into a home."
      image="/workshop/workshop-hero-sewing-machine.jpeg"
      className="workshop-page-hero"
    >
      <section className="page-section page-section-light workshop-story-page workshop-intro-section">
        <div className="workshop-page-intro">
          <p className="eyebrow">Behind the work</p>
          <h2>
            <span>A working space</span>
            <span>behind the showroom.</span>
          </h2>
          <figure className="workshop-intro-image">
            <img
              src="/workshop/workshop-room-overview.jpeg"
              alt="Free State Curtain Parlour workshop with sewing stations, cutting tables and fabric storage."
            />
          </figure>
          <p className="workshop-intro-copy">
            The workshop is not a second showroom. It is the practical space
            where selected fabric, details and measurements become finished
            curtains for Bloemfontein homes.
          </p>
        </div>
      </section>

      <section className="page-section page-section-light workshop-story-page workshop-areas-section">
        <div className="workshop-section-divider" aria-hidden="true" />
        <div className="workshop-story-feature">
          <div>
            <p className="eyebrow">What happens here</p>
            <h3>Making, checking and preparing the work.</h3>
            <p>
              Every piece moves through careful hands before it is ready for
              fitting, delivery or collection.
            </p>
          </div>
        </div>

        <div className="workshop-story-grid">
          {workshopAreas.map((area) => (
            <article key={area.title}>
              <figure>
                <img src={area.image} alt={area.alt} />
                <figcaption>
                  <h3>{area.title}</h3>
                </figcaption>
              </figure>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Start in the showroom, then the workshop can follow.</h2>
            <p className="visit-support">
              Bring photos, measurements, room ideas or problem areas. The
              showroom team can help you compare options and decide the next
              step before anything is measured, quoted, sourced or made.
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
            <p>Monday-Friday: 8am-4:30pm</p>
            <p>Saturday: 8am-12pm</p>
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
