import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Wall Unit & Custom Piece Options | Free State Curtain Parlour",
  description:
    "Explore wall units, display shelving, fitted storage, media units, bedroom furniture, sourced furniture, custom pieces, wood finishes and furniture painting from Free State Curtain Parlour.",
};

const wallUnitOptions = [
  {
    src: "/showroom/wall-units-example-01.jpeg",
    title: "Wall units",
    description:
      "Built-in or freestanding wall units planned around storage, scale, display and room use.",
  },
  {
    src: "/showroom/wall-units-example-04.jpeg",
    title: "Fitted storage",
    description:
      "Storage ideas planned around what the room needs to hold, hide or organise.",
  },
  {
    src: "/showroom/wall-units-example-05.jpeg",
    title: "Media units",
    description:
      "TV and media unit ideas shaped around wall space, plug points, scale and display needs.",
  },
  {
    src: "/showroom/wall-units-example-02.jpeg",
    title: "Display shelving",
    description:
      "Open shelving for decor, books, objects and pieces that need to feel part of the room.",
  },
  {
    src: "/showroom/wall-units-example-03.jpeg",
    title: "Floating shelves",
    description:
      "Lighter wall-mounted shelving ideas for display without making the room feel heavy.",
  },
  {
    src: "/showroom/decor-display.jpg",
    title: "Custom pieces",
    description:
      "Custom pieces sourced or coordinated around the scale, finish and practical needs of the room.",
  },
  {
    src: "/showroom/bedroom-setting.jpg",
    title: "Bedroom furniture",
    description:
      "Bedroom pieces, headboard direction and soft furniture choices planned around the room.",
  },
  {
    src: "/showroom/furniture-decor-example-02.jpeg",
    title: "Sourced furniture",
    description:
      "Furniture sourced from suppliers, with advice on fabric, finish, scale and room direction.",
  },
  {
    src: "/showroom/wall-units-example-05.jpeg",
    title: "Wood finishes",
    description:
      "Wood tones, paint finishes and colours selected to work with furniture, fabric and decor.",
  },
  {
    src: "/showroom/furniture-decor-example-03.jpeg",
    title: "Furniture painting",
    description:
      "Paint finish direction for furniture or custom pieces that need to tie into the room.",
  },
];

export default function WallUnitsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Wall units & custom pieces"
      title="Wall unit and custom piece options."
      intro="Explore wall units, fitted storage, media units, shelving, bedroom furniture, sourced furniture, custom pieces, wood finishes and furniture painting before planning the final fit."
      image="/showroom/wall-units-example-02.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Wall unit options</p>
            <h2>Make storage and display feel like part of the room.</h2>
          </div>
          <div className="service-examples-gallery">
            {wallUnitOptions.map((option) => (
              <figure className="service-example-card" key={option.title}>
                <div className="curtain-type-image">
                  <img src={option.src} alt="" />
                  <strong>{option.title}</strong>
                </div>
                <figcaption>
                  <span>{option.description}</span>
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
