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
      title="A project gallery ready for real client work."
      intro="Mock project groups for now, ready to replace with Free State Curtain Parlour's real photos once the past-project folders are selected."
      image="/showroom/curtains-fabrics-example-01.jpeg"
      className="projects-hero"
    >
      <section className="page-section page-section-light projects-page-section">
        <div className="projects-page-intro">
          <p className="eyebrow">Past work</p>
          <h2>Organised around the services clients ask for most.</h2>
          <p>
            These sections are a working mockup. The structure is ready for real
            client photos, project names, locations and testimonials as they are
            gathered.
          </p>
        </div>

        <div className="project-section-list">
          {projects.map((project) => (
            <article className="project-story" key={project.title}>
              <div className="project-story-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <div className="project-story-gallery">
                {project.images.map((image) => (
                  <figure key={image}>
                    <img src={image} alt="" />
                  </figure>
                ))}
              </div>
              <blockquote className="project-testimonial">
                <p>&ldquo;{project.testimonial}&rdquo;</p>
                <footer>{project.testimonialName} / Google review</footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
