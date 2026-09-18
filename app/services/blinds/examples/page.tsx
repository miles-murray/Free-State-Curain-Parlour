import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Blind Types | Free State Curtain Parlour",
  description:
    "Explore blind types from Free State Curtain Parlour in Bloemfontein, including Venetian blinds, roller blinds, Roman blinds, vertical blinds, wooden blinds, mock wood blinds, shutters and motorised blinds.",
  path: "/services/blinds/examples",
  image: "/showroom/venetian-blinds.png",
});

const blindOptions = [
  {
    src: "/showroom/venetian-blinds.png",
    title: "Venetian blinds",
    description:
      "Slatted aluminium blinds for flexible light control, privacy and a clean window finish.",
  },
  {
    src: "/showroom/screen-roller-blinds.jpg",
    title: "Screen roller blinds",
    description:
      "Screen roller blinds that soften glare while retaining natural light and daytime visibility.",
  },
  {
    src: "/showroom/roman-blinds-window.jpg",
    title: "Roman blinds",
    description:
      "Fabric blinds with a softer, more decorative finish for rooms that need warmth and texture.",
  },
  {
    src: "/showroom/relaxed-roman-blinds.png",
    title: "Relaxed Roman blinds",
    description:
      "Soft fabric blinds with a relaxed lower fold, suited to bathrooms, bedrooms and spaces that need a softer window finish.",
  },
  {
    src: "/showroom/vertical-blinds.png",
    title: "Vertical blinds",
    description:
      "Vertical slat blinds for wide windows, sliding doors and practical privacy control.",
  },
  {
    src: "/showroom/wooden-blinds.png",
    title: "Wooden blinds",
    description:
      "Wood-look or timber-style blinds for a warmer, more structured interior finish.",
  },
  {
    src: "/showroom/mock-wood-blinds.png",
    title: "Mock wood blinds",
    description:
      "Practical wood-look slatted blinds with an easy-care finish for warm, structured interiors.",
  },
  {
    src: "/showroom/shutters.png",
    title: "Shutters",
    description:
      "Fitted shutters for structured light control, privacy and a clean architectural window finish.",
  },
  {
    src: "/showroom/motorised-blinds.webp",
    title: "Motorised blinds",
    description:
      "Electric blind options for easier operation, larger windows and automated room control.",
  },
  {
    src: "/showroom/bamboo-twist-blinds.png",
    title: "Bamboo twist blinds",
    description:
      "Natural textured blinds for rooms that need a relaxed, warmer and more organic finish.",
  },
  {
    src: "/showroom/outdoor-blinds-screen.png",
    title: "Outdoor blinds",
    description:
      "Practical blind options for covered outdoor areas, patios and spaces that need shade or screening.",
  },
  {
    src: "/showroom/blockout-blinds.webp",
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
          <ServiceBreadcrumbs currentPath="/services/blinds/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Blind types</p>
            <h2>Choose the blind style first, then refine the finish.</h2>
          </div>
          <div className="service-examples-gallery">
            {blindOptions.map((blind) => (
              <figure className="service-example-card" key={blind.title}>
                <div className="curtain-type-image">
                  <Image
                    src={blind.src}
                    alt={`${blind.title} example by Free State Curtain Parlour`}
                    width={1200}
                    height={1620}
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                  <strong>{blind.title}</strong>
                </div>
                <figcaption>
                  <span>{blind.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ServicePageLinks currentPath="/services/blinds/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
