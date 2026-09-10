import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";

export const metadata: Metadata = {
  title: "Contact | Free State Curtain Parlour",
  description:
    "Visit or contact Free State Curtain Parlour at 44 Second Avenue, Westdene, Bloemfontein.",
};

export default function ContactPage() {
  return (
    <InteriorPage
      eyebrow="Contact"
      title="Free State Curtain Parlour."
      intro="Visit, call or email the showroom."
      image="/showroom/showroom-entry.jpg"
    >
      <section className="page-section page-section-light contact-info-section">
        <div className="contact-info-grid">
          <div>
            <h2>Trading hours</h2>
            <p>
              Monday-Friday: 8:30am-4:30pm<br />
              Saturday: 8:30am-12pm<br />
              Sunday: Closed
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              <a href="tel:+27514303474">051 430 3474</a>
              <br />
              <a href="mailto:freestatecurtainparlour@gmail.com">
                freestatecurtainparlour@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light contact-location-section contact-location-no-divider">
        <div className="contact-basic-grid">
          <div className="contact-basic-details">
            <h2>Address</h2>
            <p>
              44 Second Avenue<br />
              Westdene, Bloemfontein<br />
              9301
            </p>
          </div>
          <div
            className="visit-map"
            aria-label="Map to Free State Curtain Parlour"
          >
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
      </section>
    </InteriorPage>
  );
}
