import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { serviceDetails, services } from "../content";

const serviceCtaLabels = {
  "curtains-fabrics": "View curtain types",
  blinds: "View blind options",
  wallpaper: "View wallpaper options",
  "upholstery-soft-furnishings": "View upholstery options",
  "rugs-lighting-decor": "View finishing options",
  "interior-guidance": "View guidance options",
  "wall-units": "View wall unit options",
} as const;

const serviceCtaHrefs = {
  "curtains-fabrics": "/services/curtains-fabrics/examples",
  blinds: "/services/blinds/examples",
  wallpaper: "/services/wallpaper/examples",
  "upholstery-soft-furnishings":
    "/services/upholstery-soft-furnishings/examples",
  "rugs-lighting-decor": "/services/rugs-lighting-decor/examples",
  "interior-guidance": "/services/interior-guidance/examples",
  "wall-units": "/services/wall-units/examples",
} as const;

export const metadata: Metadata = {
  title: "Services | Free State Curtain Parlour",
  description:
    "Explore curtains, blinds, wallpaper, upholstery, soft furnishings, rugs, lighting, decor, interior guidance, wall units and custom pieces from Free State Curtain Parlour in Bloemfontein.",
};

export default function ServicesPage() {
  return (
    <InteriorPage
      eyebrow="Services"
      title="Everything the room needs, considered together."
      intro="Start with one service, or use the showroom to bring the whole room together."
      image="/showroom/service-furniture-room-settings.jpeg"
      className="services-hero"
    >
      {services.map((service, index) => {
        const detail =
          serviceDetails[service.slug as keyof typeof serviceDetails];
        const ctaLabel =
          serviceCtaLabels[service.slug as keyof typeof serviceCtaLabels];
        const ctaHref =
          serviceCtaHrefs[service.slug as keyof typeof serviceCtaHrefs];
        const isCurtains = service.slug === "curtains-fabrics";

        return (
          <section
            className="page-section page-section-light service-story-section"
            id={service.slug}
            key={service.slug}
          >
            <article
              className={`service-story-row${
                index % 2 === 1 ? " service-story-row-reverse" : ""
              }`}
            >
              <figure
                className={`service-story-media${
                  !isCurtains ? " service-story-media-soft" : ""
                }`}
              >
                <div className="service-story-heading">
                  <h2>{service.title}</h2>
                </div>
                <img
                  src={service.image}
                  alt=""
                  style={{ objectPosition: service.position }}
                />
              </figure>
              <div className="service-story-detail">
                <p>{detail.summary}</p>
                <ul className="service-card-points">
                  {detail.points.map((point, pointIndex) => (
                    <li key={point}>
                      <span className="service-point-number">
                        <span>{String(pointIndex + 1).padStart(2, "0")}</span>
                        <span
                          className="service-point-line"
                          aria-hidden="true"
                        />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-story-actions">
                  <a
                    className="button button-primary"
                    href={ctaHref}
                  >
                    <span>{ctaLabel}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          </section>
        );
      })}

      <section className="visit-section services-visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>See the services in the room.</h2>
            <p className="visit-support">
              Visit the showroom to compare curtains, blinds, wallpaper,
              upholstery, rugs, lighting, decor, wall unit ideas and custom
              pieces in person before choosing what feels right for your space.
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
