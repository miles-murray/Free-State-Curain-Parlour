import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Curtain Types | Free State Curtain Parlour",
  description:
    "Explore curtain types from Free State Curtain Parlour in Bloemfontein, including custom curtains, sheer curtains, blockout curtains, wave curtains, pinch pleat curtains, pencil pleat curtains, eyelet curtains, stage curtains and electric curtains.",
};

const curtainTypes = [
  {
    src: "/showroom/curtains-fabrics-example-01.jpeg",
    title: "Custom curtains",
    description:
      "Made-to-measure curtains planned around the room, window size, fabric choice, lining, track or rod and final installation.",
  },
  {
    src: "/showroom/curtains-fabrics-example-02.jpeg",
    title: "Sheer curtains",
    description:
      "Lightweight curtains for soft daylight, privacy and layering, often paired with blockout or lined curtains.",
  },
  {
    src: "/showroom/curtains-fabrics-example-03.jpeg",
    title: "Blockout and lined curtains",
    description:
      "Curtains with lining or blockout fabric for bedrooms, TV rooms and spaces that need more privacy or light control.",
  },
  {
    src: "/showroom/curtains-fabrics-example-04.jpeg",
    title: "Wave curtains",
    description:
      "A clean, modern curtain style with soft, even folds that works well on tracks in contemporary rooms.",
  },
  {
    src: "/showroom/curtains-fabrics-example-05.jpeg",
    title: "Pinch pleat curtains",
    description:
      "A tailored heading style with structured pleats, suited to formal living rooms, bedrooms and finished interiors.",
  },
  {
    src: "/showroom/curtains-fabrics-example-06.jpeg",
    title: "Pencil pleat curtains",
    description:
      "A flexible gathered heading that can suit many rooms, fabrics and track or rod choices.",
  },
  {
    src: "/showroom/curtains-fabrics-example-07.jpeg",
    title: "Eyelet curtains",
    description:
      "Curtains with metal eyelets for a simple, relaxed look on a curtain rod.",
  },
  {
    src: "/showroom/curtains-fabrics-example-08.jpeg",
    title: "Stage and hall curtains",
    description:
      "Larger curtain projects for halls, stages and public spaces, measured and made around the space.",
  },
  {
    src: "/showroom/curtains-fabrics-example-09.jpeg",
    title: "Electric and Wi-Fi operated curtains",
    description:
      "Motorised curtain options for easier opening and closing, including electric tracks and Wi-Fi operated curtain systems.",
  },
];

export default function CurtainsFabricsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Curtains"
      title="Curtain types, fabrics and finishes."
      intro="Explore the main curtain types available through Free State Curtain Parlour, then choose the fabric, lining, track, rod and finish that suits the room."
      image="/showroom/curtains-fabrics-example-01.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Curtain types</p>
            <h2>Choose the curtain style first, then refine the finish.</h2>
          </div>
          <div className="service-examples-gallery">
            {curtainTypes.map((curtain) => (
              <figure className="service-example-card" key={curtain.title}>
                <div className="curtain-type-image">
                  <img src={curtain.src} alt="" />
                  <strong>{curtain.title}</strong>
                </div>
                <figcaption>
                  <span>{curtain.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="service-examples-actions">
            <a className="button button-primary" href="/services">
              <span>Back to services</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
