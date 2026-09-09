import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";

export const metadata: Metadata = {
  title: "Process | Free State Curtain Parlour",
  description:
    "See the Free State Curtain Parlour process for showroom advice, measuring, quotes, sourcing, custom work and installation in Bloemfontein.",
};

const workshopStages = [
  {
    number: "01",
    title: "Advise",
    text: "Start with the room, the style, the practical needs and the way the space should feel.",
    image: "/workshop/workshop-consultation-temp.png",
    alt: "Hands comparing fabric, wallpaper and finish samples on a showroom worktable.",
  },
  {
    number: "02",
    title: "Measure",
    text: "Check the sizes, walls, windows, furniture placement and fitting points that shape the work.",
    image: "/team/measuring-installation-temp.png",
    alt: "A measuring tape being used beside a curtain installation.",
  },
  {
    number: "03",
    title: "Quote",
    text: "Confirm the materials, finishes, supplier details and installation approach before work begins.",
    image: "/showroom/installation-fabric-display.jpg",
    alt: "Fabric and decor samples arranged in the showroom.",
  },
  {
    number: "04",
    title: "Prepare",
    text: "The right pieces are made, ordered, sourced or coordinated with trusted specialists.",
    image: "/workshop/workshop-making-temp.png",
    alt: "Hands measuring and marking curtain fabric on a workshop cutting table.",
  },
  {
    number: "05",
    title: "Check",
    text: "Finished pieces are checked against the agreed direction before handover or fitting.",
    image: "/team/workshop-custom-temp.png",
    alt: "Workshop details being checked before installation.",
  },
  {
    number: "06",
    title: "Install",
    text: "The final details are fitted, placed or handed over in the room they were chosen for.",
    image: "/workshop/workshop-fitting-temp.png",
    alt: "Installer adjusting finished curtain folds in a completed room.",
  },
];

export default function WorkshopPage() {
  return (
    <InteriorPage
      eyebrow="Process"
      title="From showroom advice to the finished room."
      intro="A simple look at how an idea for a room becomes finished work: advised, measured, quoted, prepared, checked and installed."
      image="/workshop/workshop-making-temp.png"
      className="workshop-page-hero"
    >
      <section className="page-section page-section-light workshop-process-page">
        <div className="workshop-page-intro">
          <p className="eyebrow">The process</p>
          <h2>Step-by-step process.</h2>
          <p>
            From showroom advice in Bloemfontein to measuring, quoting,
            sourcing, custom work and final installation, each project follows a
            clear process shaped around the room.
          </p>
        </div>

        <ol className="workshop-timeline">
          {workshopStages.map((stage) => (
            <li key={stage.title}>
              <figure>
                <img src={stage.image} alt={stage.alt} />
                <figcaption>
                  <span>{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Start the process in the room.</h2>
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
