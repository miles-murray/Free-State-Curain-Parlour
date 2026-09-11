import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { teamPeople } from "../content";

export const metadata: Metadata = {
  title: "Team & Roles | Free State Curtain Parlour",
  description:
    "Meet the customer-facing, financial, installation and specialist support roles behind Free State Curtain Parlour in Bloemfontein.",
};

export default function TeamPage() {
  return (
    <InteriorPage
      eyebrow="Team & roles"
      title="The people behind the finished room."
      image="/team/team-hero-ai.png"
    >
      <section className="page-section page-section-light team-page-section">
        <div className="team-page-intro">
          <h2>Meet the team.</h2>
          <p>
            The people who help guide each room from first conversation to
            finished detail.
          </p>
        </div>
        <div className="team-page-grid">
          {teamPeople.map((person) => (
            <article className="role-card team-role-card" key={person.name}>
              <span className="team-role-label">{person.role}</span>
              <img className="team-role-media" src={person.image} alt={person.alt} />
              <div className="team-role-body">
                <h2>{person.name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Meet the people in the room.</h2>
            <p className="visit-support">
              Visit the Westdene showroom to speak to the team, compare
              fabrics, finishes, blinds, wallpaper, rugs, lighting and decor,
              and decide what the next step should be.
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
