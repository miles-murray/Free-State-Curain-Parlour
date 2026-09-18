import { MobileMenu } from "../components/MobileMenu";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Workshop | Free State Curtain Parlour",
  description:
    "See the workshop behind Free State Curtain Parlour's curtain making, soft furnishings, custom details and finishing work in Bloemfontein.",
  path: "/workshop",
  image: "/showroom/workshop-ai-placeholder.png",
});

const workshopAreas = [
  {
    title: "Fabric preparation",
    mobileText:
      "Selected fabrics are checked, measured, cut and prepared so the pattern, lining and finish follow the room plan.",
    text: [
      "This is where selected fabrics move from showroom choice to practical work. Lengths are checked, marked, cut and prepared around the measurements for each room.",
      "The team checks the fabric direction, repeat, lining and finish before the work moves to sewing, so the finished piece follows the same plan agreed in the showroom.",
      "Small practical details are resolved here too, from fabric handling to how the material will behave once it is hung, fitted or dressed in the room.",
    ],
    image: "/workshop/workshop-fabric-preparation.jpeg",
    alt: "A workshop team member preparing patterned fabric on a cutting table.",
  },
  {
    title: "Sewing and making",
    mobileText:
      "Curtains, linings, headings and soft furnishings are made to suit the fabric, track and finished room.",
    text: [
      "Curtains, linings, headings and soft furnishings are made up with the finished space in mind, so the details work with the fabric, track and room.",
      "This stage brings together the measurements, fabric choice and practical finish, with each piece made to suit the way it will be used every day.",
    ],
    image: "/workshop/workshop-sewing-making.jpeg",
    alt: "A seamstress sewing fabric at a workshop sewing machine.",
  },
  {
    title: "Details and coordination",
    mobileText:
      "Trims, cushions and custom details are checked together before installation.",
    text: [
      "The workshop also supports the smaller finishing decisions: trims, cushions, custom details and the pieces that need to arrive together before installation.",
      "Those details are checked against the rest of the room so the finished work feels connected, not like separate pieces added at the end.",
    ],
    image: "/workshop/workshop-details-coordination.jpeg",
    alt: "A workshop team member finishing patterned fabric details by hand.",
  },
  {
    title: "Ready for the room",
    mobileText:
      "Finished work receives a final check before handover or installation.",
    text: [
      "Before anything leaves the workshop, finished work is checked so it is ready for handover or installation in the room it was made for.",
      "The final check looks at the finish, presentation and practical fit, so the work can move from the workshop back into the space with confidence.",
    ],
    image: "/workshop/floral-curtains-finished-room.png",
    alt: "Finished floral curtains hanging in a completed room.",
  },
];

export default function WorkshopPage() {
  return (
    <main className="showroom-page workshop-page">
      <MobileMenu />
      <div className="workshop-heading-hero">
        <div className="showroom-page-top">
          <SiteHeader />
        </div>

        <section className="page-section page-section-light workshop-story-page workshop-heading-section">
          <div className="simple-page-intro">
            <p className="eyebrow">Workshop</p>
            <h1>Inside the workshop.</h1>
            <p>
              A simple look at the place where fabrics are prepared, curtains
              are made and finished work is checked before it goes into a home.
            </p>
          </div>
        </section>
      </div>

      <section className="page-section page-section-light workshop-story-page workshop-intro-section">
        <div className="workshop-page-intro">
          <figure className="workshop-intro-image">
            <Image
              src="/workshop/workshop-room-overview.jpeg"
              alt="Free State Curtain Parlour workshop with sewing stations, cutting tables and fabric storage."
              width={1600}
              height={1150}
              sizes="(max-width: 720px) 100vw, 55vw"
            />
          </figure>
          <div className="workshop-intro-text">
            <div className="workshop-intro-heading">
              <p className="eyebrow">Behind the work</p>
              <h2>
                <span>A working space</span>
                <span>behind the showroom.</span>
              </h2>
            </div>
            <div className="workshop-intro-copy workshop-intro-copy-desktop">
              <p>
                The workshop is not a second showroom. It is the practical space
                where selected fabric, details and measurements become finished
                work for Bloemfontein homes.
              </p>
              <p>
                This is where curtains are prepared, headings are made, linings
                are checked and soft furnishing details are brought together
                before they go back into the room.
              </p>
              <p>
                It keeps the showroom choices connected to the making process:
                what was chosen, what needs to fit, and what has to be ready for
                installation or collection.
              </p>
            </div>
            <p className="workshop-intro-mobile-copy">
              Selected fabrics, measurements and finishing details are prepared
              here before each piece is checked for installation or collection.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light workshop-story-page workshop-areas-section">
        <div className="workshop-section-divider" aria-hidden="true" />
        <div className="workshop-story-feature">
          <div>
            <p className="eyebrow">What happens here</p>
            <h3>Making, checking and preparing the work.</h3>
            <p>
              Every piece moves through careful hands before it is ready for
              fitting, delivery or collection.
            </p>
          </div>
        </div>

        <div className="workshop-story-grid">
          {workshopAreas.map((area) => (
            <article key={area.title}>
              <div className="workshop-area-copy">
                <h3>{area.title}</h3>
                <div className="workshop-area-copy-desktop">
                  {area.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="workshop-area-copy-mobile">{area.mobileText}</p>
              </div>
              <figure>
                <Image
                  src={area.image}
                  alt={area.alt}
                  width={1600}
                  height={1240}
                  sizes="(max-width: 720px) 100vw, 55vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Start in the showroom, then the workshop can follow.</h2>
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
