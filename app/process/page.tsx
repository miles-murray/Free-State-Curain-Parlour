import { MobileMenu } from "../components/MobileMenu";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Process | Free State Curtain Parlour",
  description:
    "See the Free State Curtain Parlour process for showroom advice, measuring, quotes, sourcing, custom work and installation in Bloemfontein.",
  path: "/process",
});

const processStages = [
  {
    number: "01",
    title: "Advise",
    text: "Start with the room, the style, the practical needs and the way the space should feel. We look at photos, colours, fabrics, light, privacy and the pieces already in the room before suggesting a direction.",
    points: [
      "Review the room, style and practical needs.",
      "Compare photos, colours, fabrics and finishes.",
      "Consider light, privacy and existing furniture.",
      "Suggest a clear direction before measuring.",
    ],
    support: "Bring photos, measurements, fabric ideas, room colours or problem areas.",
    outcome: "Outcome: a clear direction before anything is measured, quoted or made.",
    image: "/workshop/workshop-consultation-temp.png",
    alt: "Hands comparing fabric, wallpaper and finish samples on a showroom worktable.",
  },
  {
    number: "02",
    title: "Measure",
    text: "Check the sizes, walls, windows, furniture placement and fitting points that shape the work. Measurements help confirm what can be made, what needs space to operate and how the finished piece will sit in the room.",
    points: [
      "Check window sizes, wall space and floor length.",
      "Review furniture placement and fitting points.",
      "Confirm how each curtain or blind will operate.",
      "Record the details needed for accurate quoting.",
    ],
    support: "Have access to the windows, recesses, walls and any furniture that affects the fit.",
    outcome: "Outcome: accurate measurements and practical notes for quoting.",
    image: "/workshop/process-measure-thread-machine.jpeg",
    alt: "Workshop sewing machine with thread cones and measuring tape.",
  },
  {
    number: "03",
    title: "Quote",
    text: "Confirm the materials, finishes, supplier details and installation approach before work begins. The quote brings the agreed choices together so everyone understands what is being made, ordered or coordinated.",
    points: [
      "Confirm fabrics, finishes and supplier details.",
      "Separate made-to-measure and sourced items.",
      "Clarify installation, fitting or handover needs.",
      "Bring the agreed choices into one clear quote.",
    ],
    support: "Review the selected fabric, finish, supplier items and any fitting details before approval.",
    outcome: "Outcome: a clear quote and confirmed scope of work.",
    image: "/showroom/process-quote-reception.jpeg",
    alt: "Free State Curtain Parlour reception counter with pendant lights and wallpaper.",
  },
  {
    number: "04",
    title: "Prepare",
    text: "The right pieces are made, ordered, sourced or coordinated with trusted specialists. Fabric, lining, tracks, furniture, wallpaper or finishing pieces are prepared according to the approved direction.",
    points: [
      "Order or source the agreed materials.",
      "Prepare fabric, lining, tracks and hardware.",
      "Coordinate specialist work where needed.",
      "Make each piece to the approved room direction.",
    ],
    support: "The workshop and trusted suppliers prepare the approved pieces in the background.",
    outcome: "Outcome: made, sourced or coordinated items ready for final checking.",
    image: "/workshop/process-prepare-green-shirt.jpeg",
    alt: "Workshop team member preparing light fabric on a cutting table.",
  },
  {
    number: "05",
    title: "Check",
    text: "Finished pieces are checked against the agreed direction before handover or fitting. This gives the team a final moment to review the detail, finish and practical fit before the work leaves the workshop.",
    points: [
      "Review the finish against the agreed direction.",
      "Check practical fit, details and presentation.",
      "Confirm pieces are ready for handover or fitting.",
      "Resolve final details before installation.",
    ],
    support: "Finished work is checked before it leaves the workshop or is handed over.",
    outcome: "Outcome: pieces are ready for fitting, delivery or collection.",
    image: "/workshop/process-check-pink-jacket.jpeg",
    alt: "Workshop team member checking finished curtain fabric on a long table.",
  },
  {
    number: "06",
    title: "Install",
    text: "The final details are fitted, placed or handed over in the room they were chosen for. Curtains, blinds, furniture and finishing pieces are dressed, positioned or handed over so the room can come together properly.",
    points: [
      "Fit curtains, blinds, tracks or finishing pieces.",
      "Dress and position items in the chosen room.",
      "Check the final look and everyday operation.",
      "Hand over the completed work neatly.",
    ],
    support: "Make sure the room is accessible and ready for fitting or final placement.",
    outcome: "Outcome: the finished details sit properly in the room they were chosen for.",
    image: "/workshop/process-install-finished-curtains.jpg",
    alt: "Finished curtains installed around a bright patio room with a chair and plant.",
  },
];

export default function ProcessPage() {
  return (
    <main className="showroom-page process-page">
      <MobileMenu />
      <div className="mobile-page-hero mobile-page-hero-process">
        <div className="showroom-page-top">
          <SiteHeader />
        </div>

        <section className="page-section page-section-light workshop-process-page mobile-page-hero-section">
          <div className="simple-page-intro process-page-intro">
            <p className="eyebrow">Process</p>
            <h1>From showroom advice to the finished room.</h1>
            <p>
              A simple look at how an idea for a room becomes finished work:
              advised, measured, quoted, prepared, checked and installed.
            </p>
          </div>
        </section>
      </div>

      <section className="page-section page-section-light workshop-process-page process-timeline-section">
        <ol className="workshop-timeline">
          {processStages.map((stage) => (
            <li key={stage.title}>
              <figure>
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  width={1200}
                  height={1500}
                  sizes="(max-width: 720px) 100vw, 42vw"
                />
                <figcaption>
                  <h3>{stage.title}</h3>
                  {stage.points ? (
                    <>
                      <ul className="workshop-step-points">
                        {stage.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="workshop-step-extra">
                        <p>{stage.support}</p>
                        <strong>{stage.outcome}</strong>
                      </div>
                    </>
                  ) : (
                    <p>{stage.text}</p>
                  )}
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
