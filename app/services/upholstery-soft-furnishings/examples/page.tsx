import { InteriorPage } from "../../../components/InteriorPage";
import {
  ServiceBreadcrumbs,
  ServicePageLinks,
} from "../../../components/ServicePageNavigation";
import { createPageMetadata } from "../../../seo";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Upholstery & Soft Furnishing Options | Free State Curtain Parlour",
  description:
    "Explore custom upholstery, reupholstery, furniture revamps, furniture painting, leather products, headboards, ottomans, trimmings, scatter cushions and quilts.",
  path: "/services/upholstery-soft-furnishings/examples",
  image: "/showroom/upholstery-green-armchairs.png",
});

const upholsteryOptions = [
  {
    src: "/showroom/custom-upholstery-fabric-close-up.jpeg",
    title: "Custom upholstery",
    description:
      "Upholstery choices planned around the furniture shape, fabric direction and how the room should feel.",
  },
  {
    src: "/showroom/reupholstery-cream-chair.png",
    title: "Reupholstery",
    description:
      "Existing pieces refreshed with new fabric, trims and finish choices where the frame still has life.",
  },
  {
    src: "/showroom/furniture-decor-example-03.jpeg",
    title: "Furniture revamps",
    description:
      "Furniture updates that can include upholstery direction, finish choices and practical repair coordination.",
  },
  {
    src: "/showroom/minor-repairs-chair.png",
    title: "Minor repairs",
    description:
      "Selected repair support where a chair or upholstered piece needs practical attention before it is finished.",
  },
  {
    src: "/showroom/headboards-black-upholstered.png",
    title: "Headboards",
    description:
      "Fabric-led headboards planned around bedroom scale, colour, comfort and the full room direction.",
  },
  {
    src: "/showroom/ottoman-clean.png",
    title: "Ottomans",
    description:
      "Ottomans planned as practical soft pieces for bedrooms, lounges and layered room settings.",
  },
  {
    src: "/showroom/upholstery-scatter-cushions-sofa.png",
    title: "Scatter cushions",
    description:
      "Custom soft furnishing details used to pull fabric, colour and texture together in the room.",
  },
  {
    src: "/showroom/quilts-bedroom.png",
    title: "Quilts",
    description:
      "Bedroom soft layers chosen around fabric, comfort, colour and the rest of the room.",
  },
  {
    src: "/showroom/trimmings.webp",
    title: "Trimmings",
    description:
      "Decorative trims and finishing details selected to complete curtains, upholstery and soft furnishings.",
  },
  {
    src: "/showroom/leather-products-chair.jpeg",
    title: "Leather products",
    description:
      "Leather product and specialist upholstery work coordinated where the piece needs that finish.",
  },
];

export default function UpholsteryOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Upholstery"
      title="Upholstery and soft furnishing options."
      intro="Explore custom upholstery, reupholstery, furniture revamps, furniture painting, minor repairs, leather products, headboards, ottomans, trimmings, scatter cushions and quilts."
      image="/showroom/furniture-decor-example-02.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <ServiceBreadcrumbs currentPath="/services/upholstery-soft-furnishings/examples" />
          <div className="service-examples-heading">
            <p className="eyebrow light">Soft furnishings</p>
            <h2>Refresh the piece, then connect it back to the room.</h2>
          </div>
          <div className="service-examples-gallery">
            {upholsteryOptions.map((option) => (
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
          <ServicePageLinks currentPath="/services/upholstery-soft-furnishings/examples" />
        </div>
      </section>
    </InteriorPage>
  );
}
