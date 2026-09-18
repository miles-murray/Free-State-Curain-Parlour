import { MobileMenu } from "../components/MobileMenu";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { teamPeople } from "../content";
import { createPageMetadata } from "../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Team & Roles | Free State Curtain Parlour",
  description:
    "Meet the customer-facing, financial, installation and specialist support roles behind Free State Curtain Parlour in Bloemfontein.",
  path: "/team",
  image: "/team/team-hero-ai.png",
});

export default function TeamPage() {
  return (
    <main className="showroom-page team-page">
      <MobileMenu />
      <div className="mobile-page-hero mobile-page-hero-team">
        <div className="showroom-page-top">
          <SiteHeader />
        </div>

        <section className="page-section page-section-light team-page-section mobile-page-hero-section">
          <div className="simple-page-intro team-page-intro">
            <p className="eyebrow">Team & roles</p>
            <h1>The people behind the finished room.</h1>
            <p>
              The people who help guide each room from first conversation to
              finished detail.
            </p>
          </div>
        </section>
      </div>

      <section className="page-section page-section-light team-page-section team-grid-section">
        <div className="team-page-grid">
          {teamPeople.map((person) => (
            <article className="role-card team-role-card" key={person.name}>
              <span className="team-role-label">{person.role}</span>
              <Image
                className="team-role-media"
                src={person.image}
                alt={person.alt}
                width={1200}
                height={1470}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
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

      <SiteFooter />
    </main>
  );
}
