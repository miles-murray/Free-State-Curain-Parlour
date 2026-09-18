import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Interior Guidance Options | Free State Curtain Parlour",
  description:
    "Explore showroom advice, on-site visits, fabric selection, wallpaper selection, blind selection, lighting guidance, decor selection, room planning, furniture placement, wood finishes and furniture painting.",
  path: "/services/interior-guidance/examples",
  image: "/showroom/interior-guidance-dining-room.png",
});

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
    src: "/showroom/on-site-visits.png",
    title: "On-site visits",
    description:
      "For selected projects, the team can review measurements and practical details in the actual room.",
  },
  {
    src: "/showroom/fabric-selection-sample-books.jpg",
    title: "Fabric selection",
    description:
      "Narrow down fabric weight, colour, texture and finish with the full room direction in mind.",
  },
  {
    src: "/showroom/curtain-guidance-fabrics.webp",
    title: "Curtain guidance",
    description:
      "Choose curtain fabric, lining, fullness, track, rod and finish with the room in mind.",
  },
  {
    src: "/showroom/blind-selection-window.png",
    title: "Blind selection",
    description:
      "Compare blind types, operation, texture, colour, privacy and light control before measuring and ordering.",
  },
  {
    src: "/showroom/wallpaper-selection-meeting-room.png",
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
    src: "/showroom/decor-selection-shelving.jpg",
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
          <ServiceBreadcrumbs currentPath="/services/interior-guidance/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Guidance options</p>
            <h2>Start with the room, then choose the right next step.</h2>
          </div>
          <div className="service-examples-gallery">
            {guidanceOptions.map((option) => (
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
          <ServicePageLinks currentPath="/services/interior-guidance/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
