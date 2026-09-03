import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";

export const metadata: Metadata = {
  title: "Factory & Workshop | Free State Curtain Parlour",
  description:
    "A page for the factory, workshop and custom creation process behind Free State Curtain Parlour.",
};

const workshopStages = [
  {
    number: "01",
    title: "Discuss",
    text: "Start with the room, the problem areas, the light, the privacy and the way the space needs to feel.",
  },
  {
    number: "02",
    title: "Measure",
    text: "Check the practical details before anything is made: windows, walls, drops, rails, floor length and fitting points.",
  },
  {
    number: "03",
    title: "Choose",
    text: "Confirm fabrics, linings, finishes, hardware, proportions and the details that will work with the full interior.",
  },
  {
    number: "04",
    title: "Make",
    text: "Cut, prepare, sew, assemble or finish the custom work so every piece follows the agreed measurements and direction.",
  },
  {
    number: "05",
    title: "Fit",
    text: "Install the rails, blinds, curtains, soft furnishings or custom pieces neatly in the real room.",
  },
  {
    number: "06",
    title: "Finish",
    text: "Dress the final details, check how everything sits, and leave the room feeling complete.",
  },
];

const workshopImages = [
  {
    src: "/workshop/workshop-consultation-temp.png",
    alt: "Hands comparing fabric, wallpaper and finish samples on a showroom worktable.",
    label: "Discuss",
  },
  {
    src: "/workshop/workshop-making-temp.png",
    alt: "Hands measuring and marking curtain fabric on a workshop cutting table.",
    label: "Make",
  },
  {
    src: "/workshop/workshop-fitting-temp.png",
    alt: "Installer adjusting finished curtain folds in a completed room.",
    label: "Fit",
  },
];

export default function WorkshopPage() {
  return (
    <InteriorPage
      eyebrow="Workshop"
      title="Measured, made and finished for the room."
      intro="A look at how a showroom decision becomes something real: measured, prepared, made, fitted and finished with the room in mind."
      image="/workshop/workshop-making-temp.png"
      className="workshop-page-hero"
    >
      <section className="page-section page-section-light workshop-process-page">
        <div className="workshop-page-intro">
          <p className="eyebrow">The process</p>
          <h2>From the first conversation to the final fit.</h2>
          <p>
            The exact details change from job to job, but the flow stays simple:
            understand the room, confirm the practical measurements, make the
            work properly, and finish it where it belongs.
          </p>
        </div>

        <div className="workshop-page-visual-grid">
          {workshopImages.map((image, index) => (
            <figure
              className={index === 1 ? "workshop-page-shot-wide" : ""}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
              <span>{image.label}</span>
            </figure>
          ))}
        </div>

        <ol className="workshop-page-steps">
          {workshopStages.map((stage) => (
            <li key={stage.title}>
              <span className="workshop-stage-number">
                <span>{stage.number}</span>
                <span className="workshop-stage-line" aria-hidden="true" />
              </span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section page-section-dark workshop-made-section">
        <div className="workshop-made-grid">
          <div>
            <p className="eyebrow light">What happens here</p>
            <h2>The unseen work behind the finished room.</h2>
          </div>
          <div className="workshop-made-copy">
            <p>
              This is where measurements become curtains, blinds, soft
              furnishings, custom furniture details, wall units and finishing
              pieces. The page can grow as real workshop photos are added.
            </p>
            <ul>
              <li>Curtain making, lining, heading and final dressing</li>
              <li>Blind checks, rail details and installation preparation</li>
              <li>Custom furniture and wall unit coordination</li>
              <li>Finishing details before delivery or fitting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light workshop-page-cta">
        <div>
          <p className="eyebrow">Start in the showroom</p>
          <h2>Bring the room in first.</h2>
          <p>
            Photos, measurements, rough ideas or problem areas are enough to
            begin. The team can help turn that into the right next step.
          </p>
        </div>
        <div className="workshop-page-actions">
          <a className="button button-primary" href="/contact">
            <span>Contact the showroom</span>
            <span aria-hidden="true">→</span>
          </a>
          <a className="button button-ghost" href="/showroom">
            <span>View the showroom</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </InteriorPage>
  );
}
