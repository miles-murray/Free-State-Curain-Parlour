import { MobileMenu } from "../../../components/MobileMenu";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Curtain Types | Free State Curtain Parlour",
  description:
    "Explore curtain types from Free State Curtain Parlour in Bloemfontein, including custom curtains, sheer curtains, blockout curtains, wave curtains, pinch pleat curtains, pencil pleat curtains, eyelet curtains, stage curtains and electric curtains.",
  path: "/services/curtains-fabrics/examples",
  image: "/showroom/electric-wifi-curtains.png",
});

const curtainTypes = [
  {
    src: "/showroom/custom-curtains-workshop.jpeg",
    title: "Custom curtains",
    description:
      "Curtains made in the workshop from selected fabric, measured, prepared and finished around the room.",
  },
  {
    src: "/showroom/sheer-curtains-patterned.jpg",
    title: "Sheer curtains",
    description:
      "Lightweight curtains for soft daylight, privacy and layering, often paired with blockout or lined curtains.",
  },
  {
    src: "/showroom/blockout-lined-curtain.png",
    title: "Blockout lined curtain",
    description:
      "Curtains with lining or blockout fabric for bedrooms, TV rooms and spaces that need more privacy or light control.",
  },
  {
    src: "/showroom/wave-curtains.png",
    title: "Wave curtains",
    description:
      "Curtains made with soft, even folds that create a clean wave effect across wide windows or sliding doors.",
  },
  {
    src: "/showroom/pinch-pleat-curtains.png",
    title: "Pinch pleat curtains",
    description:
      "Structured curtains with neat pleated headings, made to hang with fuller folds and a more tailored finish.",
  },
  {
    src: "/showroom/eyelet-curtains.png",
    title: "Eyelet curtains",
    description:
      "Curtains with metal eyelets for a simple, relaxed look on a curtain rod.",
  },
  {
    src: "/showroom/stage-hall-curtains.png",
    title: "Stage and hall curtains",
    description:
      "Larger curtain projects for halls, stages and public spaces, measured and made around the space.",
  },
  {
    src: "/showroom/electric-wifi-curtains.png",
    title: "Electric and Wi-Fi operated curtains",
    description:
      "Motorised curtain options for easier opening and closing, including electric tracks and Wi-Fi operated curtain systems.",
  },
];

export default function CurtainsFabricsExamplesPage() {
  return (
    <main className="showroom-page service-examples-page">
      <MobileMenu />
      <div className="showroom-page-top">
        <SiteHeader />
      </div>

      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/curtains-fabrics/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Curtain types</p>
            <h1>Choose the curtain style first, then refine the finish.</h1>
          </div>
          <div className="service-examples-gallery">
            {curtainTypes.map((curtain) => (
              <figure className="service-example-card" key={curtain.title}>
                <div className="curtain-type-image">
                  <Image
                    src={curtain.src}
                    alt={`${curtain.title} by Free State Curtain Parlour`}
                    width={1200}
                    height={1620}
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                  <strong>{curtain.title}</strong>
                </div>
                <figcaption>
                  <span>{curtain.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ServicePageLinks currentPath="/services/curtains-fabrics/examples" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
