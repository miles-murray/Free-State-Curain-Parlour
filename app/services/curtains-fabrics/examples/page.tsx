import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Curtains & Fabrics Examples | Free State Curtain Parlour",
  description:
    "View curtain fabric, texture and showroom examples from Free State Curtain Parlour.",
};

const examples = [
  {
    src: "/showroom/curtains-fabrics-example-01.jpeg",
    caption: "Curtain fabric samples",
  },
  {
    src: "/showroom/curtains-fabrics-example-02.jpeg",
    caption: "Textured finishes",
  },
  {
    src: "/showroom/curtains-fabrics-example-03.jpeg",
    caption: "Layered rug and fabric textures",
  },
  {
    src: "/showroom/curtains-fabrics-example-04.jpeg",
    caption: "Fabric library",
  },
  {
    src: "/showroom/curtains-fabrics-example-05.jpeg",
    caption: "Stain-free fabric ranges",
  },
  {
    src: "/showroom/curtains-fabrics-example-06.jpeg",
    caption: "Showroom fabric wall",
  },
  {
    src: "/showroom/curtains-fabrics-example-07.jpeg",
    caption: "Hertex samples",
  },
  {
    src: "/showroom/curtains-fabrics-example-08.jpeg",
    caption: "Close fabric comparison",
  },
  {
    src: "/showroom/curtains-fabrics-example-09.jpeg",
    caption: "Full-length curtain detail",
  },
];

export default function CurtainsFabricsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Curtains & fabrics"
      title="Examples of fabrics, textures and finished curtain choices."
      intro="A closer look at fabric weight, pattern, texture and showroom ranges before the final room decision is made."
      image="/showroom/curtains-fabrics-example-01.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Examples</p>
            <h2>Compare the details in person.</h2>
          </div>
          <div className="service-examples-gallery">
            {examples.map((example) => (
              <figure className="service-example-card" key={example.src}>
                <img src={example.src} alt="" />
                <figcaption>{example.caption}</figcaption>
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
