import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Furniture & Decor Examples | Free State Curtain Parlour",
  description:
    "View furniture, soft furnishing and decor examples from Free State Curtain Parlour.",
  path: "/services/furniture-decor/examples",
});

const examples = [
  {
    src: "/showroom/furniture-decor-example-01.jpeg",
    caption: "Soft furnishings and room setting",
  },
  {
    src: "/showroom/furniture-decor-example-02.jpeg",
    caption: "Bedside furniture detail",
  },
  {
    src: "/showroom/furniture-decor-example-03.jpeg",
    caption: "Furniture, cushions and decor layers",
  },
  {
    src: "/showroom/furniture-decor-example-04.jpeg",
    caption: "Showroom furniture setting",
  },
  {
    src: "/showroom/furniture-decor-example-05.jpeg",
    caption: "Decor objects and finishing pieces",
  },
  {
    src: "/showroom/furniture-decor-example-06.jpeg",
    caption: "Tables, lighting and showroom decor",
  },
];

export default function FurnitureDecorExamplesPage() {
  return (
    <InteriorPage
      eyebrow="Furniture & decor"
      title="Examples of furniture, soft furnishings and finishing pieces."
      intro="A closer look at the pieces that add scale, comfort, colour and character to the room."
      image="/showroom/furniture-decor-example-03.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/furniture-decor/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Examples</p>
            <h2>See how the room is layered.</h2>
          </div>
          <div className="service-examples-gallery">
            {examples.map((example) => (
              <figure className="service-example-card" key={example.src}>
                <Image
                  src={example.src}
                  alt={`${example.caption} at Free State Curtain Parlour`}
                  width={1200}
                  height={1620}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <figcaption>{example.caption}</figcaption>
              </figure>
            ))}
          </div>
          <ServicePageLinks currentPath="/services/furniture-decor/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
