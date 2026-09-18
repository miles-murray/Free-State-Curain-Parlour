import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Wallpaper & Interior Finish Options | Free State Curtain Parlour",
  description:
    "Explore wallpaper, custom wallpaper, feature wall, textured finish, paint finish, wood finish and wallpaper installation options from Free State Curtain Parlour.",
  path: "/services/wallpaper/examples",
  image: "/showroom/wallpaper-installation.png",
});

const wallpaperOptions = [
  {
    src: "/showroom/wallpaper-bedroom-finish.png",
    title: "Wallpaper",
    description:
      "Wallpaper selected around colour, pattern, room size, light and the furniture already in the space.",
  },
  {
    src: "/showroom/feature-wall-bedroom.png",
    title: "Feature walls",
    description:
      "A stronger wall moment for rooms that need pattern, depth or a clear focal point.",
  },
  {
    src: "/showroom/custom-wallpaper-bedroom-photo.png",
    title: "Custom wallpaper",
    description:
      "Custom wallpaper planned around the room direction, scale, colour palette and final installation needs.",
  },
  {
    src: "/showroom/wallpaper-installation.png",
    title: "Wallpaper installation",
    description:
      "Installation planned around wall size, repeat, joins, quantities and the final direction of the room.",
  },
  {
    src: "/showroom/textured-wall-finish-room.png",
    title: "Textured wall finishes",
    description:
      "Quiet texture and surface detail for rooms that need depth without a heavy pattern.",
  },
  {
    src: "/showroom/interior-finishes-lounge.png",
    title: "Interior finishes",
    description:
      "Room finishes chosen with curtains, blinds, upholstery, rugs, lighting and decor in mind.",
  },
  {
    src: "/showroom/wood-finishes-close-up.jpeg",
    title: "Wood finishes",
    description:
      "Wood tones and finish direction chosen to sit properly with wall units, furniture and the rest of the room.",
  },
  {
    src: "/showroom/showroom-gallery-08.jpeg",
    title: "Paint finishes",
    description:
      "Paint colour and finish direction used when furniture, woodwork or room details need a refreshed look.",
  },
  {
    src: "/showroom/room-finish-coordination.png",
    title: "Room finish coordination",
    description:
      "Wallpaper, wood finishes, paint direction and decor details considered together before final choices are made.",
  },
];

export default function WallpaperOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Wallpaper"
      title="Wallpaper and interior finish options."
      intro="Explore wallpaper, custom wallpaper, feature walls, textured finishes, wood finishes, paint finishes and installation details before choosing what suits the room."
      image="/showroom/service-wallpaper-decor.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/wallpaper/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Wall finishes</p>
            <h2>Choose the wall finish around the room, not in isolation.</h2>
          </div>
          <div className="service-examples-gallery">
            {wallpaperOptions.map((option) => (
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
          <ServicePageLinks currentPath="/services/wallpaper/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
