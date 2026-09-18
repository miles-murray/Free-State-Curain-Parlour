import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Rugs, Lighting & Decor Options | Free State Curtain Parlour",
  description:
    "Explore rugs, lamps, pendant lighting, LED lighting, mirrors, vases, decor objects, room accessories, scatter cushions and quilts from Free State Curtain Parlour.",
  path: "/services/rugs-lighting-decor/examples",
  image: "/showroom/interior-finishes-lounge.png",
});

const finishingOptions = [
  {
    src: "/showroom/rug-texture-close-up.jpeg",
    title: "Rugs",
    description:
      "Rugs selected around room size, furniture placement, colour, texture and the way the space is used.",
  },
  {
    src: "/showroom/lamp-wallpaper-close-up.jpeg",
    title: "Lamps",
    description:
      "Table lamps and decorative lamps chosen as part of the full room finish.",
  },
  {
    src: "/showroom/pendant-lighting.webp",
    title: "Pendant lighting",
    description:
      "Hanging lights selected for scale, atmosphere and the way the room is layered.",
  },
  {
    src: "/showroom/led-lighting-living-room.png",
    title: "LED lighting",
    description:
      "Subtle LED details considered with the right electrical support when the room needs it.",
  },
  {
    src: "/showroom/woven-mirror.webp",
    title: "Mirrors",
    description:
      "Mirrors chosen for scale, reflection, balance and the final personality of the room.",
  },
  {
    src: "/showroom/decor-objects-close-up.jpeg",
    title: "Decor objects",
    description:
      "Objects, vases, shelves and styling details used to complete the space without overcrowding it.",
  },
  {
    src: "/showroom/vases-close-up.jpeg",
    title: "Vases",
    description:
      "Decorative vases and vessels used as finishing pieces for shelves, tables and room settings.",
  },
  {
    src: "/showroom/room-accessories-bedroom.png",
    title: "Room accessories",
    description:
      "Small finishing accessories selected around colour, texture and the final feel of the room.",
  },
  {
    src: "/showroom/scatter-cushions-close-up.jpeg",
    title: "Scatter cushions",
    description:
      "Soft decor layers that connect fabric, colour and comfort across the room.",
  },
];

export default function FinishingOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Finishing layers"
      title="Rugs, lighting and decor options."
      intro="Explore rugs, lamps, pendant lighting, LED lighting, mirrors, vases, decor objects, room accessories, scatter cushions and quilts."
      image="/showroom/service-furniture-room-settings.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/rugs-lighting-decor/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Finishing pieces</p>
            <h2>Layer the room with pieces that feel connected.</h2>
          </div>
          <div className="service-examples-gallery">
            {finishingOptions.map((option) => (
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
          <ServicePageLinks currentPath="/services/rugs-lighting-decor/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
