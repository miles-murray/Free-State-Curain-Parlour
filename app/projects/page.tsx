import { MobileMenu } from "../components/MobileMenu";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../content";
import { createPageMetadata } from "../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Projects | Free State Curtain Parlour",
  description:
    "Explore project categories for curtains, blinds, wallpaper, upholstery, decor, wall units and interior work from Free State Curtain Parlour in Bloemfontein.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="showroom-page projects-page">
      <MobileMenu />
      <div className="mobile-page-hero mobile-page-hero-projects">
        <div className="showroom-page-top">
          <SiteHeader />
        </div>

        <section className="page-section page-section-light projects-page-section projects-intro-section mobile-page-hero-section">
          <div className="projects-page-intro">
            <p className="eyebrow">Projects</p>
            <h1>
              <span>Organised around the work</span>
              <span>clients ask for most.</span>
            </h1>
            <p>
              A look through the kinds of curtain, blind, wallpaper, upholstery and
              full-room projects Free State Curtain Parlour helps bring together.
            </p>
          </div>
        </section>
      </div>

      <section className="page-section page-section-light projects-page-section projects-list-section">
        <div className="project-section-list">
          {projects.map((project) => (
            <article className="project-story" key={project.title}>
              <div className="project-story-copy">
                <h2>{project.title}</h2>
                {project.summary.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <blockquote className="project-testimonial">
                  <p>&ldquo;{project.testimonial}&rdquo;</p>
                  <footer>{project.testimonialName} / Google review</footer>
                </blockquote>
              </div>
              <div className="project-story-gallery">
                {project.images.map((image) => (
                  <figure key={image}>
                    <Image
                      src={image}
                      alt={`${project.title} example`}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 720px) 33vw, 30vw"
                    />
                  </figure>
                ))}
              </div>
              <blockquote className="project-testimonial project-testimonial-mobile">
                <p>&ldquo;{project.testimonial}&rdquo;</p>
                <footer>{project.testimonialName} / Google review</footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Start your project in the showroom.</h2>
            <p className="visit-support">
              Compare fabrics, blinds, wallpaper, upholstery, lighting and
              finishes in person, then speak to the team about the right
              direction for your room.
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
