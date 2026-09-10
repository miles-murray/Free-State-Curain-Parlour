import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Interior Guidance Options | Free State Curtain Parlour",
  description:
    "Explore showroom advice, on-site visits, fabric selection, wallpaper selection, blind selection, lighting guidance, decor selection, room planning, furniture placement, wood finishes and furniture painting.",
};

const guidanceOptions = [
  {
    src: "/showroom/showroom-real-main.jpeg",
    title: "Showroom advice",
    description:
      "Start in the showroom by comparing fabrics, blinds, wallpaper, rugs, lighting and decor together.",
  },
  {
    src: "/showroom/whole-room-approach.jpeg",
    title: "Room planning",
    description:
      "Look at how the space is used, what feels unfinished and which choices need to work together.",
  },
  {
    src: "/showroom/installation-fabric-display.jpg",
    title: "On-site visits",
    description:
      "For selected projects, the team can review measurements and practical details in the actual room.",
  },
  {
    src: "/showroom/curtains-fabrics-example-04.jpeg",
    title: "Fabric selection",
    description:
      "Narrow down fabric weight, colour, texture and finish with the full room direction in mind.",
  },
  {
    src: "/showroom/service-curtains-fabrics.jpeg",
    title: "Curtain guidance",
    description:
      "Choose curtain fabric, lining, fullness, track, rod and finish with the room in mind.",
  },
  {
    src: "/showroom/service-blinds.jpeg",
    title: "Blind selection",
    description:
      "Compare blind types, operation, texture, colour, privacy and light control before measuring and ordering.",
  },
  {
    src: "/showroom/service-wallpaper-decor.jpeg",
    title: "Wallpaper selection",
    description:
      "Choose wallpaper, custom wallpaper, feature wall direction and textured finishes around the room.",
  },
  {
    src: "/showroom/showroom-real-lighting.jpeg",
    title: "Lighting guidance",
    description:
      "Select lamps, pendant lighting or LED direction as part of the full interior finish.",
  },
  {
    src: "/showroom/decor-display.jpg",
    title: "Decor selection",
    description:
      "Choose mirrors, rugs, decor objects and finishing accessories that connect the room.",
  },
  {
    src: "/showroom/service-furniture-room-settings.jpeg",
    title: "Furniture placement",
    description:
      "Think through scale, movement, comfort and how furniture pieces sit with curtains, rugs and decor.",
  },
  {
    src: "/showroom/wall-units-example-04.jpeg",
    title: "Wood finishes",
    description:
      "Choose wood tones, paint direction and finish details that sit properly with the rest of the room.",
  },
  {
    src: "/showroom/furniture-decor-example-03.jpeg",
    title: "Furniture painting",
    description:
      "Choose paint colour and finish direction for pieces that need to be refreshed or tied into the room.",
  },
  {
    src: "/showroom/showroom-real-vignette.jpeg",
    title: "Interior decorating guidance",
    description:
      "Bring curtains, blinds, wallpaper, furniture, lighting and decor into one clear direction.",
  },
];

export default function InteriorGuidanceOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Interior guidance"
      title="Interior design and decorating guidance."
      intro="Explore showroom advice, on-site visits, room planning, fabric selection, curtain guidance, blind selection, wallpaper selection, lighting guidance, decor selection, furniture placement, wood finishes and furniture painting."
      image="/showroom/whole-room-approach.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Guidance options</p>
            <h2>Start with the room, then choose the right next step.</h2>
          </div>
          <div className="service-examples-gallery">
            {guidanceOptions.map((option) => (
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
