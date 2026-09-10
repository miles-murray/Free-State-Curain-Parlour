import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Blind Types | Free State Curtain Parlour",
  description:
    "Explore blind types from Free State Curtain Parlour in Bloemfontein, including Venetian blinds, roller blinds, Roman blinds, vertical blinds, wooden blinds and motorised blinds.",
};

const blindOptions = [
  {
    src: "/showroom/service-blinds.jpeg",
    title: "Venetian blinds",
    description:
      "Slatted blinds for flexible light control, privacy and a clean window finish.",
  },
  {
    src: "/showroom/service-blinds-generated.png",
    title: "Roller blinds",
    description:
      "Simple roll-up blinds for bedrooms, living rooms, offices and everyday light control.",
  },
  {
    src: "/showroom/showroom-gallery-01.jpeg",
    title: "Roman blinds",
    description:
      "Fabric blinds with a softer, more decorative finish for rooms that need warmth and texture.",
  },
  {
    src: "/showroom/showroom-gallery-02.jpeg",
    title: "Vertical blinds",
    description:
      "Vertical slat blinds for wide windows, sliding doors and practical privacy control.",
  },
  {
    src: "/showroom/showroom-gallery-03.jpeg",
    title: "Wooden blinds",
    description:
      "Wood-look or timber-style blinds for a warmer, more structured interior finish.",
  },
  {
    src: "/showroom/installation-fabric-display.jpg",
    title: "Motorised blinds",
    description:
      "Electric blind options for easier operation, larger windows and automated room control.",
  },
  {
    src: "/showroom/showroom-gallery-04.jpeg",
    title: "Bamboo blinds",
    description:
      "Natural textured blinds for rooms that need a relaxed, warmer and more organic finish.",
  },
  {
    src: "/showroom/showroom-gallery-05.jpeg",
    title: "Outdoor blinds",
    description:
      "Practical blind options for covered outdoor areas, patios and spaces that need shade or screening.",
  },
  {
    src: "/showroom/showroom-gallery-06.jpeg",
    title: "Blockout blinds",
    description:
      "Blind options for bedrooms, TV rooms and spaces that need stronger light control.",
  },
];

export default function BlindOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Blinds"
      title="Blind types, finishes and operation."
      intro="Explore the main blind types available through Free State Curtain Parlour, then choose the finish, colour, operation, measuring and installation details that suit the room."
      image="/showroom/service-blinds.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Blind types</p>
            <h2>Choose the blind style first, then refine the finish.</h2>
          </div>
          <div className="service-examples-gallery">
            {blindOptions.map((blind) => (
              <figure className="service-example-card" key={blind.title}>
                <div className="curtain-type-image">
                  <img src={blind.src} alt="" />
                  <strong>{blind.title}</strong>
                </div>
                <figcaption>
                  <span>{blind.description}</span>
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
