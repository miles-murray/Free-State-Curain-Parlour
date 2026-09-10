import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Rugs, Lighting & Decor Options | Free State Curtain Parlour",
  description:
    "Explore rugs, lamps, pendant lighting, LED lighting, mirrors, vases, decor objects, room accessories, scatter cushions and quilts from Free State Curtain Parlour.",
};

const finishingOptions = [
  {
    src: "/showroom/service-furniture-room-settings.jpeg",
    title: "Rugs",
    description:
      "Rugs selected around room size, furniture placement, colour, texture and the way the space is used.",
  },
  {
    src: "/showroom/showroom-real-lighting.jpeg",
    title: "Lamps",
    description:
      "Table lamps and decorative lamps chosen as part of the full room finish.",
  },
  {
    src: "/showroom/showroom-gallery-08.jpeg",
    title: "Pendant lighting",
    description:
      "Hanging lights selected for scale, atmosphere and the way the room is layered.",
  },
  {
    src: "/showroom/showroom-real-lighting.jpeg",
    title: "LED lighting",
    description:
      "Subtle LED details considered with the right electrical support when the room needs it.",
  },
  {
    src: "/showroom/decor-display.jpg",
    title: "Mirrors",
    description:
      "Mirrors chosen for scale, reflection, balance and the final personality of the room.",
  },
  {
    src: "/showroom/showroom-gallery-07.jpeg",
    title: "Decor objects",
    description:
      "Objects, vases, shelves and styling details used to complete the space without overcrowding it.",
  },
  {
    src: "/showroom/showroom-gallery-04.jpeg",
    title: "Vases",
    description:
      "Decorative vases and vessels used as finishing pieces for shelves, tables and room settings.",
  },
  {
    src: "/showroom/showroom-gallery-05.jpeg",
    title: "Room accessories",
    description:
      "Small finishing accessories selected around colour, texture and the final feel of the room.",
  },
  {
    src: "/showroom/showroom-real-room-setting.jpeg",
    title: "Scatter cushions",
    description:
      "Soft decor layers that connect fabric, colour and comfort across the room.",
  },
  {
    src: "/showroom/bedroom-setting.jpg",
    title: "Quilts",
    description:
      "Bedroom finishing layers chosen around comfort, fabric, colour and decor direction.",
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
          <div className="service-examples-heading">
            <p className="eyebrow light">Finishing pieces</p>
            <h2>Layer the room with pieces that feel connected.</h2>
          </div>
          <div className="service-examples-gallery">
            {finishingOptions.map((option) => (
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
