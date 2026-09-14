import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Projects | Free State Curtain Parlour",
  description:
    "Explore project categories for curtains, blinds, wallpaper, upholstery, decor, wall units and interior work from Free State Curtain Parlour in Bloemfontein.",
};

export default function ProjectsPage() {
  return (
    <InteriorPage
      eyebrow="Projects"
      title="Finished rooms, details and made-to-measure work."
      intro="A look through the kinds of curtain, blind, wallpaper, upholstery and full-room projects Free State Curtain Parlour helps bring together."
      image="/showroom/projects-hero-lounge.png"
      className="projects-hero"
    >
      <section className="page-section page-section-light projects-page-section projects-intro-section">
        <div className="projects-page-intro">
          <h2>
            <span>Organised around the work</span>
            <span>clients ask for most.</span>
          </h2>
        </div>
      </section>

      <section className="page-section page-section-light projects-page-section projects-list-section">
        <div className="project-section-list">
          {projects.map((project) => (
            <article className="project-story" key={project.title}>
              <div className="project-story-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <blockquote className="project-testimonial">
                  <p>&ldquo;{project.testimonial}&rdquo;</p>
                  <footer>{project.testimonialName} / Google review</footer>
                </blockquote>
              </div>
              <div className="project-story-gallery">
                {project.images.map((image) => (
                  <figure key={image}>
                    <img src={image} alt={`${project.title} example`} />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
