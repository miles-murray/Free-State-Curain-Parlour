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
      eyebrow="Visit the showroom"
      title="Let us find what works in your room."
      intro="The contact page gives customers the practical next step: visit the showroom, call the team, get directions or send an email."
      image="/showroom/showroom-entry.jpg"
    >
      <section className="visit-section standalone-contact">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Contact details</p>
            <h2>Westdene, Bloemfontein.</h2>
            <p className="visit-support">
              Customers can visit the showroom, compare fabrics and finishes,
              and speak to the team before choosing what feels right for their
              space.
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
              <a className="button button-ghost" href="tel:+27514303474">
                Call the showroom
              </a>
            </div>
          </div>
          <div className="visit-map" aria-label="Map to Free State Curtain Parlour">
            <iframe
              src="https://www.google.com/maps?q=44+Second+Avenue+Westdene+Bloemfontein+9301&output=embed"
              title="Map to Free State Curtain Parlour"
              loading="lazy"
            />
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
