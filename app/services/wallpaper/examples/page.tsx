import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Wallpaper & Interior Finish Options | Free State Curtain Parlour",
  description:
    "Explore wallpaper, custom wallpaper, feature wall, textured finish, paint finish, wood finish and wallpaper installation options from Free State Curtain Parlour.",
};

const wallpaperOptions = [
  {
    src: "/showroom/service-wallpaper-decor.jpeg",
    title: "Wallpaper",
    description:
      "Wallpaper selected around colour, pattern, room size, light and the furniture already in the space.",
  },
  {
    src: "/showroom/showroom-real-vignette.jpeg",
    title: "Feature walls",
    description:
      "A stronger wall moment for rooms that need pattern, depth or a clear focal point.",
  },
  {
    src: "/showroom/showroom-gallery-10.jpeg",
    title: "Custom wallpaper",
    description:
      "Custom wallpaper planned around the room direction, scale, colour palette and final installation needs.",
  },
  {
    src: "/showroom/showroom-gallery-06.jpeg",
    title: "Wallpaper installation",
    description:
      "Installation planned around wall size, repeat, joins, quantities and the final direction of the room.",
  },
  {
    src: "/showroom/showroom-gallery-04.jpeg",
    title: "Textured wall finishes",
    description:
      "Quiet texture and surface detail for rooms that need depth without a heavy pattern.",
  },
  {
    src: "/showroom/showroom-gallery-05.jpeg",
    title: "Interior finishes",
    description:
      "Room finishes chosen with curtains, blinds, upholstery, rugs, lighting and decor in mind.",
  },
  {
    src: "/showroom/wall-units-example-04.jpeg",
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
    src: "/showroom/showroom-real-vignette.jpeg",
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
          <div className="service-examples-heading">
            <p className="eyebrow light">Wall finishes</p>
            <h2>Choose the wall finish around the room, not in isolation.</h2>
          </div>
          <div className="service-examples-gallery">
            {wallpaperOptions.map((option) => (
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
