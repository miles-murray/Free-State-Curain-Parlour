import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Wall Unit & Custom Piece Options | Free State Curtain Parlour",
  description:
    "Explore wall units, display shelving, fitted storage, media units, bedroom furniture, sourced furniture and custom pieces from Free State Curtain Parlour.",
  path: "/services/wall-units/examples",
  image: "/showroom/wall-units-clock-display.png",
});

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
    src: "/showroom/media-units.png",
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
    src: "/showroom/custom-piece-table.png",
    title: "Custom pieces",
    description:
      "Custom pieces sourced or coordinated around the scale, finish and practical needs of the room.",
  },
  {
    src: "/showroom/bedroom-furniture.png",
    title: "Bedroom furniture",
    description:
      "Bedroom pieces, headboard direction and soft furniture choices planned around the room.",
  },
  {
    src: "/showroom/sourced-furniture.webp",
    title: "Sourced furniture",
    description:
      "Furniture sourced from suppliers, with advice on fabric, finish, scale and room direction.",
  },
];

export default function WallUnitsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Wall units & custom pieces"
      title="Wall unit and custom piece options."
      intro="Explore wall units, fitted storage, media units, shelving, bedroom furniture, sourced furniture and custom pieces before planning the final fit."
      image="/showroom/wall-units-example-02.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/wall-units/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Wall unit options</p>
            <h2>Make storage and display feel like part of the room.</h2>
          </div>
          <div className="service-examples-gallery">
            {wallUnitOptions.map((option) => (
              <figure className="service-example-card" key={option.title}>
                <div className="curtain-type-image">
                  <Image
                    src={option.src}
                    alt={`${option.title} example by Free State Curtain Parlour`}
                    width={1200}
                    height={1620}
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                  <strong>{option.title}</strong>
                </div>
                <figcaption>
                  <span>{option.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ServicePageLinks currentPath="/services/wall-units/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
