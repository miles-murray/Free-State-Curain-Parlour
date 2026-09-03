import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Wall Units Examples | Free State Curtain Parlour",
  description:
    "View wall unit, display shelving and fitted storage examples from Free State Curtain Parlour.",
};

const examples = [
  {
    src: "/showroom/wall-units-example-01.jpeg",
    caption: "Display wall divider",
  },
  {
    src: "/showroom/wall-units-example-02.jpeg",
    caption: "Open shelving and decor display",
  },
  {
    src: "/showroom/wall-units-example-03.jpeg",
    caption: "Floating shelving with room setting",
  },
  {
    src: "/showroom/wall-units-example-04.jpeg",
    caption: "Storage and display cabinet",
  },
  {
    src: "/showroom/wall-units-example-05.jpeg",
    caption: "Shelving with furniture layout",
  },
];

export default function WallUnitsExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Wall units"
      title="Examples of shelving, display and fitted storage."
      intro="A closer look at wall units and display pieces that shape how the room stores, shows and lives with everyday objects."
      image="/showroom/wall-units-example-02.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Examples</p>
            <h2>See how storage becomes part of the room.</h2>
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
