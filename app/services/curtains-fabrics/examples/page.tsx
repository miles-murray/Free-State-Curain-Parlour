import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Curtain Options | Free State Curtain Parlour",
  description:
    "Explore custom curtain options, fabrics, textures, tracks and finishes from Free State Curtain Parlour.",
};

const examples = [
  {
    src: "/showroom/curtains-fabrics-example-01.jpeg",
    title: "Custom curtain fabrics",
    description:
      "Compare colour, texture, weight and pattern before choosing the fabric direction for the room.",
  },
  {
    src: "/showroom/curtains-fabrics-example-02.jpeg",
    title: "Textured curtain finishes",
    description:
      "Use richer textures when the curtain needs to add warmth, depth or a more finished look.",
  },
  {
    src: "/showroom/curtains-fabrics-example-03.jpeg",
    title: "Room-coordinated curtains",
    description:
      "Plan curtains alongside rugs, upholstery and decor so the room feels considered as one whole space.",
  },
  {
    src: "/showroom/curtains-fabrics-example-04.jpeg",
    title: "Fabric library",
    description:
      "Browse fabric books and samples in the showroom to narrow down practical and decorative options.",
  },
  {
    src: "/showroom/curtains-fabrics-example-05.jpeg",
    title: "Practical fabric ranges",
    description:
      "Look at durable, easy-living fabric choices for homes, guesthouses and rooms used every day.",
  },
  {
    src: "/showroom/curtains-fabrics-example-06.jpeg",
    title: "Full fabric wall",
    description:
      "See a broader range of colours and textures together before deciding what suits the light in the room.",
  },
  {
    src: "/showroom/curtains-fabrics-example-07.jpeg",
    title: "Designer fabric samples",
    description:
      "Compare supplier ranges and designer samples for custom curtains, blinds and soft furnishings.",
  },
  {
    src: "/showroom/curtains-fabrics-example-08.jpeg",
    title: "Close fabric comparison",
    description:
      "Place fabrics side by side to check tone, texture, pattern scale and how they work with other finishes.",
  },
  {
    src: "/showroom/curtains-fabrics-example-09.jpeg",
    title: "Finished curtain detail",
    description:
      "Review the final hang, fullness and finish once the curtain style and fitting details come together.",
  },
];

export default function CurtainsFabricsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Curtains"
      title="Curtain options, fabrics and finishes."
      intro="Use this as a starting point for custom curtains, hall curtains, stage curtains, electric curtains, Wi-Fi operated curtains, tracks, rods, rails, measuring and installation."
      image="/showroom/curtains-fabrics-example-01.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Curtain choices</p>
            <h2>Start with the type of curtain, then refine the fabric.</h2>
          </div>
          <div className="service-examples-gallery">
            {examples.map((example) => (
              <figure className="service-example-card" key={example.src}>
                <img src={example.src} alt="" />
                <figcaption>
                  <strong>{example.title}</strong>
                  <span>{example.description}</span>
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
